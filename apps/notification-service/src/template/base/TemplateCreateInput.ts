/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { MessageWhereUniqueInput } from "../../message/base/MessageWhereUniqueInput";
import { ValidateNested, IsOptional, IsString } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class TemplateCreateInput {
  @ApiProperty({
    required: false,
    type: () => MessageWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => MessageWhereUniqueInput)
  @IsOptional()
  @Field(() => MessageWhereUniqueInput, {
    nullable: true,
  })
  messages?: MessageWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  parameters?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  text?: string | null;
}

export { TemplateCreateInput as TemplateCreateInput };
