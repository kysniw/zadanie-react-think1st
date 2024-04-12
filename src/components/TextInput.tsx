import React from "react";
import { FieldError, Input, Label, TextField } from "react-aria-components";
import { FieldName } from "../lib/types";
import { FaCircleExclamation } from "react-icons/fa6";

type InputProps = {
  type?: string;
  name: FieldName;
  label: string;
  value: string;
  onValueChange: (value: string, name: FieldName) => void;
};

const TextInput = ({
  type = "text",
  name,
  label,
  value,
  onValueChange,
}: InputProps) => {
  return (
    <TextField
      type={type}
      name={name}
      className="flex flex-col"
      value={value}
      onChange={(value) => onValueChange(value, name)}
      isRequired
    >
      <Label className="font-normal text-base">{label}</Label>
      <Input
        className="p-2 m-0 border outline-none border-[#CBB6E5] rounded-lg h-12 data-[focused]:outline-2
      data-[focused]:outline-[#761BE4] -outline-offset-1 data-[focused]:bg-[#FAF9FA]
       font-medium text-base data-[invalid]:bg-[#FEECEC] data-[invalid]:outline-2 data-[invalid]:outline-[#ED4545]"
      />
      <FieldError>
        {({ validationDetails }) => (
          <div className="flex items-center my-1">
            <FaCircleExclamation className="block text-red-600 mr-2" />
            <p className=" font-normal text-sm">
              {validationDetails.valueMissing
                ? `${label} is required`
                : validationDetails.typeMismatch
                ? `Write ${label} correct`
                : ""}
            </p>
          </div>
        )}
      </FieldError>
    </TextField>
  );
};

export default TextInput;
