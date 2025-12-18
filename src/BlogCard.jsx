import React from "react";
import { useNavigate } from "react-router-dom";

const BlogCard = ({ data }) => {
    const navigate = useNavigate()
  return (
    <div class="max-w-sm rounded-md overflow-hidden shadow-lg m-auto mt-4">
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2 text-gray-700">{data.title}</div>
        <p class="text-gray-700 text-base">{data.content}</p>
        <div className="p-2 bg-green-600 rounded-md text-white">
          <button onClick={() => navigate(`/blog/${data.id}`)}>Read More..</button>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
