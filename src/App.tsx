import React, { useState } from "react";
import TextInput from "./components/TextInput";
import RangeInput from "./components/RangeInput";
import FileInput from "./components/FileInput";
import DatetimeInput from "./components/DateInput";
import SubmitButton from "./components/SubmitButton";
import { FieldName, FormState } from "./lib/types";
import TimeSelect from "./components/TimeSelect";
import { DateValue } from "react-aria-components";

function App() {
  const initialState = {
    firstName: undefined,
    lastName: undefined,
    email: undefined,
    age: undefined,
    photo: undefined,
    date: undefined,
    time: undefined,
  };

  const [formData, setFormData] = useState<FormState>(initialState);

  const handleValueChange = (
    value: string | number | File | DateValue | undefined,
    name: FieldName
  ) => {
    console.log(`${value} | ${name}`);
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-[#F0EAF8]">
      <form className="max-w-[450px] w-full flex flex-col gap-4 my-4">
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
        <div className="flex gap-6">
          <DatetimeInput
            name="date"
            value={formData.date}
            onValueChange={handleValueChange}
          />
          <TimeSelect
            name="time"
            value={formData.time}
            onValueChange={handleValueChange}
          />
        </div>
        <SubmitButton isDisabled />
      </form>
    </div>
  );
}

export default App;
