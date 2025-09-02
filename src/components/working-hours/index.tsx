interface WorkingHour {
  day: string;
  hours: string;
}

interface WorkingHoursProps {
  hours: WorkingHour[];
}

export function WorkingHours({ hours }: WorkingHoursProps) {
  const now = new Date();
  const today = now.toLocaleDateString("en-US", { weekday: "long" });
  const currentTime = now.getHours() * 60 + now.getMinutes(); // Current time in minutes

  // Helper function to parse time strings like "9:00 AM" to minutes
  const parseTimeToMinutes = (timeStr: string): number => {
    if (timeStr === "Closed") return -1;
    
    const [time, period] = timeStr.split(' ');
    const [hours, minutes] = time.split(':').map(Number);
    let totalMinutes = hours * 60 + minutes;
    
    if (period === 'PM' && hours !== 12) {
      totalMinutes += 12 * 60;
    } else if (period === 'AM' && hours === 12) {
      totalMinutes = minutes;
    }
    
    return totalMinutes;
  };

  // Get current status
  const getCurrentStatus = () => {
    const todayHours = hours.find(h => h.day.toLowerCase() === today.toLowerCase());
    if (!todayHours || todayHours.hours === "Closed") {
      return { status: "closed", message: "Closed today" };
    }

    const [startTime, endTime] = todayHours.hours.split(' - ');
    const startMinutes = parseTimeToMinutes(startTime);
    const endMinutes = parseTimeToMinutes(endTime);

    if (startMinutes === -1 || endMinutes === -1) {
      return { status: "closed", message: "Closed today" };
    }

    if (currentTime >= startMinutes && currentTime <= endMinutes) {
      const minutesUntilClose = endMinutes - currentTime;
      if (minutesUntilClose <= 60) {
        return { status: "closing-soon", message: `Closing in ${minutesUntilClose} min` };
      }
      return { status: "open", message: `Open until ${endTime}` };
    } else if (currentTime < startMinutes) {
      const minutesUntilOpen = startMinutes - currentTime;
      if (minutesUntilOpen <= 60) {
        return { status: "opening-soon", message: `Opening in ${minutesUntilOpen} min` };
      }
      return { status: "closed", message: `Opens at ${startTime}` };
    } else {
      // Find next opening day
      const nextDay = hours.find((h, index) => {
        const dayIndex = hours.findIndex(day => day.day.toLowerCase() === today.toLowerCase());
        const nextDayIndex = (dayIndex + 1 + index) % 7;
        const nextDayItem = hours[nextDayIndex];
        return nextDayItem.hours !== "Closed";
      });
      
      if (nextDay) {
        const [nextStartTime] = nextDay.hours.split(' - ');
        return { status: "closed", message: `Opens ${nextDay.day} at ${nextStartTime}` };
      }
      return { status: "closed", message: "Closed" };
    }
  };

  const { status, message } = getCurrentStatus();

  return (
    <div className="bg-white/70 backdrop-blur-xl border border-white/20 rounded-2xl p-6 shadow-glass">
      {/* Current Status */}
      <div className="mb-4 p-3 rounded-xl bg-gradient-to-r from-neutral-50/50 to-white/50 border border-neutral-100/50">
        <div className="flex items-center gap-3">
          <div className={`w-3 h-3 rounded-full ${
            status === 'open' ? 'bg-green-500' :
            status === 'closing-soon' ? 'bg-amber-500' :
            status === 'opening-soon' ? 'bg-blue-500' :
            'bg-red-500'
          } ${
            status === 'open' ? 'animate-pulse' : ''
          }`} />
          <div>
            <div className={`text-sm font-medium ${
              status === 'open' ? 'text-green-700' :
              status === 'closing-soon' ? 'text-amber-700' :
              status === 'opening-soon' ? 'text-blue-700' :
              'text-red-700'
            }`}>
              {status === 'open' ? 'Open Now' :
               status === 'closing-soon' ? 'Closing Soon' :
               status === 'opening-soon' ? 'Opening Soon' :
               'Closed'}
            </div>
            <div className="text-xs text-neutral-600">{message}</div>
          </div>
        </div>
      </div>

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
