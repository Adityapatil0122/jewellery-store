'use client';

import { Share2, Check, Copy, Facebook, Twitter, Smartphone } from 'lucide-react';
import { useState } from 'react';

interface ShareButtonProps {
  title: string;
  text: string;
  url: string;
}

export default function ShareButton({ title, text, url }: ShareButtonProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title,
          text,
          url,
        });
      } catch (error) {
        console.error('Error sharing:', error);
      }
    } else {
      setIsOpen(!isOpen);
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const shareToWhatsapp = () => {
    window.open(`https://wa.me/?text=${encodeURIComponent(`${text} ${url}`)}`, '_blank');
  };

  return (
    <div className="relative">
      <button
        onClick={handleShare}
        className="flex items-center justify-center gap-2 w-full px-6 py-3 bg-stone-900 text-white rounded-full hover:bg-stone-800 transition-colors font-medium"
      >
        <Share2 className="w-4 h-4" />
        Share this Piece
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-2 p-4 bg-white rounded-xl shadow-xl border border-stone-100 z-50 animate-in fade-in zoom-in-95 duration-200">
          <div className="grid grid-cols-2 gap-2 mb-3">
             <button
              onClick={shareToWhatsapp}
              className="flex items-center justify-center gap-2 p-2 rounded-lg bg-green-50 text-green-700 hover:bg-green-100 transition-colors"
            >
              <Smartphone className="w-4 h-4" />
              <span className="text-xs font-medium">WhatsApp</span>
            </button>
            <button
              onClick={copyToClipboard}
              className="flex items-center justify-center gap-2 p-2 rounded-lg bg-stone-50 text-stone-700 hover:bg-stone-100 transition-colors"
            >
              {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              <span className="text-xs font-medium">{copied ? 'Copied' : 'Copy Link'}</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
