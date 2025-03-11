import React from "react";

const Page = () => {
  return (
    <div>
      <form>
        <div>
          <label htmlFor="email">email</label>
          <input type="email" placeholder="enter your email" name="email" />
        </div>
        <div>
          <label>password</label>
          <input type="password" name="password" placeholder="enter paswword" />
        </div>
        <button type="submit">login</button>
      </form>
    </div>
  );
};

export default Page;
