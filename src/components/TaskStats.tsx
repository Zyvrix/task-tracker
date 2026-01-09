interface TaskStatsProps {
  total: number;
  completed: number;
}

const TaskStats = ({ total, completed }: TaskStatsProps) => {
  const pending = total - completed;
  const percentage = total > 0 ? Math.round((completed / total) * 100) : 0;

  return (
    <div className="flex items-center gap-6 p-4 bg-card rounded-xl shadow-card mb-6">
      <div className="flex-1">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-muted-foreground">Progress</span>
          <span className="text-sm font-semibold text-foreground">{percentage}%</span>
        </div>
        <div className="h-2 bg-muted rounded-full overflow-hidden">
          <div
            className="h-full bg-primary rounded-full transition-all duration-500 ease-out"
            style={{ width: `${percentage}%` }}
          />
        </div>
      </div>
      <div className="flex gap-4 text-center">
        <div>
          <p className="text-2xl font-bold text-foreground">{pending}</p>
          <p className="text-xs text-muted-foreground">Pending</p>
        </div>
        <div className="w-px bg-border" />
        <div>
          <p className="text-2xl font-bold text-primary">{completed}</p>
          <p className="text-xs text-muted-foreground">Done</p>
        </div>
      </div>
    </div>
  );
};

export default TaskStats;
