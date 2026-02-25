export default function Footer() {
    return (
      <footer className="bg-stone-50 border-t border-stone-200 py-12 mt-20">
        <div className="container mx-auto px-4 text-center">
          <p className="font-serif text-lg text-stone-900 mb-4">Aura Jewels</p>
          <p className="text-stone-500 text-sm">
            © {new Date().getFullYear()} Aura Jewels. Timeless elegance for every occasion.
          </p>
        </div>
      </footer>
    );
  }
