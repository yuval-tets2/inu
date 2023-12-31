/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import * as apollo from "apollo-server-express";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { CreateTemplateArgs } from "./CreateTemplateArgs";
import { UpdateTemplateArgs } from "./UpdateTemplateArgs";
import { DeleteTemplateArgs } from "./DeleteTemplateArgs";
import { TemplateCountArgs } from "./TemplateCountArgs";
import { TemplateFindManyArgs } from "./TemplateFindManyArgs";
import { TemplateFindUniqueArgs } from "./TemplateFindUniqueArgs";
import { Template } from "./Template";
import { Message } from "../../message/base/Message";
import { TemplateService } from "../template.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Template)
export class TemplateResolverBase {
  constructor(
    protected readonly service: TemplateService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Template",
    action: "read",
    possession: "any",
  })
  async _templatesMeta(
    @graphql.Args() args: TemplateCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Template])
  @nestAccessControl.UseRoles({
    resource: "Template",
    action: "read",
    possession: "any",
  })
  async templates(
    @graphql.Args() args: TemplateFindManyArgs
  ): Promise<Template[]> {
    return this.service.findMany(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Template, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Template",
    action: "read",
    possession: "own",
  })
  async template(
    @graphql.Args() args: TemplateFindUniqueArgs
  ): Promise<Template | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Template)
  @nestAccessControl.UseRoles({
    resource: "Template",
    action: "create",
    possession: "any",
  })
  async createTemplate(
    @graphql.Args() args: CreateTemplateArgs
  ): Promise<Template> {
    return await this.service.create({
      ...args,
      data: {
        ...args.data,

        messages: args.data.messages
          ? {
              connect: args.data.messages,
            }
          : undefined,
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Template)
  @nestAccessControl.UseRoles({
    resource: "Template",
    action: "update",
    possession: "any",
  })
  async updateTemplate(
    @graphql.Args() args: UpdateTemplateArgs
  ): Promise<Template | null> {
    try {
      return await this.service.update({
        ...args,
        data: {
          ...args.data,

          messages: args.data.messages
            ? {
                connect: args.data.messages,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Template)
  @nestAccessControl.UseRoles({
    resource: "Template",
    action: "delete",
    possession: "any",
  })
  async deleteTemplate(
    @graphql.Args() args: DeleteTemplateArgs
  ): Promise<Template | null> {
    try {
      return await this.service.delete(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => Message, {
    nullable: true,
    name: "messages",
  })
  @nestAccessControl.UseRoles({
    resource: "Message",
    action: "read",
    possession: "any",
  })
  async resolveFieldMessages(
    @graphql.Parent() parent: Template
  ): Promise<Message | null> {
    const result = await this.service.getMessages(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
