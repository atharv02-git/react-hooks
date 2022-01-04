import { useEffect, useRef, useState } from "react"
export default function App() {
  const[name, setName] = useState('')
  const inputRef = useRef()
  //how to store the prev value of state in useRef
  const prevName = useRef('')

  const focus = () => {
    inputRef.current.focus()
  }

  useEffect(() => {
    prevName.current = name
  },[name])

  return (
    <>
      <input ref={inputRef} type="text" value={name} onChange={e => setName(e.target.value)} />
      <div onClick={focus}>My name is: {name} and it used to be: {prevName.current}</div>
    </>
  )
}
