import { useEffect, useState } from "react";
import "./App.css";
import BlogCard from "./BlogCard";
import axios from "axios";
import AddBlogForm from "./AddblogForm";

function App() {
  const [blogs, setBlogs] = useState([]);
  const [add, setAdd] = useState(false);
  console.log(blogs);

  const addBlog = (data) => {
    axios
      .post("http://localhost:3000/blogPosts", data)
      .then((result) => setBlogs((prev) => [...prev, result.data]));
  };

  useEffect(() => {
    axios
      .get("http://localhost:3000/blogPosts")
      .then((data) => setBlogs(data.data));
  }, []);
  return (
    <div>
      {add ? (
        <AddBlogForm addBlog={addBlog} add={setAdd}/>
      ) : (
        <div className="mt-5 text-center flex-col justify-center content-center gap-4">
          <div>
            <h3 className="text-gray-400 rounded-md">Blog posts</h3>
          </div>
          <div className="bg-blue-700 rounded-md p-2 text-white w-fit m-auto">
            <button onClick={() => setAdd(true)}>Add new Blog</button>
          </div>
          {blogs.map((e) => (
            <BlogCard data={e} />
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
