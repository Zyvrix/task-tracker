import TaskItem from "./TaskItem";
import { ClipboardList } from "lucide-react";

interface Task {
  id: string;
  text: string;
  completed: boolean;
}

interface TaskListProps {
  tasks: Task[];
  onToggle: (id: string) => void;
}

const TaskList = ({ tasks, onToggle }: TaskListProps) => {
  if (tasks.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-muted-foreground">
        <ClipboardList className="w-16 h-16 mb-4 opacity-30" />
        <p className="text-lg font-medium">No tasks yet</p>
        <p className="text-sm">Add your first task to get started</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-3">
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} onToggle={onToggle} />
      ))}
    </div>
  );
};

export default TaskList;
