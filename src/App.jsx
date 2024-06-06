import { useState } from "react";

function Form() {
  return (
    <div>
        <div className="flex justify-center items-center h-screen">
          <div className="flex items-center justify-center flex-col bg-orange-200 dark:bg-slate-900 rounded-md shadow-lg shadow-slate-500 dark:shadow-gray-800">
            <h1 className="text-center font-bold text-4xl font-sans mt-8 mb-8 mx-24">
              ATTENDANCE
            </h1>

            <div className="flex flex-col form-label font-semibold">
              <label htmlFor="" className="mb-2 text-xl">
                Training Name
              </label>
              <input
                type="text"
                className="border-2 rounded-md h-10"
                placeholder=" Insert Training Name"
              />
            </div>

            <div className="flex flex-col form-label font-semibold">
              <label htmlFor="" className="mt-2 mb-2 text-xl">
                Full Name
              </label>
              <input
                type="text"
                className="border-2 rounded-md h-10"
                placeholder=" Insert Full Name"
              />
            </div>

            <button
              type="submit"
              className="form-label font-semiboldbg-cyan-500 shadow-lg bg-blue-600 shadow-cyan-400/50 text-white rounded-md w-28 h-10 mt-8 mb-10"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
  );
}

export default Form;
