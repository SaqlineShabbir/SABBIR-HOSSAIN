"use client";

import { RotatingLines } from "react-loader-spinner";

const loading = () => {
  return (
    <div className="flex justify-center items-center my-auto mx-auto min-h-[100vh]">
      <RotatingLines
        visible={true}
        height="96"
        width="96"
        color="grey"
        strokeWidth="5"
        animationDuration="0.75"
        ariaLabel="rotating-lines-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
};

export default loading;
