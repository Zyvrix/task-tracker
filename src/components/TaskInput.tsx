import { useState } from "react";
import { Plus } from "lucide-react";

interface TaskInputProps {
  onAdd: (text: string) => void;
}

const TaskInput = ({ onAdd }: TaskInputProps) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (value.trim()) {
      onAdd(value.trim());
      setValue("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-3">
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Add a new task..."
        className="flex-1 px-4 py-3 bg-card border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring/20 focus:border-primary transition-base shadow-card"
      />
      <button
        type="submit"
        disabled={!value.trim()}
        className="px-5 py-3 bg-primary text-primary-foreground font-medium rounded-xl flex items-center gap-2 transition-base hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed shadow-card hover:shadow-card-hover"
      >
        <Plus className="w-5 h-5" />
        <span className="hidden sm:inline">Add</span>
      </button>
    </form>
  );
};

export default TaskInput;
