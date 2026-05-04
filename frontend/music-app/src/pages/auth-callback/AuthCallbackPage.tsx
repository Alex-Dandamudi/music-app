import { useEffect } from "react";
import { useUser } from "@clerk/react";
import { useNavigate } from "react-router-dom";
import { axiosInstance } from "../../lib/axios";
import { Loader } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const AuthCallbackPage = () => {
    const { isLoaded, user } = useUser();
    const navigate = useNavigate();

    useEffect(() => {
        const syncUser = async () => {
            console.log("[AuthCallback] isLoaded:", isLoaded, "user:", user?.id);
            if (!isLoaded || !user) return;

            try {
                console.log("[AuthCallback] Posting to /auth/callback...");
                const res = await axiosInstance.post("/auth/callback", {
                    id: user.id,
                    firstName: user.firstName,
                    lastName: user.lastName,
                    imageUrl: user.imageUrl,
                });
                console.log("[AuthCallback] Response:", res.data);
            } catch (error: any) {
                console.error("[AuthCallback] Error:", error?.response?.data ?? error?.message ?? error);
            }
            navigate("/");
        };

        syncUser();
    }, [isLoaded, user, navigate]);


    return (
        <div className = "h-screen w-full bg-black flex items-center justify-center">
            <Card className="w-[90%] max-w-2xs bg-zinc-900 border-zinc-800">
                <CardContent className="flex flex-col items-center gap-4 pt-4">
                    <Loader className="size-6 animate-spin text-blue-500"/>
                    <h3 className="text-zinc-400 text-xl font-bold">Logging you in...</h3>
                    <p className="text-zinc-400 text-sm">Redirecting...</p>
                </CardContent>
            </Card>
        </div>
    );
};

export default AuthCallbackPage;