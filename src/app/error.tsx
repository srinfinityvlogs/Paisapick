"use client";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="min-h-[60vh] flex items-center justify-center px-6">
      <div className="text-center max-w-md">
        <p className="text-marigold text-4xl mb-4">⚠</p>
        <h1 className="font-display text-2xl text-paper mb-3">
          Something went wrong
        </h1>
        <p className="text-paper/60 mb-6 leading-relaxed">
          We couldn&apos;t load this page. This might be a temporary issue — please
          try again.
        </p>
        <button
          onClick={reset}
          className="bg-marigold text-ink font-semibold px-6 py-3 rounded-sm hover:brightness-110 transition-[filter]"
        >
          Try Again
        </button>
      </div>
    </main>
  );
}
