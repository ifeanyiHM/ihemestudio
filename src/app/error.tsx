"use client";
import { useEffect } from "react";
import Link from "next/link";
import { FiRefreshCw, FiArrowLeft } from "react-icons/fi";

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => { console.error(error); }, [error]);
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center space-y-6 max-w-md">
        <p className="text-xs font-mono text-teal tracking-widest uppercase">Something went wrong</p>
        <h1 className="font-display text-display-lg text-white font-bold">Unexpected error</h1>
        <p className="text-slate text-sm leading-relaxed">An unexpected error occurred. You can try refreshing or return to the homepage.</p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <button onClick={reset} className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-teal text-ink text-sm font-semibold hover:bg-teal-glow transition-all duration-200">
            <FiRefreshCw size={14} />Try Again
          </button>
          <Link href="/" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/[0.06] border border-white/10 text-white text-sm hover:bg-white/10 transition-all duration-200">
            <FiArrowLeft size={14} />Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
