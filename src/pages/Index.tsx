import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TaskInput from "@/components/TaskInput";
import TaskList from "@/components/TaskList";
import TaskStats from "@/components/TaskStats";

interface Task {
  id: string;
  text: string;
  completed: boolean;
}

const Index = () => {
  const [tasks, setTasks] = useState<Task[]>([
    { id: "1", text: "Review project requirements", completed: true },
    { id: "2", text: "Set up development environment", completed: true },
    { id: "3", text: "Build Task Tracker UI", completed: false },
    { id: "4", text: "Test all functionality", completed: false },
  ]);

  const addTask = (text: string) => {
    const newTask: Task = {
      id: Date.now().toString(),
      text,
      completed: false,
    };
    setTasks((prev) => [newTask, ...prev]);
  };

  const toggleTask = (id: string) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const completedCount = tasks.filter((t) => t.completed).length;

  return (
    <div className="min-h-screen bg-background py-12 px-4">
      <div className="max-w-xl mx-auto">
        <Header />
        
        <TaskInput onAdd={addTask} />
        
        <div className="mt-8">
          <TaskStats total={tasks.length} completed={completedCount} />
          <TaskList tasks={tasks} onToggle={toggleTask} />
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default Index;
