export interface GrandPrix {
  id: string;
  round: number;
  name: string;
  country: string;
  circuitName: string;
  startDate: string;
  endDate: string;
  status: "upcoming" | "live" | "finished";
  image?: string;
}

export interface Prediction {
  id?: string;
  userId: string;
  grandPrixId: string;
  pole: string | null;
  podium: string[]; // [P1,P2,P3]
  fastestLap?: string | null;
  surprise?: string | null;
  lockedPole: boolean;
  lockedRace: boolean;
  createdAt?: string;
  updatedAt?: string;
}

export interface UserProfile {
  id: string;
  displayName: string;
  email: string;
  country?: string;
  avatarUrl?: string;
  stats?: {
    totalPoints: number;
    podiumHits: number;
    poleHits: number;
  };
  badges?: string[];
}

export interface LeaderboardEntry {
  userId: string;
  displayName: string;
  points: number;
  rank: number;
  avatarUrl?: string;
}

export interface QuizQuestion {
  id: string;
  question: string;
  difficulty: "easy" | "medium" | "hard";
  answers: string[];
  correctIndex?: number; // server side
}