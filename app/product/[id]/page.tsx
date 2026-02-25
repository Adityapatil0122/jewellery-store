import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, Share2 } from 'lucide-react';
import { products } from '@/lib/data';
import { Metadata } from 'next';
import ShareButton from '@/components/ShareButton';

interface Props {
  params: { id: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const product = products.find((p) => p.id === params.id);
  if (!product) return { title: 'Product Not Found' };

  return {
    title: `${product.name} | Aura Jewels`,
    description: product.description,
    openGraph: {
      title: `${product.name} | Aura Jewels`,
      description: product.description,
      images: [product.images[0]],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${product.name} | Aura Jewels`,
      description: product.description,
      images: [product.images[0]],
    },
  };
}

export default function ProductPage({ params }: Props) {
  const product = products.find((p) => p.id === params.id);

  if (!product) {
    notFound();
  }

  // Ensure absolute URL for sharing
  const pageUrl = `${process.env.NEXT_PUBLIC_BASE_URL || 'https://your-domain.com'}/product/${product.id}`;

  return (
    <div className="container mx-auto px-4 py-12 md:py-20">
      <Link
        href="/"
        className="inline-flex items-center text-sm font-medium text-stone-500 hover:text-stone-900 transition-colors mb-8"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Collection
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
        {/* Product Image */}
        <div className="relative aspect-[4/5] bg-stone-100 rounded-2xl overflow-hidden shadow-lg">
          <Image
            src={product.images[0]}
            alt={product.name}
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>

        {/* Product Details */}
        <div className="space-y-8 lg:sticky lg:top-32">
          <div>
            <p className="text-sm font-semibold tracking-widest text-stone-500 uppercase mb-2">
              {product.category}
            </p>
            <h1 className="font-serif text-4xl md:text-5xl font-medium text-stone-900 mb-4 tracking-tight">
              {product.name}
            </h1>
            <p className="text-3xl font-light text-stone-900">
              {product.currency === 'USD' ? '$' : product.currency} {product.price.toLocaleString()}
            </p>
          </div>

          <div className="prose prose-stone text-stone-600 leading-relaxed">
            <p>{product.description}</p>
          </div>

          <div className="pt-8 border-t border-stone-200">
            <h3 className="text-sm font-semibold text-stone-900 uppercase tracking-wide mb-4">
              Share this piece
            </h3>
             <p className="text-stone-500 text-sm mb-6">
                Love this piece? Share it with your friends or save it for later.
            </p>
            <div className="flex gap-4">
                <ShareButton
                    title={`Check out this ${product.name}`}
                    text={`I found this amazing ${product.name} at Aura Jewels!`}
                    url={pageUrl}
                />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
