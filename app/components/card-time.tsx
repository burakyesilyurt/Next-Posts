"use client";
import { timeAgo } from "@/utils/time-ago"
import { useEffect, useState } from "react";


const CardTime = ({ date }: { date: string }) => {

  const [time, setTime] = useState(timeAgo(date));
  // yeni
  useEffect(() => {
    if (time.time < 6000000) {
      const interval = setInterval(() => {
        setTime(timeAgo(date))
      }, 10000);
      return () => clearInterval(interval);
    }
  }, []);

  return (
    <>
      <span className="text-xs py-1 text-slate-300">{time.value}</span>
    </>
  )
}

export default CardTime