import Image from "next/image";
import Link from "next/link";

export default async function HeroImage({ thumbnail, title, slug }) {
  return (
    <Link href={`/tshirt/${slug}`} className="w-full md:w-[40%]">
      <Image width={1200} height={1200} src={thumbnail} alt={title} />
    </Link>
  );
}
