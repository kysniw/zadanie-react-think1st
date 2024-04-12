import React from "react";
import { TagGroup, Label, TagList, Tag } from "react-aria-components";
import { tags } from "../lib/data";
import { FieldName } from "../lib/types";

type TimeSelectProps = {
  name: FieldName;
  value: string | null;
  onValueChange: (value: string | null, name: FieldName) => void;
  isObservance: boolean;
};

const TimeSelect = ({
  name,
  value,
  onValueChange,
  isObservance,
}: TimeSelectProps) => {
  return (
    <TagGroup
      className="basis-auto"
      selectionMode="single"
      selectedKeys={[value!]}
      onSelectionChange={(keys) => {
        // console.log(Array.from(keys)[0]);
        onValueChange(Array.from(keys)[0]?.toString() || null, name);
      }}
    >
      <Label>Time</Label>
      <TagList
        items={tags.filter((tag) => tag.isObservance === isObservance)}
        className="flex flex-wrap sm:flex-col sm:flex-nowrap gap-2"
      >
        {(tag) => (
          <Tag
            id={tag.value}
            className="bg-white text-center border border-[#CBB6E5] outline-none rounded-lg py-3 px-4 cursor-pointer
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
