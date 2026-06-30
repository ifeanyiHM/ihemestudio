import Link from "next/link";
import { FiArrowLeft } from "react-icons/fi";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center space-y-6">
        <p className="text-xs font-mono text-teal tracking-widest uppercase">404</p>
        <h1 className="font-display text-display-xl text-white font-bold">Page not found</h1>
        <p className="text-slate max-w-sm mx-auto">The page you&apos;re looking for doesn&apos;t exist or has been moved.</p>
        <Link href="/" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-teal text-ink text-sm font-semibold hover:bg-teal-glow transition-all duration-200">
          <FiArrowLeft size={15} />Back to Home
        </Link>
      </div>
    </div>
  );
}
