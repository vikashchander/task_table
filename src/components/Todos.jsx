import React, { useState } from "react";

function Todos() {
  const [data, setData] = useState([]);
  function handleLoad(e) {
    e.preventDefault();
    const result = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/todos");
      const ans = await res.json();
      console.log(ans);
      setData(ans);
    };
    result();
  }

  function handleCapital(e, idx) {
    e.preventDefault();
    const ans = data.map(({ id, title }) => {
      if (id === idx) {
        console.log(title);
        title = title.toUpperCase();
      }
      return { id, title };
    });
    setData(ans);
  }

  function handleClear(e, idx) {
    e.preventDefault();
    const res = data.filter(({ id }) => {
      return id !== idx;
    });
    setData(res);
  }
  function handleArrange(e, idx) {
    e.preventDefault();
    const ans = data.map(({ id, title }) => {
      if (id === idx) {
        title = title.replaceAll(" ", "_");
      }
      return { id, title };
    });
    setData(ans);
  }
  return (
    <div>
      <h1> Task-2 </h1>
      <button onClick={(e) => handleLoad(e)}>Load</button>
      {data.map(({ id, title }) => {
        return (
          <>
            <div key={id}>
              <p>{title}</p>
              <br />
              <button onClick={(e) => handleClear(e, id)}>Clear</button>
              <button onClick={(e) => handleArrange(e, id, title)}>
                Rearrange
              </button>
              <button onClick={(e) => handleCapital(e, id)}>Capital</button>
            </div>
            <br />
          </>
        );
      })}
    </div>
  );
}

export default Todos;
