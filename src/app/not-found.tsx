import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-neutral-50 to-sage-50">
      <div className="text-center space-y-6 max-w-md mx-auto px-4">
        <div className="space-y-4">
          <h1 className="text-6xl font-display font-bold text-primary-600">404</h1>
          <h2 className="text-2xl font-display font-semibold text-neutral-900">
            Page Not Found
          </h2>
          <p className="text-neutral-600">
            Sorry, we couldn&apos;t find the page you&apos;re looking for.
          </p>
        </div>
        
        <Link 
          href="/"
          className="btn-primary inline-block"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}