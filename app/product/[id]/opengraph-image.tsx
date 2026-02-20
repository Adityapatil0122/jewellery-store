import { ImageResponse } from 'next/og';
import { products } from '@/lib/data';

export const runtime = 'edge';

export async function generateImageMetadata({ params }: { params: { id: string } }) {
  return [
    {
      contentType: 'image/png',
      size: { width: 1200, height: 630 },
      id: params.id,
    },
  ];
}

export default async function Image({ params }: { params: { id: string } }) {
  const product = products.find((p) => p.id === params.id);

  if (!product) {
    return new ImageResponse(
      (
        <div
          style={{
            fontSize: 48,
            background: 'white',
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          Product Not Found
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    );
  }

  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          width: '100%',
          height: '100%',
          backgroundColor: '#f5f5f4', // stone-100
          fontFamily: 'serif',
          position: 'relative',
        }}
      >
        <div
          style={{
            display: 'flex',
            width: '50%',
            height: '100%',
            overflow: 'hidden',
          }}
        >
          <img
            src={product.images[0]}
            alt={product.name}
            style={{
              objectFit: 'cover',
              width: '100%',
              height: '100%',
            }}
          />
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            padding: '60px',
            width: '50%',
            backgroundColor: '#ffffff',
          }}
        >
          <div
            style={{
              fontSize: 24,
              color: '#78716c', // stone-500
              textTransform: 'uppercase',
              marginBottom: 20,
              letterSpacing: '0.1em',
            }}
          >
            {product.category}
          </div>
          <div
            style={{
              fontSize: 64,
              color: '#1c1917', // stone-900
              marginBottom: 30,
              lineHeight: 1.1,
              fontWeight: 600,
            }}
          >
            {product.name}
          </div>
          <div
            style={{
              fontSize: 48,
              color: '#1c1917', // stone-900
              fontWeight: 300,
            }}
          >
            {product.currency === 'USD' ? '$' : product.currency} {product.price.toLocaleString()}
          </div>
          <div
            style={{
              position: 'absolute',
              bottom: 40,
              right: 60,
              fontSize: 24,
              color: '#a8a29e', // stone-400
            }}
          >
            aurajewels.com
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
