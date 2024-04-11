import React from "react";
import { TagGroup, Label, TagList, Tag } from "react-aria-components";
import { tags } from "../lib/data";
import { FieldName } from "../lib/types";

type TimeSelectProps = {
  name: FieldName;
  value: string | undefined;
  onValueChange: (value: string, name: FieldName) => void;
};

const TimeSelect = ({ name, value, onValueChange }: TimeSelectProps) => {
  return (
    <TagGroup
      className="basis-full"
      selectionMode="single"
      selectedKeys={[value!]}
      onSelectionChange={(keys) => {
        // console.log(Array.from(keys)[0]);
        onValueChange(Array.from(keys)[0].toString(), name);
      }}
    >
      <Label>Time</Label>
      <TagList items={tags} className="flex sm:flex-col gap-2">
        {(tag) => (
          <Tag
            id={tag.value}
            className="bg-white text-center w-full border border-[#353139] outline-none rounded-lg p-2 cursor-pointer
         data-[selected]:outline-2 data-[selected]:outline-[#761BE4] -outline-offset-2"
          >
            {tag.value}
          </Tag>
        )}
      </TagList>
    </TagGroup>
  );
};

export default TimeSelect;
