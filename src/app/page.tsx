import { Footer } from "@/components/Footer";
import MusicCard from "@/components/Recents";
import { Sidebar } from "@/components/Sidebar";
import {
  Home as HomeIcon,
  Search,
  Library,
  ChevronLeft,
  ChevronRight,
  Play,
  Shuffle,
  SkipBack,
  SkipForward,
  Repeat,
  Mic2,
  LayoutList,
  Laptop2,
  Volume,
  Maximize,
  Maximize2,
} from "lucide-react";
import { MusicCardContent } from "@/MockDB/RecentsContent";
import Image from "next/image";
export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-8">
          <div className="flex justify-between">
            <div className="flex items-center gap-4">
              <button className="rounded-full bg-black/40 p-1">
                <ChevronLeft />
              </button>
              <button className="rounded-full bg-black/40 p-1">
                <ChevronRight />
              </button>
            </div>
            <Image
              className="rounded-full"
              src="/images.jpeg"
              width={40}
              height={40}
              alt="foto de perfil"
            />
          </div>
          <h1 className="font-semibold text-3xl my-10">Boa noite</h1>

          <div className="grid grid-cols-3 gap-4 mt-4">
            <a
              href=""
              className="bg-white/5 group flex items-center gap-4 rounded overflow-hidden hover:bg-white/10 transition-colors"
            >
              <Image
                src="/album-costa.jpeg"
                width={104}
                height={104}
                alt="Capa da playist do veigh"
              />
              <strong>Mix de Costa Gold</strong>
              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a
              href=""
              className="bg-white/5 flex group  items-center gap-4 rounded overflow-hidden hover:bg-white/10 transition-colors"
            >
              <Image
                src="/album-dospredio.jpeg"
                width={104}
                height={104}
                alt="Capa da playist do veigh"
              />
              <strong>Dos Prédios Deluxe</strong>
              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a
              href=""
              className="bg-white/5 group flex items-center gap-4 rounded overflow-hidden hover:bg-white/10 transition-colors"
            >
              <Image
                src="/album.jpeg"
                width={104}
                height={104}
                alt="Capa da playist do veigh"
              />
              <strong>Dos Prédios</strong>
              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a
              href=""
              className="bg-white/5 group flex items-center gap-4 rounded overflow-hidden hover:bg-white/10 transition-colors"
            >
              <Image
                src="/album-l7.jpeg"
                width={104}
                height={104}
                alt="Capa da playist do veigh"
              />
              <strong>Me Espera</strong>
              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a
              href=""
              className="bg-white/5 group flex items-center gap-4 rounded overflow-hidden hover:bg-white/10 transition-colors"
            >
              <Image
                src="/album-little.jpeg"
                width={104}
                height={104}
                alt="Capa da playist do veigh"
              />
              <strong>LITTLE LOVE (DELUXE)</strong>
              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a
              href=""
              className="bg-white/5 group flex items-center gap-4 rounded overflow-hidden hover:bg-white/10 transition-colors"
            >
              <Image
                src="/album-kay.jpeg"
                width={104}
                height={104}
                alt="Capa da playist do veigh"
              />
              <strong>Contradições</strong>
              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
            </a>
          </div>
          <h2 className="font-semibold text-2xl my-10">Feito por João Brito</h2>
          <div className="grid grid-cols-5 gap-4 mt-4">
            {MusicCardContent.map((item) => (
              <MusicCard
                key={item.id}
                imageUrl={item.imageUrl}
                title={item.title}
                artist={item.artist}
              />
            ))}
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
}

// https://www.youtube.com/watch?v=YVI-q3idGiM 30:33
