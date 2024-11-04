import Link from "next/link";

export default function Logo() {
  return (
    <Link
      href="/"
      className="logo btn cursor-pointer hover:!bg-white font-medium"
    >
      esvibes.
    </Link>
  );
}
