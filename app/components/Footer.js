import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <p className="text-gray-300 text-sm">
        2024 All Copytright reversed
        <Link href="/" className=" logo text-white ml-2 btn hover:!bg-white">
          esvibes
        </Link>
      </p>
    </footer>
  );
}
