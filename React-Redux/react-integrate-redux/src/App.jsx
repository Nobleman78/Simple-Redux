import { useSelector, useDispatch } from 'react-redux'
import './App.css'
import { decrementCount, incrementCount, resetCount } from './components/Actions/actions'

function App() {
  const count = useSelector((state) => state.count)
  const dispatch = useDispatch()

  const handleIncrement = () => {
    dispatch(incrementCount())
  }
  const handleDecrement = () => {
    dispatch(decrementCount())
  }
  const handleReset = () => {
    dispatch(resetCount())
  }

  return (
    <div style={{background:'blue' ,color:'white' , padding:'20px', borderRadius:'20px'}}>
      <h1>Counter</h1>

      <h2>Count : {count}</h2>

      <div style={{display:'flex',gap:'20px', alignItems:'center' , justifyContent:'center'}}>
        <button style={{padding:'10px 20px'}} onClick={handleIncrement}>Increment</button>
        <button style={{padding:'10px 20px'}} onClick={handleReset}>Reset</button>
        <button style={{padding:'10px 20px'}} onClick={handleDecrement}>Decrement</button>
      </div>
    </div>
  )
}

export default App
