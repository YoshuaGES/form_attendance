import { useState } from "react";

function Form() {
  return (
    <>
      <div className="flex-col">
        <div className="grid grid-cols-1w-full max-w-sm m-auto px-6 py-2 bg-white dark:bg-slate-900 rounded-md shadow-lg shadow-slate-500 dark:shadow-gray-800 ">
          <div className="py-4 mb-4 text-center font-bold text-4xl font-sans hover:font-mono">
            Attendance
          </div>
          <form action=""></form>
          <label className="mt-2 mb-2 form-label font-semibold">
            Training Name
          </label>
          <input
            type="text"
            className="border-2 rounded-md"
            placeholder="Insert Training Name"
          />{" "}
          <br />
          <label className="mt-2 mb-2 form-label font-semibold">
            Full Name
          </label>
          <input
            type="text"
            className="border-2 rounded-md"
            placeholder="Insert Full Name"
          />{" "}
          <br />
          {/* <label className="mt-2 mb-2 form-label font-semibold"></label>
        <input
          type="number"
          className="border-2 rounded-md"
          placeholder="Insert Date"
        />{" "}
        <br /> */}
          <button className="mt-2 mb-2 form-label font-semibold  bg-violet-600 hover:bg-violet-700 border-violet-600 hover:border-violet-700 text-white rounded-md w-full">
            Submit
          </button>
        </div>
      </div>
    </>
  );
}

export default Form;
