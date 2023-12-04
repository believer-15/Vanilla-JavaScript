import './App.css'
import Card from './component/Card'

function App() {
  let myobj = {
    name: "ujjwal",
    age: 21
  }
  let newArr = [1,2,3];

  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-xl">Tailwind test</h1>
      <Card username="ujjwal" />
    </>
  )
}

export default App
