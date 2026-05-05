import { Outlet } from "react-router-dom";
import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from "@/components/ui/resizable";

const MainLayout = () => {
    const isMobile=false;
    return <div className="h-screen bg-black text-white flex flex-col">

        <ResizablePanelGroup orientation="horizontal" className="flex-1 flex h-full overflow-hidden p-2" >

            {/* left sidebar */}
            <ResizablePanel defaultSize={20} minSize={isMobile ? 0 :10} maxSize={250}>
                leftsidebar
            </ResizablePanel>
            <ResizableHandle className="w-2 bg-black rounded-lg transition-colors"/>

            {/* main content area */}
            <ResizablePanel defaultSize={isMobile ? 80 : 40}>
                <Outlet />
            </ResizablePanel> 

            {/* right sidebar */}
            <ResizablePanel defaultSize={20} minSize={0} maxSize={250} collapsedSize={0}>
                friendsactivitycomponent
            </ResizablePanel>
        </ResizablePanelGroup>
    </div>;    
};

export default MainLayout;