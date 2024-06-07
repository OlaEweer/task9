import './App.css'
import React, { useEffect, useState } from 'react'


function App() {
    const [count, setCount] = useState(0);
    const [increase, setIncrease] = useState(true);

    useEffect(() => {
        alert('Welcome to Task 9');
    }, []);

    useEffect(() => {
        const body = document.querySelector('body');
        if (count === 10 || count === 100 || count === 1000) {
            body.style.backgroundColor = '#a53f9d82';
            setTimeout(() => {
              alert(`Count is ${count}`);
          }, 300);
        } else {
            body.style.backgroundColor = 'white';
        }
    }, [count]);

    const handleButtonClick = () => {
        if (increase) {
            if (count >= 1000) {
                setIncrease(false);
            } else if (count >= 100) {
                setCount(count + 100);
            } else if (count >= 10) {
                setCount(count + 10);
            } else {
                setCount(count + 1);
            }
        } else {
            if (count <= 1) {
                setIncrease(true);
                setCount(1);
            }
            if (count > 100) {
                setCount(count - 100);
            } else if (count > 10) {
                setCount(count - 10);
            } else {
                setCount(count - 1);
            }
            if (count <= 1000) {
                return;
            }
        }
    };

    return (
      <div>
          <h1>Count: {count}</h1>
          <button onClick={handleButtonClick}>
              {increase ? 'Increase' : 'Decrease'}
          </button>
      </div>
  );
};


export default App