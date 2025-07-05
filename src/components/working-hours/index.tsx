interface WorkingHour {
  day: string;
  hours: string;
}

interface WorkingHoursProps {
  hours: WorkingHour[];
}

export function WorkingHours({ hours }: WorkingHoursProps) {
  const today = new Date().toLocaleDateString("en-US", { weekday: "long" });

  return (
    <div className="bg-white/70 backdrop-blur-xl border border-white/20 rounded-2xl p-6 shadow-glass">
      <div className="space-y-2">
        {hours.map((item) => {
          const isToday = item.day.toLowerCase() === today.toLowerCase();
          const isClosed = item.hours === "Closed";

          return (
            <div
              key={item.day}
              className={`flex justify-between items-center py-3 px-3 sm:px-4 rounded-xl transition-all duration-300 gap-1 sm:gap-2 min-h-[48px] ${
                isToday
                  ? "bg-glass-primary/5 border border-glass-primary/10"
                  : "hover:bg-neutral-100/50"
              }`}
            >
              <span
                className={`text-sm font-medium flex-shrink-0 max-w-[120px] ${
                  isToday ? "text-glass-primary" : "text-neutral-900"
                }`}
              >
                {item.day}
              </span>

              <span
                className={`text-sm text-right flex-shrink-0 ${
                  isClosed
                    ? "text-neutral-400"
                    : isToday
                    ? "text-glass-primary font-medium"
                    : "text-neutral-700"
                }`}
              >
                {item.hours}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
