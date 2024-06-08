import React from 'react'
import Button from 'react-bootstrap/esm/Button';

function Home() {
  return (
    <div className='w-[100%] h-[100vh] d-flex justify-content-center align-items-center '>
      <div className='container d-flex justify-content-center align-items-center flex-column'>
        <h1 className='font-bold text-4xl p-2 bg-gradient-to-r from-amber-700 to-purple-600 bg-clip-text text-transparent text-center'>Organise Your work and life</h1>
        <p className='bg-gradient-to-r from-blue-700 to-amber-600 bg-clip-text text-transparent font-bold text-center'>
          Become focused, organised and calm with <br />
          todo app. The Only ToDo you need.
        </p>

        <Button className='my-2 font-bold' variant="outline-primary">Make ToDo List</Button>
      </div>
    </div>
  )
}

export default Home;
