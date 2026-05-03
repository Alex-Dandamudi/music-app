import { useClerk } from "@clerk/react";
import { Button } from "./ui/button";

const SignInOAuthButtons = () => {
    const { client } = useClerk();

    const signInWithGoogle = () => {
        client.signIn.authenticateWithRedirect({
            strategy: "oauth_google",
            redirectUrl: "/sso-callback",
            redirectUrlComplete: "/auth-callback",
        });
    };

    return (
        <Button
            onClick={signInWithGoogle}
            variant={"secondary"}
            className="w-full text-white h-11"
        >
            Continue with Google
        </Button>
    );
};

export default SignInOAuthButtons;