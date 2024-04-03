
import { useLoaderData } from 'react-router-dom'
import './App.css'
import CofffeeCard from './Components/CofffeeCard'
import { useState } from 'react'

function App() {
const loadedCoffees = useLoaderData()
console.log(loadedCoffees);
const [coffes, setCoffes] = useState(loadedCoffees)

  return (
    <div className='m-20'>
      
      <h1 className='text-6xl text-purple-700 my-20'>Hot cold coffee: {coffes.length}</h1>
      <div className='grid md:grid-cols-2 gap-4'>
        {
          coffes.map(coffee => <CofffeeCard key={coffee._id} coffee={coffee}
          coffes={coffes}
          setCoffes={setCoffes}
          ></CofffeeCard>)
        }
      </div>
     
    </div>
  )
}

export default App
