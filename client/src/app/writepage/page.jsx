import { Button } from "@/components/ui/button";
import { RiSignpostLine } from "react-icons/ri";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { MdDeleteForever } from "react-icons/md";

export default function writepage() {
  return (
    <>
      <div className="bg-slate-950 min-h-screen text-white flex flex-col items-center py-8">
        {/* Header Section */}
        <div className="text-center mb-8 mt-8">
          <h1 className="text-4xl font-bold">Create a New Blog</h1>
          <p className="text-gray-400 mt-2">
            Share your thoughts and insights with the world
          </p>
        </div>

        {/* Form Section */}
        <div className="flex flex-col items-center w-full max-w-lg space-y-6 bg-slate-800 p-6 rounded-lg shadow-lg">
          {/* Title Input */}
          <div className="w-full">
            <Label htmlFor="title" className="text-gray-300 text-lg">
              Blog Title:
            </Label>
            <Input
              type="text"
              id="title"
              placeholder="Enter a compelling title"
              className="w-full mt-2 p-3 rounded-lg text-white"
            />
          </div>

          {/* Subtitle Input */}
          <div className="w-full">
            <Label htmlFor="subtitle" className="text-gray-300 text-lg">
              Subtitle:
            </Label>
            <Input
              type="text"
              id="subtitle"
              placeholder="Subtitle (optional)"
              className="w-full mt-2 p-3 rounded-lg text-white"
            />
          </div>

          {/* Content Textarea */}
          <div className="w-full">
            <Label htmlFor="content" className="text-gray-300 text-lg">
              Content:
            </Label>
            <Textarea
              id="content"
              placeholder="Write your blog content here..."
              className="w-full mt-2 h-64 p-3 rounded-lg text-white resize-none"
            />
          </div>

          {/* Action Buttons */}
          <div className="flex justify-between w-full mt-5">
            <Button variant="destructive" className="flex items-center gap-2">
              <RiSignpostLine /> Post
            </Button>
            <Button variant="destructive" className="flex items-center gap-2">
              <MdDeleteForever /> Delete
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
