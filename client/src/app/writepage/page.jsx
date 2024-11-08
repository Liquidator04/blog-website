"use client";
import { Button } from "@/components/ui/button";
import { RiSignpostLine } from "react-icons/ri";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { MdDeleteForever } from "react-icons/md";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
} from "@/components/ui/form"
import { useSession, signOut, SessionProvider } from "next-auth/react";
import { useRouter } from "next/navigation";


export default function WritePage() {
  // const { data: session, status } = useSession();
  const form = useForm({ defaultValues: {} });
  const router = useRouter();

  async function onSubmit(values) {
    console.log("submited values: ");
    values.author = "Aritra Bag";
    console.log(values);
    // console.log(session)
    try{
      const response = await fetch("http://localhost:5000/blogs",{
        method: "POST",
        body: JSON.stringify(values),
        headers: {
          'Content-Type': 'application/json'
        }
      });
    } catch(error){
      console.log("Something went horribly wrong");
    }
  }

  return (
    <SessionProvider>
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="bg-slate-950 min-h-screen text-white flex flex-col items-center py-8">
          {/* Header Section */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold">Create a New Blog</h1>
            <p className="text-gray-400 mt-2">Share your thoughts and insights with the world</p>
          </div>

          {/* Form Section */}
          <div className="flex flex-col items-center w-full max-w-lg space-y-6 bg-slate-800 p-6 rounded-lg shadow-lg">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <>
                <FormControl>
                  <div className="w-full">
                    <Label htmlFor="title" className="text-gray-300 text-lg">Blog Title:</Label>
                    <Input
                      type="text"
                      id="title"
                      placeholder="Enter a compelling title"
                      className="w-full mt-2 p-3 rounded-lg text-white"
                      {...field}
                    />
                  </div>
                </FormControl>
                </>
              )}
            />

            <FormField
              control={form.control}
              name="subtitle"
              render={({ field }) => (
                <FormControl>
                  <div className="w-full">
                    <Label htmlFor="subtitle" className="text-gray-300 text-lg">Subtitle:</Label>
                    <Input
                      type="text"
                      id="subtitle"
                      placeholder="Subtitle (optional)"
                      className="w-full mt-2 p-3 rounded-lg text-white"
                      {...field}
                    />
                  </div>
                </FormControl>
              )}
            />

            <FormField
              control={form.control}
              name="content"
              render={({ field }) => (
                <FormControl>
                  <div className="w-full">
                    <Label htmlFor="content" className="text-gray-300 text-lg">Content:</Label>
                    <Textarea
                      id="content"
                      placeholder="Write your blog content here..."
                      className="w-full mt-2 h-64 p-3 rounded-lg text-white resize-none"
                      {...field}
                    />
                  </div>
                </FormControl>
              )}
            />
          </div>

          {/* Action Buttons */}
          <div className="flex justify-between w-full max-w-lg mt-5">
            <Button type="submit" variant="destructive" className="flex items-center gap-2" onClick={router.push('/homepage')}>
              <RiSignpostLine /> Post
            </Button>
            <Button variant="destructive" className="flex items-center gap-2">
              <MdDeleteForever /> Delete
            </Button>
          </div>
        </div>
      </form>
    </Form>
    </SessionProvider>
  );
}
