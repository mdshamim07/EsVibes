import Link from "next/link";

export default function NavbarActions() {
  return (
    <div className="actions  items-center gap-3 flex">
      <Link href="/login" className="btn cursor-pointer">
        লগিন
      </Link>
      <Link href="/register" className="variable-btn nav-border cursor-pointer">
        রেজিস্টার
      </Link>
    </div>
  );
}
