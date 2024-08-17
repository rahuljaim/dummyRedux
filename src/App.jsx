import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import { getUserDetails, incr } from './reducers/incrementReducer'


function App() {
  // const [count, setCount] = useState(0)
  const count = useSelector(state=>state.increment.value)
  const posts = useSelector((state)=>state.increment.posts.userDetails)
  const dispatch = useDispatch()
  console.log(count,"====")
  const counterNvalue =async()=>{
    await dispatch(incr())
    await dispatch(getUserDetails())
  }
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={counterNvalue}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
      {posts.map((e,i)=>(
        <div key = {e.id}><h3>{e.title}</h3>
        <p>{e.body}</p></div>
      ))}
      </p>
    </>
  )
}

export default App
