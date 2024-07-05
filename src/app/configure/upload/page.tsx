"use client";

import { cn } from "@/lib/utils";
import { ImageIcon, Loader2Icon, MousePointerSquareDashed } from "lucide-react";
import { useState } from "react";
import Dropzone, { FileRejection } from "react-dropzone";

export default function Page() {
  const [isDragOver, setIsDragOver] = useState<boolean>(false);
  const [isUploading, setIsUploading] = useState<boolean>(false);

  function onDropRejected() {
    console.log("Rejected");
  }

  function onDropAccepted() {
    console.log("Accepted");
  }

  return (
    <div
      className={cn(
        "relative h-full flex-1 my-16 w-full rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:rounded-2-xl flex justify-center flex-col items-center",
        { "ring-blue-900/25 bg-blue-900/10": isDragOver }
      )}>
      <div className="relative flex flex-1 flex-col items-center justify-center w-full">
        <Dropzone
          onDropRejected={onDropRejected}
          onDropAccepted={onDropAccepted}
          accept={{
            "image/png": [".png"],
            "image/jpeg": [".jpeg"],
            "image/jpg": [".jpg"],
          }}
          onDragEnter={() => setIsDragOver(true)}
          onDragLeave={() => setIsDragOver(false)}>
          {({ getRootProps, getInputProps }) => {
            return (
              <div
                className="h-full w-full flex-1 flex flex-col items-center justify-center"
                {...getRootProps()}>
                <input {...getInputProps()} />
                {isDragOver ? (
                  <MousePointerSquareDashed className="h-6 w-6 text-zinc-500 mb-2" />
                ) : isUploading ? (
                  <Loader2Icon className="animate-spin h-6 w-6 text-zinc-500 mb-2" />
                ) : (
                  <ImageIcon className="h-6 w-6 text-zinc-500 mb-2" />
                )}
              </div>
            );
          }}
        </Dropzone>
      </div>
    </div>
  );
}
