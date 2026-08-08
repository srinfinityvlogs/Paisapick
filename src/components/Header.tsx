import Link from "next/link";

type HeaderProps = {
  /** Show the inline search bar (e.g. on search results page) */
  showSearch?: boolean;
  /** Pre-fill the search input with the current query */
  defaultQuery?: string;
};

export default function Header({ showSearch, defaultQuery }: HeaderProps) {
  return (
    <header className="px-6 py-5 flex items-center justify-between border-b border-border">
      <Link href="/" className="font-display text-xl text-paper shrink-0">
        Paisa<span className="text-marigold">Pick</span>
      </Link>

      {showSearch && (
        <form action="/search" className="flex gap-2 w-full max-w-sm ml-6">
          <label htmlFor="header-search" className="sr-only">
            Search products
          </label>
          <input
            id="header-search"
            type="text"
            name="q"
            defaultValue={defaultQuery}
            className="flex-1 bg-surface border border-border rounded-sm px-3 py-2 text-sm text-paper focus:outline-none"
          />
          <button
            type="submit"
            className="bg-marigold text-ink text-sm font-semibold px-4 py-2 rounded-sm hover:brightness-110 transition-[filter]"
          >
            Search
          </button>
        </form>
      )}

      <nav className="flex gap-5 text-sm text-paper/60 shrink-0 ml-4">
        <Link href="/finds" className="hover:text-paper transition-colors">
          Finds
        </Link>
        <Link href="/about" className="hover:text-paper transition-colors">
          About
        </Link>
        <Link href="/disclosure" className="hover:text-paper transition-colors">
          Disclosure
        </Link>
      </nav>
    </header>
  );
}
