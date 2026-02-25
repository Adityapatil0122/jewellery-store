import ProductCard from '@/components/ProductCard';
import { products } from '@/lib/data';

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-20">
      <div className="text-center mb-16 space-y-4">
        <span className="text-xs font-semibold tracking-widest text-stone-500 uppercase">
          New Collection
        </span>
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium text-stone-900 tracking-tight">
          Timeless Elegance
        </h1>
        <p className="max-w-2xl mx-auto text-stone-600 text-lg md:text-xl leading-relaxed">
          Explore our curated selection of handcrafted jewelry, designed to capture the beauty of every moment.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
