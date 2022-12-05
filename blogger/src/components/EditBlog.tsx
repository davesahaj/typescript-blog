import { blog } from "../types";
import { v4 as uuidv4 } from "uuid";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

type Props = {
  updateBlogs: React.Dispatch<React.SetStateAction<any>>;
  currentBlog?: blog;
  setModelOpen?: React.Dispatch<React.SetStateAction<any>>;
};

const EditBlog = ({ updateBlogs, currentBlog, setModelOpen }: Props) => {
  const [title, setTitle] = useState<string>(currentBlog?.title || "");
  const [content, setContent] = useState<string>(currentBlog?.content || "");

  let navigate = useNavigate();

  function resetBlog() {
    setTitle("");
    setContent("");
  }

  function saveBlog(status: string) {
    if (title == "" || content == "" || status == "") return;

    if (currentBlog) {
      currentBlog.title = title;
      currentBlog.content = content;
      currentBlog.status = status;
    } else {
      const tempBlog: blog = { id: uuidv4(), title, content, status };
      updateBlogs((blogs: blog[]) => [...blogs, tempBlog]);
    }
    setModelOpen && setModelOpen(false);
    if (location.pathname === "/create") navigate("/manage");
  }

  return (
    <div className="bg-[rgba(69,69,69,0.5)] w-full h-full fixed flex items-center justify-center">
      <div className="bg-[#dcdcdc] h-[600px] w-[800px] rounded-xl shadow-2xl z-10 py-8 px-12">
        <h4 className="text-2xl">Title:</h4>
        <input
          type="text"
          className="w-full h-[40px] rounded-md px-6 mt-4"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter your Blog Title..."
        />

        <h4 className="text-2xl mt-10">Content:</h4>
        <textarea
          className="w-full h-auto rounded-md px-6 py-1 mt-4"
          rows={10}
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Enter your Blog Content..."
        />

        <div className="mt-20 flex justify-center gap-20">
          <button
            className="w-[200px] border border-[#d74b4b] bg-[#d74b4b] text-white rounded-md h-[40px]"
            onClick={() => {
              resetBlog();
              setModelOpen && setModelOpen(false);
            }}
          >
            Cancel
          </button>
          <button
            className="w-[200px] border border-[#777] bg-[#777] text-white rounded-md h-[40px]"
            onClick={() => saveBlog("draft")}
          >
            Save as Draft
          </button>
          <button
            className="w-[200px] border border-[#209131] bg-[#209131] text-white rounded-md h-[40px]"
            onClick={() => saveBlog("published")}
          >
            Publish
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditBlog;
