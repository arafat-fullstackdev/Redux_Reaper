import { useSelector } from 'react-redux'
export default function Task() {
  const tasks = useSelector((state) =>  state.todo.tasks);
  console.log(tasks);
  return (
    <div>
      <h1>This is Task.</h1>
    </div>
  );
}
