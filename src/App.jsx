import React from 'react'
import './App.css'
import { useState, useCallback, useEffect, useRef } from 'react'

  function App() {
    const [length,setlength] = useState("8")
    const [num,setNum] = useState(false)
    const [char,setChar] = useState(false)
    const [Password,setpassword] = useState("")

  return (
    <div className='app'>
      <h1>Password Genertor{Password}</h1>
     
      <br />
      <input type="text" name="pw" /*value={Password} onChange ={(e)=> setPassword(e.target.value)}*/   />

      <button type='submit'>copy</button>

      <input type="range" name="" id="" /*value={length} onChange={(e)=> setLength(e.target.value)}*/ />
      {length}
      <input type="checkbox" name="num" id="" />
      num
      <input type="checkbox" name="char" id="" />
      char


    </div>
  )

  
}

export default App