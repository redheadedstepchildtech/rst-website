export default function Footer() {
  return (
    <footer className="mt-20 border-t border-gray-300 bg-white">
      <div className="max-w-6xl mx-auto px-6 py-10 text-center text-gray-700">

        {/* Links */}
        <div className="flex justify-center gap-8 mb-6 text-sm font-medium">
          <a href="/about" className="hover:text-red-700 transition">About</a>
          <a href="/products" className="hover:text-red-700 transition">Products</a>
          <a href="/contact" className="hover:text-red-700 transition">Contact</a>
        </div>

        {/* Phone */}
        <p className="text-sm mb-2">
          <span className="font-semibold text-red-700">(406) 437-2008</span>
        </p>

        {/* Tagline */}
        <p className="text-sm mb-2 text-gray-600">
          A Redheaded Stepchild Tech Project
        </p>

        {/* Copyright */}
        <p className="text-xs text-gray-500">
          © 2026 Redheaded Stepchild Tech™ • All Rights Reserved
        </p>
      </div>
    </footer>
  );
}
