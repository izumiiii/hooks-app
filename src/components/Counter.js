import React, { useState } from 'react'

const Counter = () => {
  const initialState = 0;
  const [count, setCount] = useState(initialState)
  const [open, setOpen] = useState(true)
  const toggle = () => setOpen(!open)

  return (
    <>
     <button onClick={toggle}>{open ? 'close' : 'open' }</button>
     <div className={open ? 'isOpen' : 'isClose'}>
       <p>現在の数字は{count}です</p>
       <button onClick={() => setCount(prevState => prevState + 1)}>
         +1
       </button>
       <button onClick={() => setCount(count - 1)}>- 1</button>
       <button onClick={() => setCount(0)}>0</button>
       <button onClick={() => setCount(initialState)}>最初の数値に戻す。</button>
     </div>
    </>
  )
}

export default Counter
