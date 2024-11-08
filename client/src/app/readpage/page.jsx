import { Button } from "@/components/ui/button";
import { AiOutlineLike } from "react-icons/ai";

export default function readpage() {
  return (
    <>
      <div className="bg-slate-950 min-h-screen text-white flex flex-col items-center py-8">
        {/* Spacer div for top padding */}
        <div className="mb-4 text-slate-950">.</div>

        {/* Header section */}
        <div className="flex justify-between items-center w-2/3 mb-6 border-b border-gray-700 pb-2">
          <div>
            <h1 className="text-4xl font-bold mb-2">
              Top 5 Tips for Writing a Successful Blog
            </h1>
            <h2 className="text-lg text-gray-400">
              Enhance your writing and connect with your readers
            </h2>
          </div>
          <Button variant="destructive" className="flex items-center gap-2">
            <AiOutlineLike />
            Like
          </Button>
        </div>

        {/* Content section */}
        <div className="w-2/3 bg-slate-800 p-6 rounded-lg shadow-lg">
          <p className="leading-relaxed text-gray-300 mb-4">
            Writing a successful blog requires understanding your audience,
            creating engaging content, and being consistent. Here are five tips
            to help you:
          </p>
          <ul className="list-decimal list-inside mb-4 space-y-2">
            <li>
              <span className="font-semibold">Know Your Audience:</span> Tailor
              your topics to what your readers are interested in. Knowing your
              audience helps you choose relevant subjects that capture
              attention.
            </li>
            <li>
              <span className="font-semibold">Craft Catchy Headlines:</span> A
              great title grabs attention and encourages clicks. Spend time
              perfecting your headline as it's the first thing readers see.
            </li>
            <li>
              <span className="font-semibold">Use Visuals:</span> Include
              images, charts, or videos to make your posts more engaging.
              Visuals can break up text and keep readers interested.
            </li>
            <li>
              <span className="font-semibold">
                Write in an Authentic Voice:
              </span>{" "}
              Be yourself; authenticity builds trust. Your readers appreciate
              personal insights and a genuine tone.
            </li>
            <li>
              <span className="font-semibold">Engage Your Readers:</span> End
              with a question or a call to action to boost interaction. This not
              only fosters community but also enhances your blog’s reach through
              discussions and shares.
            </li>
          </ul>
          <p className="text-gray-400">
            By following these tips, you can create blog posts that resonate
            with readers and build a loyal following.
          </p>
        </div>
      </div>
    </>
  );
}
