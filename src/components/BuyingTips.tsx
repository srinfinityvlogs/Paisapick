export default function BuyingTips() {
  return (
    <div className="ticket p-4 pl-6 mt-8">
      <p className="text-xs uppercase tracking-wide text-paper/40 mb-3">Before you buy</p>
      <ol className="text-sm text-paper/60 space-y-2 list-decimal list-inside">
        <li>
          Check the price history first - use Amazon&apos;s &quot;Ask Rufus&quot; assistant or a free tool like{" "}
          <a href="https://keepa.com/#!" target="_blank" rel="noopener noreferrer" className="underline hover:text-paper">Keepa</a>.
        </li>
        <li>
          Make sure to collect any available{" "}
          <a href="https://link.amazon/B0atWjmW5" target="_blank" rel="noopener noreferrer" className="underline hover:text-paper">rewards or offers</a>{" "}
          before checking out.
        </li>
        <li>
          If your cart is below ₹5,000, consider{" "}
          <a href="https://link.amazon/B01Ab4cZd" target="_blank" rel="noopener noreferrer" className="underline hover:text-paper">adding a gift card</a>{" "}
          first - it can sometimes unlock better payment offers.
        </li>
      </ol>
    </div>
  );
}
