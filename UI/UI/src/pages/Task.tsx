import {useAppSelector} from "@/redux/hook";
export default function Task() {
  const tasks = useAppSelector((state) => state.todo.tasks);
  console.log(tasks);
  return (
    <div>
      <h1>This is Task.</h1>
    </div>
  );
}
