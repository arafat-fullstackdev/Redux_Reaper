import TaskCard from '@/components/module/task/TaskCard';
import { useSelector } from 'react-redux'
import { selectTasks } from '@/Redux/Features/Task/TaskSlice';

export default function Task() {
  const tasks = useSelector(selectTasks);
  
  console.log(tasks);
  return (
    <div className='mx-auto max-w-7xl px-5 mt-20'>
      <div>
      <h1>This is Task.</h1>
    </div>
    <div className='space-y-5 mt-5'>
      <TaskCard/>
      <TaskCard/>
      <TaskCard/>
      <TaskCard/>
      <TaskCard/>
      <TaskCard/>
    </div>
    </div>
  );
}
