import Image from 'next/image';
import Link from 'next/link';
import { Product } from '@/lib/types';
import { ArrowRight } from 'lucide-react';

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="group relative bg-white rounded-2xl overflow-hidden border border-stone-100 hover:shadow-xl transition-all duration-300">
      <Link href={`/product/${product.id}`} className="block aspect-[4/5] relative overflow-hidden bg-stone-50">
        <Image
          src={product.images[0]}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
      </Link>

      <div className="p-6">
        <div className="mb-4">
            <p className="text-xs font-medium text-stone-500 uppercase tracking-wider mb-1">
                {product.category}
            </p>
            <Link href={`/product/${product.id}`}>
                <h3 className="font-serif text-lg font-medium text-stone-900 line-clamp-1 hover:text-stone-600 transition-colors">
                    {product.name}
                </h3>
            </Link>
        </div>

        <div className="flex items-center justify-between">
            <p className="text-lg font-medium text-stone-900">
                {product.currency === 'USD' ? '$' : product.currency} {product.price.toLocaleString()}
            </p>
            <Link
                href={`/product/${product.id}`}
                className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-stone-100 text-stone-900 hover:bg-stone-900 hover:text-white transition-all duration-300"
            >
                <ArrowRight className="w-4 h-4" />
            </Link>
        </div>
      </div>
    </div>
  );
}
