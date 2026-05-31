"use client";

import { useEffect } from "react";

export default function Redirect({ to }: { to: string }) {
  useEffect(() => {
    window.location.replace(to);
  }, [to]);
  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-black text-black dark:text-white">
      <p className="text-gray-600 dark:text-gray-400">Redirecting...</p>
    </div>
  );
}
