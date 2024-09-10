import { SortOrder } from "../../util/SortOrder";

export type BookingOrderByInput = {
  bookingDate?: SortOrder;
  createdAt?: SortOrder;
  event?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
  user?: SortOrder;
};
