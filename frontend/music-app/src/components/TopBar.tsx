import { LayoutDashboardIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { useAuth, useClerk } from "@clerk/react";
import SignInOAuthButtons from "./SignInOAuthButtons";
import { Button } from "./ui/button";

const TopBar = () => {
  const isAdmin = false;
  const { isSignedIn } = useAuth();
  const { signOut } = useClerk();

  return (
    <div className="flex items-center justify-between p-4 sticky top-0 bg-zinc-900/75 backdrop-blur-md z-10">
      <div className="flex gap-2 items-center text-2xl font-semibold">
        Music
      </div>
      <div className="flex items-center gap-4">
        {isAdmin && (
          <Link to={"/admin"}>
            <LayoutDashboardIcon className="size-4 mr-2"/>
            Admin Dashboard
          </Link>
        )}

        {isSignedIn ? (
          <Button
            onClick={() => signOut()}
            variant={"secondary"}
            className="text-white h-11"
          >
            Sign Out
          </Button>
        ) : (
          <SignInOAuthButtons/>
        )}
      </div>
    </div>
  );
};

export default TopBar;