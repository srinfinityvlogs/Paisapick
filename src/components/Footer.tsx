import Link from "next/link";

export default function Footer() {
  return (
    <footer className="px-6 py-5 border-t border-border text-center text-xs text-paper/30">
      As an Amazon Associate, PaisaPick earns from qualifying purchases.{" "}
      <Link href="/disclosure" className="underline hover:text-paper/60 transition-colors">
        Learn more
      </Link>
      {" · "}
      <Link href="/privacy" className="underline hover:text-paper/60 transition-colors">
        Privacy
      </Link>
    </footer>
  );
}
