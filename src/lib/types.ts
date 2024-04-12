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
  firstName: string;
  lastName: string;
  email: string;
  age: number;
  photo: File | null;
  date: DateValue | null;
  time: string | null;
}

export type FieldName =
  | "firstName"
  | "lastName"
  | "email"
  | "age"
  | "photo"
  | "date"
  | "time";

export type ResponseProps = {
  message?: string;
  error?: string;
};
