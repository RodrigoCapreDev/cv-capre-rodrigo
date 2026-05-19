export default function CenteredLayout({ children }) {
  return (
    <div className="min-h-screen bg-background text-text">
      <div className="mx-auto max-w-4xl px-6 md:px-8 py-8">
        {children}
      </div>
    </div>
  );
}