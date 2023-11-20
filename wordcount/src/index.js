import  { useState } from 'react';
  import ReactDOM from 'react-dom/client';
  function Timer  () {
    const [count, setCount] = useState(0);
  
    const useEffect = (event) => {
      const timeout = event.target.value;
      setCount(timeout.length);
    };
  
    return (
      <div>
        <label htmlFor="count">Enter your name:</label>
        <input
          type="text"
          id="count"
          onChange={useEffect}
        />
        <p>number of character: {count}</p>
      </div>
    );
  };
  const root=ReactDOM.createRoot(document.getElementById('root'));
  root.render(<Timer/>)


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
