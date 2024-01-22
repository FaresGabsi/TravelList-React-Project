import React, { useState } from "react";
import Item from "./Item";

function PackingList({ items, onDeleteItem, onUpdateItem, onClearList }) {
  const [sortBy, setSortBy] = useState("packed");
  let sortedItems;
  if (sortBy === "input") {
    sortedItems = items;
  }
  if (sortBy === "description") {
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  }
  if (sortBy === "packed") {
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
  }
  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item
            item={item}
            onDeleteItem={onDeleteItem}
            key={item.id}
            onUpdateItem={onUpdateItem}
          />
        ))}
      </ul>
      <div className="actions">
        <select
          value={sortBy}
          onChange={(e) => {
            setSortBy(e.target.value);
          }}>
          <option value="input">Sort by input order</option>
          <option value="description">Sort by packed description</option>
          <option value="packed">Sort by packed status</option>
        </select>
        {sortedItems.length > 0 ? (
          <button onClick={onClearList}>Clear list</button>
        ) : null}
      </div>
    </div>
  );
}

export default PackingList;
