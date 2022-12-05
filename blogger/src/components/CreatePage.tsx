import React, { useState } from "react";
import EditBlog from "./EditBlog";

type Props = {
  updateBlogs: React.Dispatch<React.SetStateAction<any>>;
};

const CreatePage = ({ updateBlogs }: Props) => {
  return (
    <div className="pt-[60px]">
      <EditBlog updateBlogs={updateBlogs} />
    </div>
  );
};

export default CreatePage;
