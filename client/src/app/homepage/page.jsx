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

export default function homepage() {
  return (
    <>
      <div className="bg-slate-950 min-h-screen text-white py-8 px-4">
        {/* Page Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold">Home Page</h1>
          <p className="text-gray-400 mt-2">
            Explore our top blogs and find inspiration
          </p>
        </div>

        {/* Navigation Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <Button variant="destructive" className="flex items-center gap-2">
            <RiSignpostLine /> See Your Posts
          </Button>
          <Button variant="destructive" className="flex items-center gap-2">
            <TfiWrite /> Write
          </Button>
          <Button variant="destructive" className="flex items-center gap-2">
            <FaSearch /> Search
          </Button>
        </div>

        {/* Blog Posts Container */}
        <div className="space-y-8">
          {/* Blog Post 1 */}
          <div className="flex justify-center">
            <Card className="w-full md:w-2/3 bg-slate-800 shadow-lg rounded-lg overflow-hidden">
              <CardHeader className="p-4 border-b border-gray-700">
                <CardTitle className="text-2xl text-white">
                  Top 5 Tips for Writing a Successful Blog
                </CardTitle>
                <CardDescription className="text-gray-400">
                  Enhance your writing and connect with your readers
                </CardDescription>
              </CardHeader>
              <CardContent className="p-4 text-gray-300">
                <p className="mb-4">
                  Writing a successful blog requires understanding your
                  audience, creating engaging content, and being consistent.
                  Here are five tips to help you:
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
                    <strong>Engage Your Readers:</strong> End with a question or
                    a call to action to boost interaction.
                  </li>
                </ul>
              </CardContent>
              <CardFooter className="flex justify-between items-center p-4 border-t border-gray-700">
                <p className="text-gray-500">
                  Published by Adarsh Mohapatra | October 2024
                </p>
                <Button
                  variant="destructive"
                  className="flex items-center gap-2"
                >
                  <FaBookReader /> Read More
                </Button>
              </CardFooter>
            </Card>
          </div>

          {/* Blog Post 2 */}
          <div className="flex justify-center">
            <Card className="w-full md:w-2/3 bg-slate-800 shadow-lg rounded-lg overflow-hidden">
              <CardHeader className="p-4 border-b border-gray-700">
                <CardTitle className="text-2xl text-white">
                  How to Stay Productive as a Developer
                </CardTitle>
                <CardDescription className="text-gray-400">
                  Practical strategies for maintaining focus and efficiency
                </CardDescription>
              </CardHeader>
              <CardContent className="p-4 text-gray-300">
                <p className="mb-4">
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
                    <strong>Limit Distractions:</strong> Minimize interruptions
                    by setting dedicated work hours and silencing notifications.
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
                <Button
                  variant="destructive"
                  className="flex items-center gap-2"
                >
                  <FaBookReader /> Read More
                </Button>
              </CardFooter>
            </Card>
          </div>

          {/* Blog Post 3 */}
          <div className="flex justify-center">
            <Card className="w-full md:w-2/3 bg-slate-800 shadow-lg rounded-lg overflow-hidden">
              <CardHeader className="p-4 border-b border-gray-700">
                <CardTitle className="text-2xl text-white">
                  Exploring the World of AI-Powered Blogging
                </CardTitle>
                <CardDescription className="text-gray-400">
                  Leveraging artificial intelligence to enhance your writing
                </CardDescription>
              </CardHeader>
              <CardContent className="p-4 text-gray-300">
                <p className="mb-4">
                  The rise of AI in content creation has revolutionized how
                  blogs are written, edited, and optimized. Here’s how you can
                  use AI tools to boost your blogging journey:
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li>
                    <strong>AI Writing Assistants:</strong> Use tools like
                    ChatGPT and Jasper to brainstorm ideas and draft content
                    quickly.
                  </li>
                  <li>
                    <strong>SEO Optimization:</strong> AI-powered SEO tools can
                    help identify keywords and optimize your blog for search
                    engines.
                  </li>
                  <li>
                    <strong>Content Personalization:</strong> Enhance reader
                    engagement by using AI to tailor content to specific
                    audiences.
                  </li>
                  <li>
                    <strong>Grammar and Style:</strong> Applications like
                    Grammarly can improve the clarity and professionalism of
                    your writing.
                  </li>
                </ul>
                <p>
                  By integrating these technologies, bloggers can streamline
                  their processes and focus on creating meaningful connections
                  with readers.
                </p>
              </CardContent>
              <CardFooter className="flex justify-between items-center p-4 border-t border-gray-700">
                <p className="text-gray-500">
                  Written by Aritra Bag | November 2024
                </p>
                <Button
                  variant="destructive"
                  className="flex items-center gap-2"
                >
                  <FaBookReader /> Read More
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}
