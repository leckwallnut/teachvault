import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { games, getGameBySlug } from "@/data/games";
import { CopyButton } from "@/components/CopyButton";
import Link from "next/link";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return games.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const game = getGameBySlug(slug);
  if (!game) return {};
  return {
    title: `${game.title} — TeachVault`,
    description: game.shortDescription,
  };
}

export default async function GamePage({ params }: PageProps) {
  const { slug } = await params;
  const game = getGameBySlug(slug);
  if (!game) notFound();

  return (
    <div className="mx-auto max-w-4xl px-6 py-12">
      {/* Breadcrumb */}
      <nav className="mb-8 flex items-center gap-2 text-sm text-charcoal-500">
        <Link href="/games" className="hover:text-teal-400 transition-colors">
          All Games
        </Link>
        <span>/</span>
        <span className="text-charcoal-300">{game.title}</span>
      </nav>

      {/* Hero */}
      <div className="mb-10">
        <h1 className="font-display text-3xl text-charcoal-50 sm:text-4xl lg:text-5xl">
          {game.title}
        </h1>
        <p className="mt-4 text-lg text-charcoal-400 leading-relaxed">
          {game.shortDescription}
        </p>
      </div>

      {/* Launch Button */}
      <div className="mb-12">
        <a
          href={game.launchUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 rounded-xl bg-teal-600 px-8 py-4 text-base font-semibold text-white transition-all hover:bg-teal-500 hover:shadow-lg hover:shadow-teal-600/25 active:scale-95"
        >
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Launch Game
          <svg className="h-4 w-4 opacity-60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      </div>

      {/* Instructional Video */}
      {game.videoUrl && (
        <section className="mb-12">
          <h2 className="font-display text-xl text-charcoal-100 mb-4">
            How to Use This Game
          </h2>
          <div className="relative aspect-video overflow-hidden rounded-xl border border-charcoal-700 bg-charcoal-800">
            <iframe
              src={game.videoUrl}
              title={`${game.title} — How to use`}
              className="absolute inset-0 h-full w-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </section>
      )}

      {/* Pedagogy Notes */}
      <section className="mb-12">
        <h2 className="font-display text-xl text-charcoal-100 mb-4">
          When to Use This Game
        </h2>
        <div className="rounded-xl border border-charcoal-700 bg-charcoal-900 p-6">
          <div className="prose prose-invert max-w-none text-charcoal-300 leading-relaxed whitespace-pre-line">
            {game.pedagogyNotes}
          </div>
        </div>
      </section>

      {/* Customisation Prompt */}
      <section className="mb-12">
        <h2 className="font-display text-xl text-charcoal-100 mb-2">
          Customisation Prompt
        </h2>
        <p className="text-sm text-charcoal-500 mb-4">
          Copy this prompt and paste it into ChatGPT, DeepSeek, Kimi, or Claude
          to generate your own version of this game.
        </p>
        <div className="rounded-xl border border-charcoal-700 bg-charcoal-900 p-6">
          <pre className="whitespace-pre-wrap text-sm text-charcoal-300 leading-relaxed font-body mb-4">
            {game.customisationPrompt}
          </pre>
          <CopyButton text={game.customisationPrompt} />
        </div>
      </section>

      {/* Tags */}
      <section>
        <h2 className="font-display text-xl text-charcoal-100 mb-4">Tags</h2>
        <div className="flex flex-wrap gap-2">
          {game.tags.subjects.map((s) => (
            <span key={s} className="rounded-full bg-charcoal-800 border border-charcoal-700 px-3 py-1 text-sm text-charcoal-300">
              {s}
            </span>
          ))}
          {game.tags.proficiencyLevels.map((l) => (
            <span key={l} className="rounded-full bg-teal-900/30 border border-teal-800/30 px-3 py-1 text-sm text-teal-400">
              {l}
            </span>
          ))}
          {game.tags.gameTypes.map((t) => (
            <span key={t} className="rounded-full bg-slate_blue-900/30 border border-slate_blue-800/30 px-3 py-1 text-sm text-slate_blue-400">
              {t}
            </span>
          ))}
        </div>
      </section>
    </div>
  );
}
