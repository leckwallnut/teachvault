import Link from "next/link";
import type { GameEntry } from "@/data/games";

export default function GameCard({ game }: { game: GameEntry }) {
  return (
    <Link
      href={`/games/${game.slug}`}
      className="group flex flex-col overflow-hidden rounded-xl border border-charcoal-700 bg-charcoal-900 transition-all duration-300 hover:border-teal-600/50 hover:shadow-lg hover:shadow-teal-900/20 hover:-translate-y-1"
    >
      {/* Thumbnail */}
      <div className="relative aspect-video w-full overflow-hidden bg-charcoal-800">
        <div className="flex h-full items-center justify-center text-5xl transition-transform duration-300 group-hover:scale-110">
          🎯
        </div>
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-lg text-charcoal-100 group-hover:text-teal-400 transition-colors">
          {game.title}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-charcoal-400">
          {game.shortDescription}
        </p>

        {/* Tags */}
        <div className="mt-4 flex flex-wrap gap-1.5">
          {game.tags.proficiencyLevels.map((level) => (
            <span
              key={level}
              className="rounded-full bg-teal-900/30 px-2.5 py-0.5 text-xs font-medium text-teal-400"
            >
              {level}
            </span>
          ))}
          {game.tags.gameTypes.slice(0, 2).map((type) => (
            <span
              key={type}
              className="rounded-full bg-slate_blue-900/30 px-2.5 py-0.5 text-xs font-medium text-slate_blue-400"
            >
              {type}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
