import Link from 'next/link';
import { ShoppingBag } from 'lucide-react';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-stone-200 bg-white/80 backdrop-blur-xl">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <ShoppingBag className="h-6 w-6 text-stone-800" />
          <span className="font-serif text-xl font-medium tracking-tight text-stone-900">
            Aura Jewels
          </span>
        </Link>
        <nav className="flex items-center gap-6">
          <Link href="/" className="text-sm font-medium text-stone-600 hover:text-stone-900 transition-colors">
            Collections
          </Link>
          <Link href="/" className="text-sm font-medium text-stone-600 hover:text-stone-900 transition-colors">
            About
          </Link>
          <Link href="/" className="text-sm font-medium text-stone-600 hover:text-stone-900 transition-colors">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
