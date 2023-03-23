import useRoutersElements from './Hooks/useRoutersElements'

function App() {
  const routersElement = useRoutersElements()
  return <div className='App'>{routersElement}</div>
}

export default App
