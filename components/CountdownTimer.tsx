"use client";

import { useState, useEffect } from "react";

export default function CountdownTimer({ 
  initialDays = 5, 
  initialHours = 12, 
  initialMinutes = 34,
  initialSeconds = 59
}) {
  const [timeLeft, setTimeLeft] = useState(
    initialDays * 86400 + initialHours * 3600 + initialMinutes * 60 + initialSeconds
  );
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const d = Math.floor(timeLeft / 86400);
  const h = Math.floor((timeLeft % 86400) / 3600);
  const m = Math.floor((timeLeft % 3600) / 60);
  const s = Math.floor(timeLeft % 60);

  const format = (val: number) => val.toString().padStart(2, "0");

  // To prevent hydration errors, show zeros before client-side hydration
  if (!mounted) {
    return <span className="font-mono">00 : 00 : 00 : 00</span>;
  }

  return (
    <span className="font-mono">
      {format(d)} : {format(h)} : {format(m)} : {format(s)}
    </span>
  );
}
