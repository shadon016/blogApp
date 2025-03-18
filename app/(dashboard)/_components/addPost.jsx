import React from "react";

const AddPost = () => {
  return (
    <div className="p-4">
      <h2 className="text-center">create new posts</h2>
      <form className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <label htmlFor="title">title</label>
          <input type="text" name="title" placeholder="title" />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="description">description</label>
          <textarea
            name="description"
            rows="4"
            placeholder="description"
          ></textarea>
        </div>
        <div className="flex gap-2">
          <select name="category" className="w-full">
            <option value="category1">category1</option>
            <option value="category2">category2</option>
          </select>
          <input type="file" name="image" />
        </div>

        <div>
          <button
            type="submit"
            className="bg-green-500 w-full p-2 cursor-pointer"
          >
            post
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddPost;
