import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const BlogDetails = () => {
  const { id } = useParams();
  const [data, setData] = useState({});
  useEffect(() => {
    axios
      .get(`http://localhost:3000/blogPosts/${id}`)
      .then((data) => setData(data.data));
  }, [id]);
  return (
    <div className="border m-5 p-5 rounded-md">
      <div className="text-red-400 text-center">
        <h3>{data?.title}</h3>
        <p className="pt-4 text-gray-700">"{data.content}"</p>
        <div className="flex gap-2">
          {data.tags?.map((e) => (
            <div className="rounded p-2 bg-gray-200 w-fit text-black">#{e}</div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
