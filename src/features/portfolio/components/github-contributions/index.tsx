import { unstable_cache } from "next/cache"
import { addQueryParams } from "@/utils/url"
import { eachDayOfInterval, format, formatISO, parseISO } from "date-fns"

import { GITHUB_USERNAME, UTM_PARAMS } from "@/config/site"
import {
  Panel,
  PanelHeader,
  PanelTitle,
} from "@/features/portfolio/components/panel"
import { PanelTitleCopy } from "@/features/portfolio/components/panel-title-copy"

import type { Activity } from "../profile-activity-mosaic-cover/activity-mosaic"
import { GitHubContributionsGraph } from "./graph"

const ID = "github-contributions"

const ROW_COUNT = 7 // days per week (one column = one week)
const CELL_SIZE = 12
const CELL_MARGIN = 3
const CELL_RADIUS = 2

type GitHubContributionsResponse = {
  total: Record<string, number>
  contributions: Activity[]
}

const getGitHubContributions = unstable_cache(
  async (username: string): Promise<GitHubContributionsResponse | null> => {
    try {
      const res = await fetch(
        `${process.env.GITHUB_CONTRIBUTIONS_API_URL}/v4/${username}?y=last`
      )

      if (!res.ok) {
        return null
      }

      return (await res.json()) as GitHubContributionsResponse
    } catch {
      return null
    }
  },
  ["github-contributions", "activity-mosaic"],
  { revalidate: 7 * 24 * 60 * 60 } // Cache for 7 days
)

/**
 * Fills the gaps between the oldest and latest activity so the grid is a
 * continuous run of days, mirroring the logic inside <ActivityMosaic />.
 */
function fillMissingDates(activities: Activity[]): Activity[] {
  if (activities.length === 0) return []

  const sorted = [...activities].sort((a, b) => a.date.localeCompare(b.date))
  const byDate = new Map(activities.map((a) => [a.date, a]))

  return eachDayOfInterval({
    start: parseISO(sorted[0].date),
    end: parseISO(sorted[sorted.length - 1].date),
  }).map((day) => {
    const date = formatISO(day, { representation: "date" })
    return byDate.get(date) ?? { date, count: 0, level: 0 }
  })
}

/** Month label for each column where the month changes. */
function getMonthLabels(activities: Activity[]) {
  const labels: { columnIndex: number; label: string }[] = []
  let lastMonth = -1

  for (
    let columnIndex = 0;
    columnIndex * ROW_COUNT < activities.length;
    columnIndex++
  ) {
    const firstOfColumn = activities[columnIndex * ROW_COUNT]
    if (!firstOfColumn) continue

    const month = parseISO(firstOfColumn.date).getMonth()
    if (month !== lastMonth) {
      labels.push({
        columnIndex,
        label: format(parseISO(firstOfColumn.date), "MMM"),
      })
      lastMonth = month
    }
  }

  // Avoid a cramped label in the very first column right next to the second.
  return labels.filter((label, index) => {
    const next = labels[index + 1]
    return !next || next.columnIndex - label.columnIndex > 1
  })
}

export async function GitHubContributions() {
  const data = await getGitHubContributions(GITHUB_USERNAME)

  if (!data || data.contributions.length === 0) {
    return null
  }

  const { contributions } = data
  const activities = fillMissingDates(contributions)

  const count = contributions.reduce((sum, day) => sum + day.count, 0)
  const columnCount = Math.ceil(activities.length / ROW_COUNT)
  const monthLabels = getMonthLabels(activities)

  const profileUrl = addQueryParams(
    `https://github.com/${GITHUB_USERNAME}`,
    UTM_PARAMS
  )

  return (
    <Panel id={ID}>
      <PanelHeader>
        <PanelTitle>
          <a href={`#${ID}`}>GitHub</a>
          <PanelTitleCopy id={ID} />
        </PanelTitle>
      </PanelHeader>

      <div className="screen-line-bottom p-4">
        <GitHubContributionsGraph
          activities={activities}
          rowCount={ROW_COUNT}
          columnCount={columnCount}
          cellSize={CELL_SIZE}
          cellMargin={CELL_MARGIN}
          cellRadius={CELL_RADIUS}
          monthLabels={monthLabels}
        />
      </div>

      <div className="flex justify-center px-4 py-2 text-sm text-muted-foreground">
        <a
          href={profileUrl}
          target="_blank"
          rel="noopener"
          className="transition-colors hover:text-foreground"
        >
          <span className="font-medium text-foreground tabular-nums">
            {count.toLocaleString()}
          </span>{" "}
          contributions in the last year
        </a>
      </div>
    </Panel>
  )
}
