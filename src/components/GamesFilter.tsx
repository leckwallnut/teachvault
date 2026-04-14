"use client";

import { useState, useMemo } from "react";
import type { GameEntry } from "@/data/games";
import GameCard from "@/components/GameCard";

interface FilterSectionProps {
  title: string;
  options: string[];
  selected: string[];
  onToggle: (val: string) => void;
}

function FilterSection({ title, options, selected, onToggle }: FilterSectionProps) {
  const [open, setOpen] = useState(true);
  return (
    <div className="border-b border-charcoal-700 pb-4">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between text-sm font-semibold text-charcoal-200 hover:text-teal-400 transition-colors"
      >
        {title}
        <svg
          className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {open && (
        <div className="mt-3 flex flex-col gap-2">
          {options.map((opt) => (
            <label key={opt} className="flex items-center gap-2 cursor-pointer group">
              <input
                type="checkbox"
                checked={selected.includes(opt)}
                onChange={() => onToggle(opt)}
                className="h-4 w-4 rounded border-charcoal-600 bg-charcoal-800 text-teal-500 focus:ring-teal-500 focus:ring-offset-0"
              />
              <span className="text-sm text-charcoal-400 group-hover:text-charcoal-200 transition-colors">
                {opt}
              </span>
            </label>
          ))}
        </div>
      )}
    </div>
  );
}

interface GamesFilterProps {
  games: GameEntry[];
  allSubjects: string[];
  allLevels: string[];
  allTypes: string[];
}

export default function GamesFilter({ games, allSubjects, allLevels, allTypes }: GamesFilterProps) {
  const [search, setSearch] = useState("");
  const [subjects, setSubjects] = useState<string[]>([]);
  const [levels, setLevels] = useState<string[]>([]);
  const [types, setTypes] = useState<string[]>([]);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggle = (arr: string[], val: string, setter: (v: string[]) => void) => {
    setter(arr.includes(val) ? arr.filter((x) => x !== val) : [...arr, val]);
  };

  const filtered = useMemo(() => {
    return games.filter((g) => {
      if (search && !g.title.toLowerCase().includes(search.toLowerCase()) && !g.shortDescription.toLowerCase().includes(search.toLowerCase())) return false;
      if (subjects.length && !g.tags.subjects.some((s) => subjects.includes(s))) return false;
      if (levels.length && !g.tags.proficiencyLevels.some((l) => levels.includes(l))) return false;
      if (types.length && !g.tags.gameTypes.some((t) => types.includes(t))) return false;
      return true;
    });
  }, [games, search, subjects, levels, types]);

  const activeFilterCount = subjects.length + levels.length + types.length;

  return (
    <div className="flex gap-8">
      {/* Mobile filter toggle */}
      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-teal-600 text-white shadow-lg lg:hidden hover:bg-teal-500 transition-colors"
      >
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
        </svg>
        {activeFilterCount > 0 && (
          <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs font-bold">
            {activeFilterCount}
          </span>
        )}
      </button>

      {/* Sidebar */}
      <aside
        className={`${sidebarOpen ? "fixed inset-0 z-50 bg-charcoal-950/90 lg:relative lg:bg-transparent" : "hidden lg:block"} w-full lg:w-64 flex-shrink-0`}
      >
        <div className={`${sidebarOpen ? "absolute right-0 top-0 h-full w-80 bg-charcoal-900 p-6 overflow-y-auto" : ""} lg:sticky lg:top-24 space-y-5`}>
          {sidebarOpen && (
            <div className="flex items-center justify-between lg:hidden mb-4">
              <h3 className="font-display text-lg text-charcoal-100">Filters</h3>
              <button onClick={() => setSidebarOpen(false)} className="text-charcoal-400 hover:text-white">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          )}
          <FilterSection title="Subject" options={allSubjects} selected={subjects} onToggle={(v) => toggle(subjects, v, setSubjects)} />
          <FilterSection title="Proficiency Level" options={allLevels} selected={levels} onToggle={(v) => toggle(levels, v, setLevels)} />
          <FilterSection title="Game Type" options={allTypes} selected={types} onToggle={(v) => toggle(types, v, setTypes)} />
          {activeFilterCount > 0 && (
            <button
              onClick={() => { setSubjects([]); setLevels([]); setTypes([]); }}
              className="text-sm text-teal-400 hover:text-teal-300 transition-colors"
            >
              Clear all filters
            </button>
          )}
        </div>
      </aside>

      {/* Main content */}
      <div className="flex-1 min-w-0">
        {/* Search bar */}
        <div className="relative mb-8">
          <svg className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-charcoal-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            type="text"
            placeholder="Search games..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-xl border border-charcoal-700 bg-charcoal-800 py-3 pl-12 pr-4 text-sm text-charcoal-100 placeholder-charcoal-500 transition-colors focus:border-teal-600 focus:outline-none focus:ring-1 focus:ring-teal-600"
          />
        </div>

        {/* Results count */}
        <p className="mb-6 text-sm text-charcoal-500">
          {filtered.length} game{filtered.length !== 1 ? "s" : ""} found
        </p>

        {/* Game grid */}
        {filtered.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {filtered.map((game) => (
              <GameCard key={game.slug} game={game} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <span className="text-4xl mb-4">🔍</span>
            <p className="text-charcoal-400">No games match your filters.</p>
            <button
              onClick={() => { setSearch(""); setSubjects([]); setLevels([]); setTypes([]); }}
              className="mt-3 text-sm text-teal-400 hover:text-teal-300 transition-colors"
            >
              Clear all filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
