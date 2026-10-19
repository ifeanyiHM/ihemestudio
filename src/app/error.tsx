"use client";
import { useEffect } from "react";
import Link from "next/link";
import { FiRefreshCw, FiArrowLeft } from "react-icons/fi";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);
  return (
    <div className="min-h-screen flex items-center justify-center px-6 xxxl:px-8 xl3:px-10 xl4:px-12">
      <div className="text-center space-y-6 max-w-md xxxl:max-w-lg">
        <p className="text-meta mb-1">Something went wrong</p>
        <h1 className="font-display text-display-lg xxxl:text-display-xl xl3:text-display-xxl xl4:text-[4.5rem] text-white font-bold">
          Unexpected error
        </h1>
        <p className="text-body max-w-xl mx-auto">
          An unexpected error occurred. You can try refreshing or return to the
          homepage.
        </p>
        <div className="row-inline-sm justify-center flex-wrap">
          <button
            onClick={reset}
            className="inline-flex items-center gap-2 px-5 py-2.5 xxxl:px-6 xxxl:py-3 xl3:px-7 xl3:py-3.5 xl4:px-8 xl4:py-4 rounded-xl bg-teal text-ink text-sm xxxl:text-[17px] xl3:text-[17.5px] xl4:text-[18px] font-semibold hover:bg-teal-glow transition-all duration-200"
          >
            <FiRefreshCw size={14} />
            Try Again
          </button>
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-5 py-2.5 xxxl:px-6 xxxl:py-3 xl3:px-7 xl3:py-3.5 xl4:px-8 xl4:py-4 rounded-xl bg-white/[0.06] border border-white/10 text-white text-sm xxxl:text-[17px] xl3:text-[17.5px] xl4:text-[18px] hover:bg-white/10 transition-all duration-200"
          >
            <FiArrowLeft size={14} />
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
