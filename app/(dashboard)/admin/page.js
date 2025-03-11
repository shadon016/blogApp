import React from "react";

const Page = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <div>
        <h1 className="text-center text-lg font-bold capitalize py-4 bg-amber-500">
          login page
        </h1>
        <form className="flex flex-col gap-4 p-4 bg-slate-200">
          <div className=" flex flex-col gap-2">
            <label htmlFor="email">email</label>
            <input type="email" placeholder="enter your email" name="email" />
          </div>
          <div className=" flex flex-col gap-2">
            <label>password</label>
            <input
              type="password"
              name="password"
              placeholder="enter paswword"
            />
          </div>
          <button
            type="submit"
            className="font-semibold bg-amber-500 py-1 capitalize rounded-md cursor-pointer "
          >
            login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Page;
