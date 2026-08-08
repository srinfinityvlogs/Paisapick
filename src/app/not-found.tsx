import Link from "next/link";

export default function NotFoundPage() {
  return (
    <main className="min-h-[60vh] flex items-center justify-center px-6">
      <div className="text-center max-w-md">
        <p className="text-marigold font-mono text-5xl mb-4">404</p>
        <h1 className="font-display text-2xl text-paper mb-3">
          Page not found
        </h1>
        <p className="text-paper/60 mb-6 leading-relaxed">
          The page you&apos;re looking for doesn&apos;t exist or may have been moved.
        </p>
        <Link
          href="/"
          className="inline-block bg-marigold text-ink font-semibold px-6 py-3 rounded-sm hover:brightness-110 transition-[filter]"
        >
          Back to Home
        </Link>
      </div>
    </main>
  );
}
