import { Play } from "lucide-react";
import Image from "next/image";

export default function Albuns({
  imageUrl,
  title,
  desc,
  key,
}: {
  imageUrl: string;
  desc: string;
  title: string;
  key: number;
}) {
  return (
    <a
      href=""
      className="bg-white/5 group flex items-center gap-4 rounded overflow-hidden hover:bg-white/10 transition-colors"
    >
      <Image
        src={imageUrl}
        width={104}
        height={104}
        alt={desc}
      />
      <strong>{title}</strong>
      <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
        <Play />
      </button>
    </a>
  );
}
