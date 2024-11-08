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

async function getBlogs() {
  const res = await fetch("http://localhost:5000/blogs", { cache: 'no-store' });
  if (!res.ok) {
    throw new Error("Failed to fetch blogs");
  }
  console.log("Inside the function ready to return the json")
  return res.json();
}

export default async function homepage() {
  const blogs = await getBlogs();
  console.log("The blogs are ");
  console.log(blogs);
  const cards = []
  blogs.forEach(myFunction);

  function myFunction(item) {
    const card = 
      <div className="flex justify-center mb-8">
            <Card className="w-full md:w-2/3 bg-slate-800 shadow-lg rounded-lg overflow-hidden">
              <CardHeader className="p-4 border-b border-gray-700">
                <CardTitle className="text-2xl text-white">
                  {item.title}
                </CardTitle>
                <CardDescription className="text-gray-400">
                  {item.subtitle}
                </CardDescription>
              </CardHeader>
              <CardContent className="p-4 text-gray-300">
                {item.content}
              </CardContent>
              <CardFooter className="flex justify-between items-center p-4 border-t border-gray-700">
                <p className="text-gray-500">
                  Published by {item.author} | October 2024
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
    cards.push(card);
  }
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
        {cards.map((card) => card)}
      </div>
    </>
  );
}
