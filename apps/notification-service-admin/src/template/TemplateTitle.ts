import { Template as TTemplate } from "../api/template/Template";

export const TEMPLATE_TITLE_FIELD = "parameters";

export const TemplateTitle = (record: TTemplate): string => {
  return record.parameters || String(record.id);
};
