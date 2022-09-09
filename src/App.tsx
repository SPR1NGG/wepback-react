import {useState} from "react";
import "./app.scss"

const App = () => {
  const [count, setCount] = useState(0)

  return (
      <>
          <p className={"mainText"}>Clicks: {count}</p>
          <button className={"button"} onClick={() => setCount(prev => ++prev )}>Click <span>me</span> ╰(*°▽°*)╯</button>
      </>
  )
}

export default App