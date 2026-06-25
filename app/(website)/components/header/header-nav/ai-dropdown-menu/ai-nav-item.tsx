import React from "react";

interface IAINavItem {
  color: string;
  icon: React.ComponentType<{ color: string }>;
  title: string;
  desc: string;
}

export const AINavItem = ({ color, icon, title, desc }: IAINavItem) => {
  return (
    <div className="w-full flex items-center gap-2 p-2 hover:bg-muted rounded-lg transition-colors cursor-pointer">
      <div
        className="size-8 rounded-sm flex items-center justify-center"
        style={{
          backgroundColor: `rgba(${color}, 0.05)`,
        }}
      >
        {React.createElement(icon, { color })}
      </div>

      <div className="flex flex-col">
        <div className="flex items-end gap-1">
          <span className="text-sm font-medium">{title}</span>
        </div>

        <span className="text-xs text-muted-foreground font-medium">{desc}</span>
      </div>
    </div>
  );
};
