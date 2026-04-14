import Link from "next/link";
import { getFeaturedGames, games } from "@/data/games";
import GameCard from "@/components/GameCard";

export default function HomePage() {
  const featured = getFeaturedGames();

  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-0 h-[600px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-teal-900/20 blur-3xl" />
          <div className="absolute right-0 top-1/2 h-[400px] w-[400px] rounded-full bg-slate_blue-900/20 blur-3xl" />
        </div>

        <div className="mx-auto max-w-7xl px-6 py-24 lg:py-32">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="font-display text-4xl leading-tight text-charcoal-50 sm:text-5xl lg:text-6xl">
              Interactive Game Templates{" "}
              <span className="text-teal-400">for Language Teachers</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-charcoal-400 sm:text-xl">
              Discover ready-to-use classroom games with pedagogical guidance,
              instructional videos, and AI-powered customisation. Launch any game
              in one click.
            </p>
            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link
                href="/games"
                className="inline-flex items-center gap-2 rounded-xl bg-teal-600 px-8 py-3.5 text-sm font-semibold text-white transition-all hover:bg-teal-500 hover:shadow-lg hover:shadow-teal-600/25 active:scale-95"
              >
                Browse All Games
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Games */}
      {featured.length > 0 && (
        <section className="mx-auto max-w-7xl px-6 py-16">
          <div className="mb-10 flex items-end justify-between">
            <div>
              <h2 className="font-display text-2xl text-charcoal-100 sm:text-3xl">
                Featured Games
              </h2>
              <p className="mt-2 text-charcoal-500">
                Hand-picked templates to get you started
              </p>
            </div>
            <Link
              href="/games"
              className="hidden text-sm font-medium text-teal-400 transition-colors hover:text-teal-300 sm:block"
            >
              View all →
            </Link>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((game) => (
              <GameCard key={game.slug} game={game} />
            ))}
          </div>
        </section>
      )}

      {/* Why Web Games Section */}
      <section className="border-t border-charcoal-800 bg-charcoal-950/50">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-2xl text-charcoal-100 sm:text-3xl">
              Why Web-Based Games?
            </h2>
            <p className="mt-4 text-charcoal-400 leading-relaxed">
              No downloads, no installations, no PowerPoint headaches. These
              games run in any browser, on any device. Share a link and your
              whole class is playing in seconds.
            </p>
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-3">
            {[
              {
                icon: "⚡",
                title: "Instant Launch",
                desc: "One click to launch. No setup, no login, no friction.",
              },
              {
                icon: "🎨",
                title: "AI-Customisable",
                desc: "Use built-in prompts to generate game content tailored to your class.",
              },
              {
                icon: "📱",
                title: "Any Device",
                desc: "Works on phones, tablets, laptops, and classroom projectors.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-charcoal-700 bg-charcoal-900 p-6 transition-colors hover:border-charcoal-600"
              >
                <span className="text-3xl">{item.icon}</span>
                <h3 className="mt-4 font-display text-lg text-charcoal-100">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-charcoal-400">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Browse All CTA */}
      <section className="mx-auto max-w-7xl px-6 py-16 text-center">
        <h2 className="font-display text-2xl text-charcoal-100">
          Ready to explore?
        </h2>
        <p className="mt-3 text-charcoal-400">
          {games.length} game{games.length !== 1 ? "s" : ""} and growing.
        </p>
        <Link
          href="/games"
          className="mt-6 inline-flex items-center gap-2 rounded-xl bg-teal-600 px-8 py-3.5 text-sm font-semibold text-white transition-all hover:bg-teal-500 hover:shadow-lg hover:shadow-teal-600/25 active:scale-95"
        >
          Browse All Games
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </section>
    </div>
  );
}
