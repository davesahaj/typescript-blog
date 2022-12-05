import { Routes, Route } from "react-router-dom";
import CreatePage from "./components/CreatePage";
import HomePage from "./components/HomePage";
import ManagePage from "./components/ManagePage";
import Header from "./components/Header";
import { useState } from "react";
import {blog} from './types'

function App() {
  const [blogs, setBlogs] = useState<blog[]>([]);

  return (
    <div className="h-screen">
      <Header />
      <Routes>
        <Route index element={<HomePage blogs={blogs} />} />
        <Route path="/create" element={<CreatePage updateBlogs={setBlogs} />} />
        <Route path="/manage" element={<ManagePage blogs={blogs} updateBlogs={setBlogs}/>} />
      </Routes>
    </div>
  );
}

export default App;
