import React from "react";
import {
  Button,
  DropZone,
  FileTrigger,
  Label,
  Text,
} from "react-aria-components";

const FileInput = () => {
  return (
    <>
      <Label>Photo</Label>
      <DropZone
        className="h-24 bg-white border border-[#CBB6E5] rounded-lg flex
      items-center justify-center"
      >
        <FileTrigger>
          <Button className="text-[#761BE4] underline underline-offset-2">
            Upload a file
          </Button>
        </FileTrigger>
        <Text className="hidden sm:inline sm:ml-2">or drag and drop here</Text>
      </DropZone>
    </>
  );
};

export default FileInput;
