export type GitHubContributionLevel = 0 | 1 | 2 | 3 | 4;

export interface GitHubContributionDay {
  date: string;
  count: number;
  level: GitHubContributionLevel;
}

export interface GitHubContributionCalendar {
  days: GitHubContributionDay[];
  fetchedAt: Date;
  total: number;
}

const contributionCellPattern =
  /<td\b(?=[^>]*\bclass="[^"]*\bContributionCalendar-day\b[^"]*")(?=[^>]*\bdata-date="([^"]+)")(?=[^>]*\bdata-level="([0-4])")[^>]*>\s*<\/td>\s*<tool-tip\b[^>]*>([^<]*)<\/tool-tip>/g;
const calendarCache = new Map<string, Promise<GitHubContributionCalendar | null>>();

function contributionCountFromLabel(label: string): number | null {
  if (/\bNo contributions?\b/.test(label)) {
    return 0;
  }

  const count = label.match(/\b([\d,]+) contributions?\b/)?.[1];
  if (!count) {
    return null;
  }

  const parsedCount = Number.parseInt(count.replaceAll(',', ''), 10);
  return Number.isFinite(parsedCount) ? parsedCount : null;
}

export function parseGitHubContributions(html: string): GitHubContributionDay[] {
  const daysByDate = new Map<string, GitHubContributionDay>();

  for (const match of html.matchAll(contributionCellPattern)) {
    const [, date, rawLevel, label] = match;
    const count = contributionCountFromLabel(label);
    const level = Number.parseInt(rawLevel, 10);

    if (
      !/^\d{4}-\d{2}-\d{2}$/.test(date) ||
      count === null ||
      level < 0 ||
      level > 4
    ) {
      continue;
    }

    daysByDate.set(date, {
      date,
      count,
      level: level as GitHubContributionLevel,
    });
  }

  return [...daysByDate.values()].sort((a, b) => a.date.localeCompare(b.date));
}

async function fetchGitHubContributions(
  username: string,
): Promise<GitHubContributionCalendar | null> {
  try {
    const response = await fetch(
      `https://github.com/users/${encodeURIComponent(username)}/contributions`,
      {
        headers: {
          Accept: 'text/html',
          'Accept-Language': 'en-US',
          'User-Agent': 'ryoumon.github.io',
        },
        signal: AbortSignal.timeout(8_000),
      },
    );

    if (!response.ok) {
      throw new Error(`GitHub returned HTTP ${response.status}`);
    }

    const days = parseGitHubContributions(await response.text());
    if (days.length < 300) {
      throw new Error(`GitHub returned only ${days.length} contribution days`);
    }

    return {
      days,
      fetchedAt: new Date(),
      total: days.reduce((total, day) => total + day.count, 0),
    };
  } catch (error) {
    console.warn(
      `[github-contributions] Unable to refresh @${username}:`,
      error instanceof Error ? error.message : error,
    );
    return null;
  }
}

export function getGitHubContributions(
  username: string,
): Promise<GitHubContributionCalendar | null> {
  const cachedCalendar = calendarCache.get(username);
  if (cachedCalendar) {
    return cachedCalendar;
  }

  const calendar = fetchGitHubContributions(username);
  calendarCache.set(username, calendar);
  return calendar;
}
