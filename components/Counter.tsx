"use client";

import { useEffect, useState } from "react";

type CounterProps = {
  end: number;
  suffix?: string;
  duration?: number;
};

export default function Counter({
  end,
  suffix = "",
  duration = 2000,
}: CounterProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = Math.ceil(end / (duration / 20));

    const timer = setInterval(() => {
      start += increment;

      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 20);

    return () => clearInterval(timer);
  }, [end, duration]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}
