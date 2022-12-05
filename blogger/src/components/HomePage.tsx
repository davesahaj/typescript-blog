import { blog } from "../types";

type Props = {
  blogs: blog[];
};

const HomePage = (props: Props) => {
  return (
    <div className="pt-[100px] flex justify-center flex-col items-center gap-10">
      <h1 className="text-4xl">My Blogs:</h1>
      {props.blogs
        .filter((blog) => blog.status !== "draft")
        .map((blog, index) => (
          <div
            key={index}
            className="h-auto max-h-[300px] w-[600px] bg-slate-200 rounded-2xl"
          >
            <h2 className="text-2xl p-3">{blog.title}</h2>
            <p className="p-3">{blog.content}</p>
          </div>
        ))}
    </div>
  );
};

export default HomePage;
