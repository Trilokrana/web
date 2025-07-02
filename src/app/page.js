"use client";
import { useState, useCallback, memo } from "react";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { Checkbox } from "../components/ui/checkbox";
import {
  ChevronLeft,
  X,
  Trash,
  Copy,
  Plus,
  Download,
  ChevronRight,
  ArrowUp,
} from "lucide-react";

const Page = () => {
  const [isRightPanelVisible, setIsRightPanelVisible] = useState(false);
  const [isRightPanelFullScreen, setIsRightPanelFullScreen] = useState(false);

  return (
    <main className="h-screen w-full relative overflow-hidden">
      <ResizablePanelGroup
        direction="horizontal"
        className="h-full w-full min-w-0"
      >
        <ResizablePanel
          defaultSize={50}
          className={`transition-all duration-500 ease-in-out ${
            isRightPanelFullScreen ? "hidden" : ""
          }`}
        >
          <div
            className={`h-full p-4 overflow-hidden transition-all duration-500 ease-in-out ${
              !isRightPanelVisible ? "max-w-3xl mx-auto " : "max-w-2xl mx-auto"
            }`}
          >
            <Card className="h-full flex flex-col overflow-hidden border-0 bg-transparent">
              <CardContent className="flex-1 overflow-y-auto p-4 space-y-4"></CardContent>
              <CardFooter className="p-4 border-t-0">
                <div className="relative w-full">
                  <Input
                    type="text"
                    placeholder="Enter your prompt here..."
                    className="pr-10 rounded-xl h-28 focus:outline-none transition-colors duration-200"
                  />
                  <Button
                    size="icon"
                    className="absolute right-3 bottom-3 bg-gray-300 hover:bg-gray-400 cursor-pointer rounded-lg p-2 transition-colors duration-200"
                  >
                    <ArrowUp />
                  </Button>
                </div>
              </CardFooter>
            </Card>
          </div>
        </ResizablePanel>

        {isRightPanelVisible ? (
          <ResizableHandle className="cursor-col-resize border border-gray-200 transition-colors duration-200">
            <div className="h-16 mx-auto my-auto rounded-lg transition-colors duration-200"></div>
          </ResizableHandle>
        ) : (
          <div className="flex flex-col p-1 transition-all duration-300 ease-in-out">
            <Button
              variant="ghost"
              size="icon"
              className="bg-gray-200 hover:bg-gray-300 rounded-lg p-1 transition-transform duration-200 hover:scale-110 mr-2"
              onClick={() => setIsRightPanelVisible(true)}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        )}

        {isRightPanelVisible && (
          <ResizablePanel defaultSize={50}>
            <div className="h-full overflow-hidden ">
              <Card className="h-full flex flex-col overflow-hidden border-0 transition-all duration-500 ease-in-out">
                <CardHeader className="flex  justify-between">
                  <h3 className="text-lg font-medium">Companies List</h3>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="bg-gray-200 rounded-lg p-2 transition-colors duration-200 hover:rotate-90"
                    onClick={() => {
                      setIsRightPanelFullScreen(false);
                      setTimeout(() => {
                        setIsRightPanelVisible(false);
                      }, 50);
                    }}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </CardHeader>

                <div className="gap-2 flex flex-wrap justify-between px-3 mb-2 transition-all duration-500 ease-in-out">
                  <div className="flex flex-wrap gap-2">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="bg-gray-200 hover:bg-gray-300 rounded-lg p-1 transition-all duration-200"
                      onClick={() => {
                        setIsRightPanelFullScreen(!isRightPanelFullScreen);
                      }}
                      title={
                        isRightPanelFullScreen
                          ? "Show Left Panel"
                          : "Hide Left Panel"
                      }
                    >
                      {isRightPanelFullScreen ? (
                        <ChevronRight className="h-4 w-4 transition-all duration-500 ease-in-out" />
                      ) : (
                        <ChevronLeft className="h-4 w-4 transition-all duration-500 ease-in-out" />
                      )}
                    </Button>

                    <Button
                      variant="outline"
                      className="border-gray-200 bg-gray-200 hover:bg-gray-300 rounded-lg px-3 py-1 flex items-center gap-1 transition-colors duration-200"
                    >
                      Delete <Trash size={16} />
                    </Button>
                    <Button
                      variant="outline"
                      className="text-gray-500 border-gray-200 bg-gray-200 hover:bg-gray-300 rounded-lg px-3 py-1 flex items-center gap-1 transition-colors duration-200"
                    >
                      Copy <Copy size={16} />
                    </Button>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Button
                      variant="outline"
                      className="border-gray-200 bg-gray-200 hover:bg-gray-300 rounded-lg px-3 py-1 flex items-center gap-1 transition-colors duration-200"
                    >
                      Add Column <Plus size={16} />
                    </Button>
                    <Button
                      variant="outline"
                      className="text-gray-500 border-gray-200 bg-gray-200 hover:bg-gray-300 rounded-lg px-3 py-1 flex items-center gap-1 transition-colors duration-200"
                    >
                      Export <Download size={16} />
                    </Button>
                  </div>
                </div>

                <div className="overflow-x-auto w-full">
                  <div className="grid grid-cols-6 text-black text-sm border border-gray-300 min-w-[600px]">
                    <div className="flex items-center justify-center px-2 py-2 border-r border-gray-300 bg-gray-100">
                      <Checkbox className="mr-1 border-gray-400 flex-shrink-0" />
                      <span>#</span>
                    </div>
                    <div className="flex items-center justify-between px-2 py-2 border-r border-gray-300 bg-gray-100">
                      <span>Company</span>
                      <span className="ml-1 flex-shrink-0">⇅</span>
                    </div>
                    <div className="flex items-center justify-between px-2 py-2 border-r border-gray-300 bg-gray-100 col-span-2">
                      <span>Description</span>
                    </div>
                    <div className="flex items-center justify-between px-2 py-2 border-r border-gray-300 bg-gray-100">
                      <span>Country</span>
                      <span className="ml-1 flex-shrink-0">⇅</span>
                    </div>
                    <div className="flex items-center justify-between px-2 py-2 bg-gray-100">
                      <span>Similarity</span>
                      <span className="ml-1 flex-shrink-0">⇅</span>
                    </div>
                  </div>
                  <div className="w-full flex-1 flex items-center justify-center text-gray-500 border border-r-0 border-l-0 border-gray-200 p-8 flex-col overflow-hidden">
                    <div className="mb-4 opacity-50 text-2xl">🔍</div>
                    <div className="animate-fadeIn">No results.</div>
                  </div>
                </div>
              </Card>
            </div>
          </ResizablePanel>
        )}
      </ResizablePanelGroup>
    </main>
  );
};

export default Page;
