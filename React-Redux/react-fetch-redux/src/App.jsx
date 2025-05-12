import { useSelector, useDispatch } from 'react-redux'
import './App.css'
import { useEffect } from 'react'
import getAllTodos from './components/Action/Action'

function App() {
  const { isloading, todos, error } = useSelector(state => state)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllTodos())
  }, [dispatch])

  return (
    <div>
      <h2>Todos App</h2>

      {isloading && <h3>Loading......</h3>}
      {error && <h3>{error.message}</h3>}
      <section style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '20px' }}>
        {todos && todos.map((todo) => {
          const { title, id } = todo;
          return <article style={{ border: '1px solid blue', background: 'blue', color: 'white' }} key={id}>
            <h4>{id}</h4>
            <h4>{title}</h4>
          </article>
        })}
      </section>
    </div>
  )
}

export default App
