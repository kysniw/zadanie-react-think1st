import React from "react";
import { FieldError, Input, Label, TextField } from "react-aria-components";

type InputProps = {
  type?: string;
  name: string;
  label: string;
};

const TextInput = ({ type = "text", name, label }: InputProps) => {
  return (
    <TextField type={type} name={name} className="flex flex-col">
      <Label className="font-normal text-base">{label}</Label>
      <Input
        className="p-2 m-0 border border-[#CBB6E5] rounded-lg h-12 data-[focused]:outline-2
      data-[focused]:outline-[#761BE4] outline-offset-1 data-[focused]:bg-[#FAF9FA]
       font-medium text-base invalid:bg-[#FEECEC] invalid:outline-2 invalid:outline-[#ED4545] "
      />
      <FieldError>
        {({ validationDetails }) =>
          validationDetails.valueMissing ? `${label} is required` : ""
        }
      </FieldError>
    </TextField>
  );
};

export default TextInput;
