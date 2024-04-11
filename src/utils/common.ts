import { CalendarDate } from "@internationalized/date";
import { DateValue } from "react-aria-components";
import { HolidaysResponse } from "../lib/types";

export const parseToCalendarDate = (jsDate: Date) => {
  const year = jsDate.getFullYear();
  const month = jsDate.getMonth() + 1;
  const day = jsDate.getDate();

  return new CalendarDate(year, month, day);
};

export const isNationalHoliday = (
  date: DateValue,
  holidays: HolidaysResponse | undefined
) => {
  if (holidays?.data) {
    const matchDate = holidays.data.find(
      (holiday) =>
        holiday.type === "NATIONAL_HOLIDAY" &&
        date.compare(parseToCalendarDate(new Date(holiday.date))) === 0
    );

    return !!matchDate;
  }

  return false;
};
