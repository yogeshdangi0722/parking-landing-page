import React, { useState } from "react";

const items = [
  { id: 1, name: "Item 1", component: () => <div>Component for Item 1</div> },
  { id: 2, name: "Item 2", component: () => <div>Component for Item 2</div> },
  { id: 3, name: "Item 3", component: () => <div>Component for Item 3</div> },
];

function Features() {
  const [selectedComponent, setSelectedComponent] = useState(null);

  const handleItemClick = (item) => {
    setSelectedComponent(item.component());
  };

  return (
    <div className="container mt-5 border">
      <div className="card-container">
        <div style={{ width: "30%", borderRight: "1px solid #ccc" }}>
          <ul>
            {items.map((item) => (
              <li key={item.id} onClick={() => handleItemClick(item)}>
                {item.name}
              </li>
            ))}
          </ul>
        </div>
        <div style={{ width: "70%", padding: "0 20px" }}>
          {selectedComponent ? (
            selectedComponent
          ) : (
            <p>Select an item from the list</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Features;
