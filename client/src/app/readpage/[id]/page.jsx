import { Button } from "@/components/ui/button";
import { AiOutlineLike } from "react-icons/ai";

async function getBlog(id) {
  const res = await fetch(`http://localhost:5000/blogs/${id}`, { cache: 'no-store' });
  if (!res.ok) {
    throw new Error("Failed to fetch blogs");
  }
  console.log("Inside the function ready to return the json")
  return res.json();
}

export default async function readpage({ params }) {
  const id = params.id;
  console.log(id);
  const blog = await getBlog(id);
  console.log("The blog is");
  console.log(blog);
  return (
    <>
      <div className="bg-slate-950 min-h-screen text-white flex flex-col items-center py-8">
        {/* Spacer div for top padding */}
        <div className="mb-4 text-slate-950">.</div>

        {/* Header section */}
        <div className="flex justify-between items-center w-2/3 mb-6 border-b border-gray-700 pb-2">
          <div>
            <h1 className="text-4xl font-bold mb-2">
              {blog.title}
            </h1>
            <h2 className="text-lg text-gray-400">
              {blog.subtitle}
            </h2>
          </div>
          <Button variant="destructive" className="flex items-center gap-2">
            <AiOutlineLike />
            Like
          </Button>
        </div>

        {/* Content section */}
        <div className="w-2/3 bg-slate-800 p-6 rounded-lg shadow-lg">
          {blog.content}
        </div>
      </div>
    </>
  );
}
