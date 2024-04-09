import React from "react";
import {
  Label,
  Slider,
  SliderOutput,
  SliderThumb,
  SliderTrack,
} from "react-aria-components";

const RangeInput = () => {
  return (
    <>
      <Label>Age</Label>
      <Slider defaultValue={8} minValue={8} maxValue={100} className="mb-10">
        <div className="flex justify-between text-xs my-2">
          <Label>8</Label>
          <Label>100</Label>
        </div>
        <SliderTrack
          className="relative mx-1 before:block before:absolute before:bg-[#CBB6E5] before:h-1
          before:w-full before:top-1/2 before:-translate-y-1/2"
        >
          <SliderThumb className="relative h-4 w-4 bg-[#761BE4] rounded-full">
            <div
              className="absolute rounded-sm top-4 left-1/2 -translate-x-1/2 translate-y-1 text-xs bg-white
            border border-[#CBB6E5] before:absolute before:border-[#CBB6E5]
            before:border-4 before:border-transparent before:border-b-[#CBB6E5]
            before:-top-2 before:left-1/2 before:-translate-x-1/2"
            >
              <SliderOutput className="px-2" />
            </div>
          </SliderThumb>
        </SliderTrack>
      </Slider>
    </>
  );
};

export default RangeInput;
