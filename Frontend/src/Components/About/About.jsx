import React from 'react'

function About() {
  return (
    <div className='mb-4 mt-4 min-h-screen max-h-auto'>
       <div className='container'>
       <div className='flex flex-col'>
       <h2 className="text-2xl mb-4 font-bold bg-gradient-to-br from-blue-700 to-red-700 bg-clip-text text-transparent">About Us</h2>
       <div className='bg-blue-700 p-0.5 px-10 w-32 relative bottom-5 rounded-lg'></div>
       </div>
      
      <p className="mb-4 text-slate-600">
        Welcome to the ToDo App! This application was created to help you manage your daily tasks efficiently and effectively. Our goal is to provide a simple yet powerful tool that makes task management a breeze.
      </p>
      <p className="mb-4 bg-gradient-to-br from-blue-700 to-red-700 bg-clip-text text-transparent"><strong>Features:</strong></p>
      <ul className="list-disc list-inside mb-4 text-slate-600">
        <li>Add new tasks easily</li>
        <li>View your list of tasks at a glance</li>
        <li>Responsive design for use on any device</li>
      </ul>
      <p className="mb-4 text-slate-600">
        We hope you find this app useful and it helps you stay organized and productive. If you have any questions or feedback, feel free to reach out to us.
      </p>
      <p className='bg-gradient-to-br from-blue-700 to-red-700 bg-clip-text text-transparent'><strong>Contact Us:</strong></p>
      <p className='font-bold text-red-500'>Email: <span className='cursor-pointer hover:text-blue-700'>support@todoapp.com</span></p>
    </div>
    </div>
  )
}

export default About
