import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type CommentWhereInput = {
  content?: StringNullableFilter;
  event?: StringNullableFilter;
  id?: StringFilter;
  user?: StringNullableFilter;
};