export interface GameEntry {
  slug: string;
  title: string;
  shortDescription: string;
  thumbnail: string;
  videoUrl: string;
  launchUrl: string;
  pedagogyNotes: string;
  customisationPrompt: string;
  featured?: boolean;
  tags: {
    subjects: string[];
    proficiencyLevels: string[];
    gameTypes: string[];
  };
}

export const games: GameEntry[] = [
  {
    slug: "family-feud",
    title: "Family Feud",
    shortDescription:
      "A team-based survey game where students compete to name the most popular answers to survey questions.",
    thumbnail: "/images/games/family-feud.png",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    launchUrl: "#",
    pedagogyNotes:
      "Best for communicative speaking practice and building class energy. Works well as a mid-unit review or end-of-unit celebration activity. Encourages peer discussion and negotiation of meaning.\n\n**When to use:** Mid-unit review, end-of-unit celebrations, first-day icebreakers, or whenever the class energy needs a boost.\n\n**Best for:** Speaking fluency, vocabulary review, collaborative reasoning.\n\n**Recommended levels:** A2–B2. Lower levels benefit from simpler survey categories; higher levels can handle open-ended or abstract prompts.",
    customisationPrompt: `You are an expert English language teacher designing a Family Feud-style classroom game. Create a set of 5 survey-style questions appropriate for [LEVEL] students studying [TOPIC]. Each question should have 5–8 ranked answers based on likely student responses. Format the output as a JSON array where each item has a "question" field and an "answers" array of objects with "text" and "points" fields. Points should range from 50 (most popular) to 5 (least popular). Make the questions fun, culturally appropriate, and pedagogically relevant.`,
    featured: true,
    tags: {
      subjects: ["English", "General"],
      proficiencyLevels: ["A2", "B1", "B2"],
      gameTypes: ["Team Competition", "Speaking", "Vocabulary Review"],
    },
  },
];

export function getGameBySlug(slug: string): GameEntry | undefined {
  return games.find((g) => g.slug === slug);
}

export function getFeaturedGames(): GameEntry[] {
  return games.filter((g) => g.featured);
}

export function getAllSubjects(): string[] {
  const set = new Set<string>();
  games.forEach((g) => g.tags.subjects.forEach((s) => set.add(s)));
  return Array.from(set).sort();
}

export function getAllProficiencyLevels(): string[] {
  return ["A1", "A2", "B1", "B2", "C1", "C2"];
}

export function getAllGameTypes(): string[] {
  const set = new Set<string>();
  games.forEach((g) => g.tags.gameTypes.forEach((t) => set.add(t)));
  return Array.from(set).sort();
}
