import { clsx } from "clsx";
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function formatDate(timestamp) {
  const now = new Date();
  const date = new Date(timestamp * 1000); // UNIX timestamp je u sekundama, pa množi sa 1000 za milisekunde

  // Proveri ako je datum danas
  if (now.toDateString() === date.toDateString()) {
    return "Danas";
  }

  // Proveri ako je datum juče
  const yesterday = new Date(now);
  yesterday.setDate(now.getDate() - 1);
  if (yesterday.toDateString() === date.toDateString()) {
    return "Jučer";
  }

  // Proveri ako je datum u ovoj sedmici
  const startOfWeek = new Date(now);
  startOfWeek.setDate(now.getDate() - now.getDay()); // Prvi dan sedmice
  if (date >= startOfWeek) {
    return "Ove sedmice";
  }

  // Ako nije ni jedan od prethodnih, formatiraj kao mesec dan, godina
  const options = { year: "numeric", month: "short", day: "numeric" };
  return date.toLocaleDateString("en-US", options); // Ispisuje kao "Sep 18, 2024"
}

export function formatMinutes(minutes) {
  const months = Math.floor(minutes / (60 * 24 * 30)); // Broj meseci
  const remainingMinutesAfterMonths = minutes % (60 * 24 * 30);

  const days = Math.floor(remainingMinutesAfterMonths / (60 * 24)); // Broj dana
  const remainingMinutesAfterDays = remainingMinutesAfterMonths % (60 * 24);

  const hours = Math.floor(remainingMinutesAfterDays / 60); // Broj sati
  const remainingMinutes = remainingMinutesAfterDays % 60; // Preostali minuti

  return {
    months,
    days,
    hours,
    minutes: remainingMinutes,
  };
}


