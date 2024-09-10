import { Booking as TBooking } from "../api/booking/Booking";

export const BOOKING_TITLE_FIELD = "event";

export const BookingTitle = (record: TBooking): string => {
  return record.event?.toString() || String(record.id);
};
