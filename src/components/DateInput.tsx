import React, { useEffect, useState } from "react";
import {
  Button,
  Calendar,
  CalendarCell,
  CalendarGrid,
  CalendarGridBody,
  CalendarGridHeader,
  CalendarHeaderCell,
  DateValue,
  Heading,
  Label,
  Tag,
  TagGroup,
  TagList,
  Text,
} from "react-aria-components";
import { CalendarDate } from "@internationalized/date";
import { getDates, tags } from "../lib/data";
import { FieldName, HolidaysResponse } from "../lib/types";
import { isNationalHoliday, parseToCalendarDate } from "../utils/common";
import { FaPlay } from "react-icons/fa6";

type DateInputProps = {
  name: FieldName;
  value: DateValue | undefined;
  onValueChange: (value: DateValue, name: FieldName) => void;
};

const DateInput = ({ name, value: date, onValueChange }: DateInputProps) => {
  const [holidays, setHolidays] = useState<HolidaysResponse>();

  useEffect(() => {
    const getData = async () => {
      const holidaysData = (await getDates()) as HolidaysResponse;
      setHolidays(holidaysData);
    };

    getData();
  }, []);

  const observanceHolidayMessage =
    holidays?.data?.find(
      (holiday) =>
        holiday.type === "OBSERVANCE" &&
        date?.compare(parseToCalendarDate(new Date(holiday.date))) === 0
    )?.name || null;

  const isDateUnavailable = (date: DateValue) =>
    new Date(date.toString()).getDay() === 0 ||
    isNationalHoliday(date, holidays);

  return (
    <Calendar
      minValue={new CalendarDate(2023, 1, 1)}
      maxValue={new CalendarDate(2023, 12, 31)}
      value={date}
      onChange={(date) => onValueChange(date, name)}
      isDateUnavailable={isDateUnavailable}
      className="basis-fit"
    >
      <Label>Date</Label>
      <div className="bg-white border border-[#CBB6E5] rounded-lg p-4">
        <header className="flex justify-between items-center mx-2 my-2">
          <Button
            className="outline-none w-5 flex justify-center text-[#CBB6E5] hover:text-[#761BE4] disabled:text-gray-200"
            slot="previous"
          >
            <FaPlay className="rotate-180" />
          </Button>
          <Heading className="font-medium" />
          <Button
            className="outline-none w-5 flex justify-center text-[#CBB6E5] hover:text-[#761BE4] disabled:text-gray-200"
            slot="next"
          >
            <FaPlay />
          </Button>
        </header>
        <CalendarGrid className="text-center" weekdayStyle="short">
          <CalendarGridHeader>
            {(day) => (
              <CalendarHeaderCell className="w-10 h-9 font-medium text-sm">
                {day.slice(0, -1)}
              </CalendarHeaderCell>
            )}
          </CalendarGridHeader>
          <CalendarGridBody>
            {(date) => (
              <CalendarCell
                date={date}
                className="data-[outside-month]:hidden rounded-full m-1 w-8 leading-8 data-[unavailable]:text-gray-300
                  outline-none data-[selected]:bg-[#761BE4] data-[selected]:text-white"
              />
            )}
          </CalendarGridBody>
        </CalendarGrid>
      </div>
      {observanceHolidayMessage && (
        <Text slot="errorMessage">It is {observanceHolidayMessage}</Text>
      )}
    </Calendar>
  );
};

export default DateInput;
