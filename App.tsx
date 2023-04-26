import * as React from 'react';
import './style.css';

function MyList({ items, onDelete }) {
  return (
    <ul>
      {/* {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))} */}
      {items.map((item, index) => (
        <li key={index}>
          {item}
          <button onClick={() => onDelete(index)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

export default function App() {
  const inputRef = React.useRef(null);
  const [showPopup, setShowPopup] = React.useState(false);

  const handlseClick = () => {
    inputRef.current.focus();
  };

  const togglePopup = () => {
    setShowPopup(!showPopup);
    alert(`Text box의 값: ${inputRef.current.value}`); // Popup으로 값 출력
  };

  const [items, setItems] = React.useState([]);

  const addItem = () => {
    // setItems([...items, `Item ${items.length + 1}`])
    setItems([...items, `${inputRef.current.value}`]);
  };

  const deleteItem = (index) => {
    const newItems = [...items];
    newItems.splice(index, 1);
    setItems(newItems);
  };

  return (
    <div className="App">
      <h1> Ref Example</h1>
      <h1>
        <input type="text" ref={inputRef} />
        <button onClick={handlseClick}>FocusInputBT</button>
        <button onClick={togglePopup}>TextBoxValue</button>
      </h1>
      {showPopup && <h2>{inputRef.current.value}</h2>}

      <button onClick={addItem}>Add Item</button>
      <MyList items={items} onDelete={deleteItem} />
    </div>
  );
}
