import {useState} from "react";
import style from "./app.module.scss"

const App = () => {
  const [count, setCount] = useState(0)

  return (
      <>
          <p className={style.mainText}>Clicks: {count}</p>
          <button className={style.button} onClick={() => setCount(prev => ++prev )}>Click <span>me</span> ╰(*°▽°*)╯</button>
      </>
  )
}

export default App