import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type BookingWhereInput = {
  bookingDate?: DateTimeNullableFilter;
  event?: StringNullableFilter;
  id?: StringFilter;
  user?: StringNullableFilter;
};
