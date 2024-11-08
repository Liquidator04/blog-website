import { Button } from "@/components/ui/button";
import { AiOutlineGoogle } from "react-icons/ai";
import { signIn } from "@/auth";

export default function SignInPage() {
  return (
    <div className="bg-slate-950 h-screen flex flex-col items-center justify-center text-white">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-2">Welcome to Our Blog Website</h1>
        <p className="text-lg text-slate-300">
          Join our community to explore, share, and grow together.
        </p>
      </div>

      <form
        action={async () => {
          "use server";
          await signIn("google", { redirectTo: "/homepage" });
        }}
      >
        <Button
          variant="destructive"
          className="flex items-center gap-2 px-6 py-3"
          type="submit"
        >
          <AiOutlineGoogle className="text-xl" />
          Sign in with Google
        </Button>
      </form>
    </div>
  );
}