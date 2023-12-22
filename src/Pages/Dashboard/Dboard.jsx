import { useState } from 'react';
import './style.css'; // Import your CSS file for styling

const Dboard = () => {
  const [items, setItems] = useState([
    { id: 1, text: 'Item 1' , section : "Section 1"},
    { id: 2, text: 'Item 2' , section : "Section 1"},
    { id: 3, text: 'Item 3' , section : "Section 1"},
  ]);

  const handleDragStart = (e, itemId) => {
    e.dataTransfer.setData('text/plain', itemId);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e, targetSection) => {
    e.preventDefault();

    const itemId = e.dataTransfer.getData('text/plain');

    setItems((prevItems) => {
      return prevItems.map((item) => {
        if (item.id === parseInt(itemId, 10)) {
          return { ...item, section: targetSection };
        }
        return item;
      });
    });
  };

  return (
    <div className="grid-container py-16">
      <div
        className="grid-item"
        onDragOver={(e) => handleDragOver(e)}
        onDrop={(e) => handleDrop(e, 'Section 1')}
      >
        <h2>Section 1</h2>
        {items
          .filter((item) => item.section === 'Section 1')
          .map((item) => (
            <div
              key={item.id}
              draggable
              onDragStart={(e) => handleDragStart(e, item.id)}
            >
              {item.text}
            </div>
          ))}
      </div>

      <div
        className="grid-item"
        onDragOver={(e) => handleDragOver(e)}
        onDrop={(e) => handleDrop(e, 'Section 2')}
      >
        <h2>Section 2</h2>
        {items
          .filter((item) => item.section === 'Section 2')
          .map((item) => (
            <div
              key={item.id}
              draggable
              onDragStart={(e) => handleDragStart(e, item.id)}
            >
              {item.text}
            </div>
          ))}
      </div>

      <div
        className="grid-item"
        onDragOver={(e) => handleDragOver(e)}
        onDrop={(e) => handleDrop(e, 'Section 3')}
      >
        <h2>Section 3</h2>
        {items
          .filter((item) => item.section === 'Section 3')
          .map((item) => (
            <div
              key={item.id}
              draggable
              onDragStart={(e) => handleDragStart(e, item.id)}
            >
              {item.text}
            </div>
          ))}
      </div>
    </div>
  );
};

export default Dboard;
