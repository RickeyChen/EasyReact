// 根组件
// App -> index.js -> public/index.html(root)

import { useRef, useState } from "react";
import "./index.css"

function App() {

  let [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  }

  const [form, setForm] = useState({name: "Rickey"})

  const handleForm = () => {
    setForm({
      ...form,
      name: "kk"
    })
  }

  const [value, setValue] = useState('');

  // 获取Dom
  const inputRef = useRef(null);
  const showDom = () => {
    console.log(inputRef.current)
  }

  return (
    <div className="App">
      <button onClick={handleClick}>{count}</button>
      <button onClick={handleForm}>{form.name}</button>
      <div />
      <span className="dd">colorful</span>
      <div />
      <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
      <input type="text" ref={inputRef} />
      <button onClick={showDom}>获取dom</button>
    </div>
  );
}

export default App;
