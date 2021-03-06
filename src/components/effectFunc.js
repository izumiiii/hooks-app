// useEffectとは、「関数の実行タイミングをReactのレンダリング後まで遅らせるhook」
import React, { Component, useEffect, useState } from 'react'
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';

const EffectFunc = () => {
  const [count, setCount] = useState(0)
  useEffect(() => {
    document.title = `${count}回くりっくされました`
  })

  return (
    <>
     <p>{`${count}回クリックされました`}</p>
     <ButtonGroup color="primary" aria-label="outlined primary button group">
       <Button onClick={()=>setCount((prev) => prev + 1)}>ボタン</Button>
       <Button onClick={()=>setCount(0)}>リセット</Button>
     </ButtonGroup>
    </>
  )
}

export default EffectFunc