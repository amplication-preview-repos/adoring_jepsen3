import { Comment as TComment } from "../api/comment/Comment";

export const COMMENT_TITLE_FIELD = "event";

export const CommentTitle = (record: TComment): string => {
  return record.event?.toString() || String(record.id);
};
