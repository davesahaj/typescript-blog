import React, { useState } from "react";
import { blog } from "../types";
import EditBlog from "./EditBlog";

type Props = {
  blogs: blog[];
  updateBlogs: React.Dispatch<React.SetStateAction<blog[]>>;
};

const ManagePage = ({ blogs, updateBlogs }: Props) => {
  const [modelOpen, setModelOpen] = useState<boolean>(false);
  const [currentBlog, setCurrentBlog] = useState<blog | undefined>(undefined);

  function deleteBlog(selectedBlog: blog) {
    updateBlogs((blogs) => blogs.filter((blog) => blog !== selectedBlog));
  }

  return (
    <>
      {modelOpen ? (
        <EditBlog
          updateBlogs={updateBlogs}
          setModelOpen={setModelOpen}
          currentBlog={currentBlog}
        />
      ) : null}
      <div className="pt-[100px] flex flex-col gap-6 px-20">
        <h1 className="text-4xl">Drafts:</h1>
        <div className="flex flex-wrap gap-10">
          {blogs
            .filter((blog) => blog.status === "draft")
            .map((blog, index) => (
              <div key={blog.id}>
                <div className="flex gap-4 h-[100px] w-[600px] bg-slate-200 rounded-2xl items-center px-8">
                  <div className="text-ellipsis text-2xl w-[300px]">
                    {blog.title}
                  </div>
                  <button
                    className="bg-[#555] hover:bg-[#777] text-white py-4 px-8 rounded-md"
                    onClick={() => {
                      setCurrentBlog(blog);
                      setModelOpen(true);
                    }}
                  >
                    Edit
                  </button>
                  <button
                    className="bg-[#555] hover:bg-[#777] text-white py-4 px-8 rounded-md"
                    onClick={() => deleteBlog(blog)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
        </div>
        <h1 className="text-4xl">Published:</h1>
        <div className="flex flex-wrap gap-10">
          {" "}
          {blogs
            .filter((blog) => blog.status !== "draft")
            .map((blog, index) => (
              <div key={blog.id}>
                <div className="flex gap-4 h-[100px] w-[600px] bg-slate-200 rounded-2xl items-center px-8">
                  <div className="text-ellipsis text-2xl w-[300px]">
                    {blog.title}
                  </div>
                  <button
                    className="bg-[#555] hover:bg-[#777] text-white py-4 px-8 rounded-md"
                    onClick={() => {
                      setCurrentBlog(blog);
                      setModelOpen(true);
                    }}
                  >
                    Edit
                  </button>
                  <button
                    className="bg-[#555] hover:bg-[#777] text-white py-4 px-8 rounded-md"
                    onClick={() => deleteBlog(blog)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default ManagePage;
