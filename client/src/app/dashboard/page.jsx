import { Button } from "@/components/ui/button"
import { AiOutlineLike } from "react-icons/ai";
import { Textarea } from "@/components/ui/textarea"

export default function dashboard(){
    return <>
    <div className="flex gap-4 justify-center">
    <h1>Hello Wolrd</h1>
    <Button variant="destructive"><AiOutlineLike />Button</Button>
    </div>
    <Textarea />
    </>
}