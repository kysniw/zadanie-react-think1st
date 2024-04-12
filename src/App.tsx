import React, { useEffect, useState } from "react";
import TextInput from "./components/TextInput";
import RangeInput from "./components/RangeInput";
import FileInput from "./components/FileInput";
import DatetimeInput from "./components/DateInput";
import SubmitButton from "./components/SubmitButton";
import {
  FieldName,
  FormState,
  HolidaysResponse,
  ResponseProps,
} from "./lib/types";
import TimeSelect from "./components/TimeSelect";
import { DateValue, Heading } from "react-aria-components";
import { sendFormData } from "./lib/actions";
import { getDates } from "./lib/data";
import { isObservanceDay } from "./utils/common";

function App() {
  const initialState = {
    firstName: "",
    lastName: "",
    email: "",
    age: 8,
    photo: null,
    date: null,
    time: null,
  };

  const [formData, setFormData] = useState<FormState>(initialState);
  const [holidays, setHolidays] = useState<HolidaysResponse>();
  const [resMessage, setResMessage] = useState<ResponseProps>();

  useEffect(() => {
    const getData = async () => {
      const holidaysData = (await getDates()) as HolidaysResponse;
      setHolidays(holidaysData);
    };

    getData();
  }, []);

  const isButtonDisabled = !!Object.keys(formData).find(
    (key) =>
      formData[key as FieldName] === null || formData[key as FieldName] === ""
  );

  const handleValueChange = (
    value: string | number | File | DateValue | null,
    name: FieldName
  ) => {
    if (name === "date")
      setFormData({ ...formData, date: value as DateValue, time: null });
    else setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      data.append(key, value);
    });
    const res = await sendFormData(data);
    if (res.message) setResMessage({ message: res.message });
    else if (res.error) setResMessage({ error: res.error });
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-[#F0EAF8] px-4">
      <form
        onSubmit={handleFormSubmit}
        className="max-w-min sm:max-w-md w-full flex flex-col gap-4 my-12"
      >
        <Heading className=" text-2xl font-medium">Personal info</Heading>
        <TextInput
          name="firstName"
          label="First Name"
          value={formData.firstName}
          onValueChange={handleValueChange}
        />
        <TextInput
          name="lastName"
          label="Last Name"
          value={formData.lastName}
          onValueChange={handleValueChange}
        />
        <TextInput
          name="email"
          type="email"
          label="Email"
          value={formData.email}
          onValueChange={handleValueChange}
        />
        <RangeInput
          name="age"
          value={formData.age}
          onValueChange={handleValueChange}
        />
        <FileInput
          name="photo"
          value={formData.photo}
          onValueChange={handleValueChange}
        />
        <Heading className=" text-2xl font-medium mt-6">Your workout</Heading>
        <div className="flex flex-col gap-6 sm:gap-0 sm:flex-row sm:justify-between">
          <DatetimeInput
            name="date"
            value={formData.date}
            holidays={holidays}
            onValueChange={handleValueChange}
          />
          {formData.date && (
            <TimeSelect
              name="time"
              value={formData.time}
              onValueChange={handleValueChange}
              isObservance={isObservanceDay(formData.date, holidays)}
            />
          )}
        </div>
        <SubmitButton isDisabled={isButtonDisabled} />
        {resMessage?.message && (
          <p className=" text-green-500">{resMessage.message}</p>
        )}
        {resMessage?.error && (
          <p className=" text-red-500">{resMessage.error}</p>
        )}
      </form>
    </div>
  );
}

export default App;
