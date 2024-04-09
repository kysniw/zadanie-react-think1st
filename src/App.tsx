import React from "react";
import TextInput from "./components/TextInput";
import RangeInput from "./components/RangeInput";
import FileInput from "./components/FileInput";
import DatetimeInput from "./components/DatetimeInput";

function App() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-[#F0EAF8]">
      <form className="max-w-[450px] w-full">
        <TextInput name="firstName" label="First Name" />
        <TextInput name="lastName" label="Last Name" />
        <TextInput name="email" label="Email" />
        <RangeInput />
        <FileInput />
        <DatetimeInput />
      </form>
    </div>
  );
}

export default App;
