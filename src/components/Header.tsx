import { CheckCircle2 } from "lucide-react";

const Header = () => {
  return (
    <header className="text-center mb-8">
      <div className="flex items-center justify-center gap-3 mb-2">
        <div className="p-2 bg-primary/10 rounded-xl">
          <CheckCircle2 className="w-8 h-8 text-primary" />
        </div>
        <h1 className="text-3xl font-bold text-foreground">Task Tracker</h1>
      </div>
      <p className="text-muted-foreground">Stay organized, get things done</p>
    </header>
  );
};

export default Header;
