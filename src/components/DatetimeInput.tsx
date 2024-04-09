import React from "react";
import {
  Button,
  Calendar,
  CalendarCell,
  CalendarGrid,
  CalendarGridBody,
  CalendarGridHeader,
  CalendarHeaderCell,
  Heading,
  Label,
  Tag,
  TagGroup,
  TagList,
} from "react-aria-components";

const DatetimeInput = () => {
  return (
    <>
      <Label>Date</Label>
      <div className="flex gap-4">
        <Calendar
          aria-label="Date"
          className="basis-fit bg-white border border-[#CBB6E5] rounded-lg p-4"
        >
          <header className="flex justify-between mx-2">
            <Button slot="previous">{"<"}</Button>
            <Heading />
            <Button slot="next">{">"}</Button>
          </header>
          <CalendarGrid className="text-center">
            <CalendarGridHeader>
              {(day) => (
                <CalendarHeaderCell className="w-10 h-8">
                  {day}
                </CalendarHeaderCell>
              )}
            </CalendarGridHeader>
            <CalendarGridBody>
              {(date) => (
                <CalendarCell
                  date={date}
                  className="data-[outside-month]:hidden w-8 leading-8"
                />
              )}
            </CalendarGridBody>
          </CalendarGrid>
        </Calendar>
        <TagGroup className="basis-auto">
          <TagList>
            <Tag>12:00</Tag>
            <Tag>14:00</Tag>
            <Tag>16:00</Tag>
            <Tag>18:00</Tag>
          </TagList>
        </TagGroup>
      </div>
    </>
  );
};

export default DatetimeInput;
