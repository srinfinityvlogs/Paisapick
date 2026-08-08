export default function SearchLoading() {
  return (
    <div className="px-6 py-8 max-w-2xl mx-auto">
      {/* Skeleton for the query heading */}
      <div className="animate-pulse">
        <div className="h-3 w-16 bg-surface rounded mb-2" />
        <div className="h-7 w-64 bg-surface rounded mb-6" />
      </div>

      {/* Skeleton product cards */}
      <div className="flex flex-col gap-4">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="ticket flex gap-4 p-4 pl-6 animate-pulse"
          >
            <div className="w-20 h-20 shrink-0 rounded-sm bg-ink/60" />
            <div className="flex-1 space-y-2">
              <div className="h-5 w-3/4 bg-ink/40 rounded" />
              <div className="h-3 w-20 bg-ink/40 rounded" />
              <div className="h-4 w-16 bg-ink/40 rounded mt-2" />
            </div>
            <div className="flex flex-col justify-between items-end">
              <div className="h-4 w-14 bg-ink/40 rounded" />
              <div className="h-9 w-20 bg-ink/40 rounded" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
