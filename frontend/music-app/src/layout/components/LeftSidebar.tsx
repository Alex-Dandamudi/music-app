import { Link } from "react-router-dom";
import { HomeIcon, MessageCircleIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { Show } from "@clerk/react";


const LeftSidebar = () => {
    return <div className="h-full flex flex-col gap-2">
        {
            /*Navigation menu*/
            <div className="bg-neutral-900 rounded-lg p-4">
                <div className = "space-y-2">
                    <Link to={"/"}
                    className={cn(buttonVariants({ variant: "ghost", className: "w-full justify-start text-white hover:bg-zinc-800" }))}>
                    <HomeIcon className="mr-2 size-5 text-blue-500"/>
                    <span className="hidden md:inline text-blue-500">Home</span>
                    </Link>

                    <Show when="signed-in">
                         <Link to={"/chat"}
                    className={cn(buttonVariants({ variant: "ghost", className: "w-full justify-start text-white hover:bg-zinc-800" }))}>
                    <MessageCircleIcon className="mr-2 size-5 text-blue-500"/>
                    <span className="hidden md:inline text-blue-500">Messages</span>
                    </Link>
                    </Show>
                </div>
            </div>

            /*Library*/
        }
    </div>;
};

export default LeftSidebar;