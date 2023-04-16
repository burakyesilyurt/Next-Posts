"use client";
import { timeAgo } from "@/utils/time-ago"
import { useEffect, useState } from "react";


const CardTime = ({ date }: { date: string }) => {
  const [time, setTime] = useState(timeAgo(date));
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(timeAgo(date))
    }, 10000);

    return () => clearInterval(interval);
  }, []);
  return (
    <span className="text-xs py-1 text-slate-300">{time}</span>
  )
}

export default CardTime