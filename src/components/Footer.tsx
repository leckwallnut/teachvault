export default function Footer() {
  return (
    <footer className="border-t border-charcoal-700 bg-charcoal-950 mt-auto">
      <div className="mx-auto max-w-7xl px-6 py-8">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <div className="flex items-center gap-2">
            <span className="text-lg">🎮</span>
            <span className="font-display text-lg text-charcoal-400">
              TeachVault
            </span>
          </div>
          <p className="text-sm text-charcoal-500">
            Interactive game templates for language teachers
          </p>
        </div>
      </div>
    </footer>
  );
}
