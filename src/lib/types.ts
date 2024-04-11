import { DateValue } from "react-aria-components";

export type HolidayProps = {
  country: string;
  iso: string;
  year: number;
  date: string;
  day: string;
  name: string;
  type: string;
};

export type HolidaysResponse = {
  data?: HolidayProps[];
  error?: string;
};

export interface FormState {
  firstName: string | undefined;
  lastName: string | undefined;
  email: string | undefined;
  age: number | undefined;
  photo: File | undefined;
  date: DateValue | undefined;
  time: string | undefined;
}

export type FieldName =
  | "firstName"
  | "lastName"
  | "email"
  | "age"
  | "photo"
  | "date"
  | "time";
