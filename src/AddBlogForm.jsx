import React, { useReducer } from "react";

const AddBlogForm = ({ addBlog, add }) => {
  const initialState = {
    title: "",
    content: "",
    tags: [],
  };

  const reducer = (state, action) => {
    console.log(state);

    switch (action.type) {
      case "title":
        return { ...state, title: action.value };
      case "content":
        return { ...state, content: action.value };
      case "tag":
        return {
          ...state,
          tags: action.value.split(",").map((e) => e.trim()),
        };
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="mt-5 m-auto">
      <div className="w-1/2 m-auto">
        <div className="text-gray-600">
          <h3>Add a New Blog!</h3>
        </div>

        <div className="flex flex-col gap-2 w-6/12">
          <label>Title</label>
          <input
            value={state.title}
            onChange={(e) => dispatch({ type: "title", value: e.target.value })}
            className="border p-1"
            type="text"
          />
        </div>

        <div className="flex flex-col gap-2 w-6/12">
          <label>Content</label>
          <input
            value={state.content}
            onChange={(e) =>
              dispatch({ type: "content", value: e.target.value })
            }
            type="text"
            className="border p-1"
          />
        </div>

        <div className="flex flex-col gap-2 w-6/12">
          <label>
            Tag{" "}
            <span className="text-red-500">
              if you add one more tag must write with coma(,)
            </span>
          </label>

          <input
            value={state.tags?.join(",")}
            onChange={(e) => dispatch({ type: "tag", value: e.target.value })}
            type="text"
            className="border p-1"
          />
        </div>
        <div className="p-2 rounded-md bg-blue-600 text-white mt-3 text-center w-fit">
          <button onClick={() => {
            addBlog(state)
            add(false)
          }}>Submit</button>
        </div>
      </div>
    </div>
  );
};

export default AddBlogForm;
