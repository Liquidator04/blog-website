import { Button } from "@/components/ui/button";
import { RiSignpostLine } from "react-icons/ri";
import { TfiWrite } from "react-icons/tfi";
import { FaSearch } from "react-icons/fa";
import { FaBookReader } from "react-icons/fa";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function yourposts() {
  return (
    <>
      <div className="bg-slate-950 min-h-screen text-white py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold">Your Posts</h1>
          <p className="text-gray-400 mt-2">
            Manage and update your published blogs
          </p>
        </div>

        {/* Posts Container */}
        <div className="flex flex-col items-center space-y-6">
          {/* First Post Card */}
          <Card className="w-11/12 md:w-2/3 bg-slate-800 text-gray-300 shadow-lg rounded-lg overflow-hidden">
            <CardHeader className="p-4 border-b border-gray-700">
              <CardTitle className="text-2xl text-white">
                Top 5 Tips for Writing a Successful Blog
              </CardTitle>
              <CardDescription className="text-gray-400">
                Enhance your writing and connect with your readers
              </CardDescription>
            </CardHeader>
            <CardContent className="p-4">
              <p className="mb-3">
                Writing a successful blog requires understanding your audience,
                creating engaging content, and being consistent. Here are five
                tips to help you:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  <strong>Know Your Audience:</strong> Tailor your topics to
                  what your readers are interested in.
                </li>
                <li>
                  <strong>Craft Catchy Headlines:</strong> A great title grabs
                  attention and encourages clicks.
                </li>
                <li>
                  <strong>Use Visuals:</strong> Include images, charts, or
                  videos to make your posts more engaging.
                </li>
                <li>
                  <strong>Write in an Authentic Voice:</strong> Be yourself;
                  authenticity builds trust.
                </li>
                <li>
                  <strong>Engage Your Readers:</strong> End with a question or a
                  call to action to boost interaction.
                </li>
              </ul>
            </CardContent>
            <CardFooter className="flex justify-between items-center p-4 border-t border-gray-700">
              <p className="text-gray-500">
                Published by Adarsh Mohapatra | October 2024
              </p>
              <Button variant="destructive" className="flex items-center gap-2">
                <TfiWrite />
                Update
              </Button>
            </CardFooter>
          </Card>

          {/* Second Post Card */}
          <Card className="w-11/12 md:w-2/3 bg-slate-800 text-gray-300 shadow-lg rounded-lg overflow-hidden">
            <CardHeader className="p-4 border-b border-gray-700">
              <CardTitle className="text-2xl text-white">
                How to Stay Productive as a Developer
              </CardTitle>
              <CardDescription className="text-gray-400">
                Practical strategies for maintaining focus and efficiency
              </CardDescription>
            </CardHeader>
            <CardContent className="p-4">
              <p className="mb-3">
                Developers often face challenges that can impact productivity,
                from long coding sessions to complex problem-solving. Here are
                some tips to keep your productivity high:
              </p>
              <ol className="list-decimal list-inside space-y-2">
                <li>
                  <strong>Plan Your Tasks:</strong> Break down projects into
                  manageable chunks and use tools like Trello or Asana.
                </li>
                <li>
                  <strong>Take Regular Breaks:</strong> Implement the Pomodoro
                  Technique for focused work sessions.
                </li>
                <li>
                  <strong>Stay Updated:</strong> Keep learning new skills and
                  tools to enhance your workflow.
                </li>
                <li>
                  <strong>Limit Distractions:</strong> Minimize interruptions by
                  setting dedicated work hours and silencing notifications.
                </li>
                <li>
                  <strong>Practice Self-Care:</strong> Ensure you get enough
                  rest, exercise, and hydration to maintain mental clarity.
                </li>
              </ol>
            </CardContent>
            <CardFooter className="flex justify-between items-center p-4 border-t border-gray-700">
              <p className="text-gray-500">
                Published by Adarsh Mohapatra | November 2024
              </p>
              <Button variant="destructive" className="flex items-center gap-2">
                <TfiWrite />
                Update
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </>
  );
}
