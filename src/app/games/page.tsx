import type { Metadata } from "next";
import {
  games,
  getAllSubjects,
  getAllProficiencyLevels,
  getAllGameTypes,
} from "@/data/games";
import GamesFilter from "@/components/GamesFilter";

export const metadata: Metadata = {
  title: "All Games — TeachVault",
  description: "Browse, filter, and search our full library of interactive classroom game templates.",
};

export default function AllGamesPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-12">
      <div className="mb-10">
        <h1 className="font-display text-3xl text-charcoal-50 sm:text-4xl">
          All Games
        </h1>
        <p className="mt-3 text-charcoal-400">
          Browse our library of interactive classroom game templates.
        </p>
      </div>

      <GamesFilter
        games={games}
        allSubjects={getAllSubjects()}
        allLevels={getAllProficiencyLevels()}
        allTypes={getAllGameTypes()}
      />
    </div>
  );
}
