import Image from "next/image";

export default function Recents({
  imageUrl,
  title,
  artist,
  key,
}: {
  imageUrl: string;
  title: string;
  artist: string;
  key: number;
}) {
  return (
    <a
      href=""
      className="bg-white/5 p-2 rounded-lg flex flex-col gap-2 hover:bg-white/10"
    >
      <Image
        src={imageUrl}
        className="w-full"
        width={120}
        height={120}
        alt="Capa da playist do veigh"
      />
      <strong className="font-semibold">{title}</strong>
      <span className="text-sm text-zinc-400">{artist}</span>
    </a>
  );
}
