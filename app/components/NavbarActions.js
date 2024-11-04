import Link from "next/link";

export default function NavbarActions() {
  return (
    <div className="actions flex items-center gap-3">
      <Link href="/login" className="btn cursor-pointer">Login</Link>
      <Link href="/register" className="variable-btn nav-border cursor-pointer">Register</Link>
    </div>
  );
}
