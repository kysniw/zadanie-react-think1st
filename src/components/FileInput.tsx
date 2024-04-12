import React from "react";
import {
  Button,
  DropZone,
  FileTrigger,
  Label,
  Text,
} from "react-aria-components";
import { FaCircleXmark } from "react-icons/fa6";
import { FieldName } from "../lib/types";

type FileInputProps = {
  name: FieldName;
  value: File | null;
  onValueChange: (value: File | null, name: FieldName) => void;
};

const FileInput = ({ name, value, onValueChange }: FileInputProps) => {
  return (
    <div>
      <Label>Photo</Label>
      <DropZone
        className="h-24 bg-white border border-[#CBB6E5] rounded-lg flex
      items-center justify-center"
      >
        {value?.name || (
          <>
            <FileTrigger
              onSelect={(e) => {
                if (e) onValueChange(e[0], name);
              }}
            >
              <Button className="text-[#761BE4] underline underline-offset-2">
                Upload a file
              </Button>
            </FileTrigger>
            <Text className="hidden sm:inline sm:ml-2">
              or drag and drop here
            </Text>
          </>
        )}
        {value && (
          <Button
            onPress={() => onValueChange(null, name)}
            className="hover:text-red-600 duration-200 mx-2 outline-none"
          >
            <FaCircleXmark />
          </Button>
        )}
      </DropZone>
    </div>
  );
};

export default FileInput;
