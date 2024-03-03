import React from 'react'
import TaskCard from "./TaskCard";

function App() {
  return (
    <div className="grid grid-cols-2 gap-2 border-solid p-30">
      <div className="border-solid border-2 p-2">
        <h1 className="text-xl font-bold text-gray-500 text-center items-center pb-6">Pending</h1>
        <TaskCard title="Build the website with static content" dueDate="10th April" assigneeName="Rohit S" />
        <TaskCard title="Add a blog" dueDate="22nd March" assigneeName="Rohit M" />
      </div>
      <div className="border-solid border-2 p-2">
        <h1 className="text-xl font-bold text-gray-500 text-center items-center pb-6">Done</h1>
        <TaskCard title="Design the mockup" completedAtDate="10th April" assigneeName="Rohit M" />
        <TaskCard title="Get the approval form principal" completedAtDate="20th April" assigneeName="Ajay S" />
      </div>
    </div>
  )
}

export default App;
