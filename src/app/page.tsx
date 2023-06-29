import { Footer } from "@/components/Footer";
import { Sidebar } from "@/components/Sidebar";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import { RecentsContent } from "@/MockDB/RecentsContent";
import Image from "next/image";
import Recents from "@/components/Recents";
import { AlbunsContent } from "@/MockDB/AlbunsContent";
import Albuns from "@/components/Albuns";
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
          <h1 className="font-semibold text-3xl my-5">Boa noite</h1>

          <div className="grid grid-cols-3 gap-4 mt-4">
            {AlbunsContent.map((item) => (
              <Albuns
                key={item.id}
                imageUrl={item.imageUrl}
                title={item.title}
                desc={item.desc}
              />
            ))}
          </div>
          <h2 className="font-semibold text-2xl my-5">Feito por João Brito</h2>
          <div className="grid grid-cols-5 gap-4 mt-4">
            {RecentsContent.map((item) => (
              <Recents
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

