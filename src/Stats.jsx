import React from "react";

function Stats({ items }) {
  if (!items.length)
    return (
      <footer className="stats">
        <em>Start Adding some Items</em>
      </footer>
    );
  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentPacked = Math.round((numPacked / numItems) * 100);
  return (
    <footer className="stats">
      <em>
        {percentPacked === 100
          ? "🎉 You're all packed!"
          : `👜 You have ${numItems} items on your list, and you already packed
            ${numPacked} (${percentPacked}%)`}
      </em>
    </footer>
  );
}
export default Stats;
