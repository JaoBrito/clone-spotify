import { Shuffle, SkipBack, Play, SkipForward, Repeat, Mic2, LayoutList, Laptop2, Volume, Maximize2, Heart, PictureInPicture, PictureInPicture2 } from "lucide-react";
import Image from "next/image";

export function Footer () {
  return (
    <footer className="bg-black border-t border-zinc-800 px-6 py-2 flex items-center justify-between">
        <div className="flex items-center gap-3">
        <Image className="rounded-sm" src="/album-war.jpeg" width={56} height={56} alt="Capa da playist do veigh"/>
          <div className="flex flex-col">
          <strong className="font-normal">War - Remix</strong>
            <span className="text-xs text-zinc-400">Filipe Ret, Orochi, Dallass</span>
          </div>
          <div className="flex gap-4">
            <Heart size={16} className="text-zinc-200"/>
            <PictureInPicture2 size={18} className="text-zinc-200"/>
          </div>
        </div>
        <div className="flex flex-col items-center gap-2">
          <div className="flex items-center gap-6">
            <Shuffle size={20} className="text-zinc-200"/>
            <SkipBack size={20} className="text-zinc-200"/>
            <button className="w-10 h-10 flex items-center justify-center pl-1 rounded-full bg-white text-black">
                <Play />
              </button>
            <SkipForward size={20} className="text-zinc-200"/>
            <Repeat size={20} className="text-zinc-200"/>
          </div>

          <div className="flex items-center gap-2">
              <span className="text-xs text-zinc-400">0:31</span>
              <div className="h-1 rounded-full w-96 bg-zinc-600">
              <div className="h-1 rounded-full w-20 bg-zinc-200"></div>
              </div>
              <span className="text-xs text-zinc-400">2:14</span>
          </div>
          <div>

          </div>
        </div>
        <div className="flex items-center gap-4">
          <Mic2 size={20}/>
          <LayoutList size={20}/>
          <Laptop2 size={20}/>
          <div className="flex items-center gap-2">
            <Volume size={20}/>
            <div className="h-1 rounded-full w-24 bg-zinc-600">
              <div className="h-1 rounded-full w-10 bg-zinc-200"></div>
              </div> 
          </div>
          <Maximize2 size={20}/>
        </div>
      </footer>
  )
}