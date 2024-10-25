import React from "react";
import { loading } from "../assets";
import { Oval } from "react-loader-spinner";

const Generating = ({ className }) => {
  return (
    <div>
      <div
        className={`flex items-center h-[3.5rem] px-6 bg-n-8/80 rounded-[1.7rem] ${
          className || ""
        } text-base`}
      >
        <div className="mr-2">
          <Oval
            height={24}
            width={24}
            color="#fff"
            ariaLabel="loading"
            visible={true}
          />
        </div>
        AI is generating
      </div>
    </div>
  );
};

export default Generating;
