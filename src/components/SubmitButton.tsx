import React from "react";
import { Button } from "react-aria-components";

const SubmitButton = ({ isDisabled }: { isDisabled: boolean }) => {
  return (
    <Button
      type="submit"
      isDisabled={isDisabled}
      className="w-full my-2 p-2 rounded text-white bg-[#761BE4] disabled:bg-[#CBB6E5] hover:bg-[#6A19CD]
   duration-300"
    >
      Send Application
    </Button>
  );
};

export default SubmitButton;
