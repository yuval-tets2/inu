import { Message as TMessage } from "../api/message/Message";

export const MESSAGE_TITLE_FIELD = "values";

export const MessageTitle = (record: TMessage): string => {
  return record.values || String(record.id);
};
