import Link from "next/link";
import { FiArrowLeft } from "react-icons/fi";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center space-y-6 xxxl:space-y-8">
        <p className="text-xs xxxl:text-[15px] font-mono text-teal tracking-widest uppercase">
          404
        </p>
        <h1 className="font-display text-display-xl xxxl:text-display-xxl text-white font-bold">
          Page not found
        </h1>
        <p className="text-slate max-w-sm xxxl:max-w-md xxxl:text-lg mx-auto">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 xxxl:gap-3 px-5 py-2.5 xxxl:px-6 xxxl-py-3.5 rounded-xl bg-teal text-ink text-sm xxxl:text-[17px] font-semibold hover:bg-teal-glow transition-all duration-200"
        >
          <FiArrowLeft className="text-[15px] xxxl:text-[18px]" />
          Back to Home
        </Link>
      </div>
    </div>
  );
}
