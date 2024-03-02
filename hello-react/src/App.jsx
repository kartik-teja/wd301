import TaskCard from "./TaskCard";

function App() {
  return (
    <div class="grid grid-cols-2 gap-2 border-solid p-30">
      <div className="border-solid border-2 p-2">
        <h1 className="text-xl font-bold text-gray-500 text-center items-center pb-6">Pending</h1>
        <TaskCard title="Build the website with static content" due_on="10th April" assigneeName="Rohit S" />
        <TaskCard title="Add a blog" due_on="22nd March" assigneeName="Rohit M" />
      </div>
      <div className="border-solid border-2 p-2">
        <h1 className="text-xl font-bold text-gray-500 text-center items-center pb-6">Done</h1>
        <TaskCard title="Design the mockup" completed_on="10th April" assigneeName="Rohit M" />
        <TaskCard title="Get the approval form principal" completed_on="20th April" assigneeName="Ajay S" />
      </div>
    </div>
  )
}

export default App;
