import { Check } from "lucide-react";

interface Task {
  id: string;
  text: string;
  completed: boolean;
}

interface TaskItemProps {
  task: Task;
  onToggle: (id: string) => void;
}

const TaskItem = ({ task, onToggle }: TaskItemProps) => {
  return (
    <div
      onClick={() => onToggle(task.id)}
      className={`group flex items-center gap-4 p-4 bg-card rounded-xl shadow-card cursor-pointer transition-base hover:shadow-card-hover ${
        task.completed ? "opacity-70" : ""
      }`}
    >
      <button
        className={`flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-base ${
          task.completed
            ? "bg-primary border-primary"
            : "border-muted-foreground/30 group-hover:border-primary/50"
        }`}
        aria-label={task.completed ? "Mark as pending" : "Mark as completed"}
      >
        {task.completed && <Check className="w-3.5 h-3.5 text-primary-foreground" />}
      </button>

      <span
        className={`flex-1 text-base transition-base ${
          task.completed
            ? "line-through text-muted-foreground"
            : "text-foreground"
        }`}
      >
        {task.text}
      </span>

      <span
        className={`px-3 py-1 text-xs font-medium rounded-full transition-base ${
          task.completed
            ? "bg-success-muted text-accent-foreground"
            : "bg-warning-muted text-secondary-foreground"
        }`}
      >
        {task.completed ? "Completed" : "Pending"}
      </span>
    </div>
  );
};

export default TaskItem;
