export type RoyaleResponse = {
  achievements: Achievement[];
  arena: Arena;
  badges: Badge[];
  battleCount: number;
  bestTrophies: number;
  cards: Card[];
  challengeCardsWon: number;
  challengeMaxWins: string;
  clan: Clan;
  clanCardsCollected: number;
  currentDeck: [Card, Card, Card, Card, Card, Card, Card, Card];
  currentFavouriteCard: Card;
  donations: number;
  donationsReceived: number;
  expLevel: number;
  expPoints: number;
  leagueStatistics: LeagueStatistics;
  losses: number;
  name: string;
  role: "leader" | "co-leader" | "member";
  starPoints: number;
  tag: Tag;
  threeCrownWins: number;
  totalDonations: number;
  tournamentBattleCount: number;
  tournamentCardsWon: number;
  trophies: number;
  warDayWins: number;
  wins: number;
};

export type Tag = `#${string}`;

export type Achievement = {
  name: string;
  stars: number;
  value: number;
  target: number;
  info: string;
  completionInfo?: string;
};

export type Arena = {
  name: string;
  id: number;
};

export type Badge = {
  level?: number;
  maxLevel?: number;
  name: string;
  progress: number;
  target?: number;
};

export type Card = {
  count: number;
  iconUrls: Record<string, string>;
  id: number;
  level: number;
  maxLevel: number;
  name: string;
  starLevel?: number;
};

export type Clan = {
  tag: Tag;
  name: string;
  badgeId: number;
};

export type LeagueStatistics = {
  bestSeason: BestSeason;
  currentSeason: CurrentSeason;
  previousSeason: PreviousSeason;
};

export type BestSeason = {
  id: string;
  rank: number;
  trophies: number;
};

export type CurrentSeason = {
  trophies: number;
};

export type PreviousSeason = {
  id: string;
  trophies: number;
  bestTrophies: number;
};
