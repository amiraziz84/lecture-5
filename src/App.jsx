import React from 'react'
import './App.css'
import { useState, useCallback, useEffect, useRef } from 'react'
function App() {
 
  const[length, setlength] = useState("8")
  const[numAllowed, setnumAllowed] = useState(false)
  const[charAllowed, setcharAllowed] = useState(false)
  const[password, setpassword] = useState("")
  
  //useRef hook
  const passwordRef = useRef(null)

  let pass = ""
let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
if(numberAllowed) str += "0123456789"
if(numberAllowed) str += "!@#$%^&*(){}[]|\/~`"
for(let i=1;i<=length;i++){
  let char = Math.floor(Math.random()*str.length+1)
  pass += str.charAt(char)
}
setPassword(pass)
console.log(pass)
},[length, numberAllowed,charAllowed,setPassword])

useEffect(()=> {
  passwordGenerator()
},[length, numberAllowed,charAllowed,setPassword])




  return (
    <div className='app' >

      <h1>password generator</h1>
      <br />
      <label htmlFor="pw">password</label>
      <input type="text" name="pw" value={password} onChange={(e)=>setpassword(e.target.value)} />
      <button type="submit">copy</button>
     
      <input type="range" name="length" id="" value={length} onChange={(e)=>setlength(e.target.value)}/>
      <label htmlFor="length">length</label>{length}
      
      <input type="checkbox" name="num" id="" />
      <label htmlFor="num">num</label>
     
      <input type="checkbox" name="char" id="" />
      <label htmlFor="char">char</label>
    </div>
  )
}

export default App