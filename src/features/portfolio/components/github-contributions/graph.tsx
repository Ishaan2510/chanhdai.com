"use client"

import type { Activity } from "../profile-activity-mosaic-cover/activity-mosaic"
import {
  ActivityMosaic,
  ActivityMosaicCell,
  ActivityMosaicGrid,
} from "../profile-activity-mosaic-cover/activity-mosaic"

export type MonthLabel = {
  columnIndex: number
  label: string
}

export function GitHubContributionsGraph({
  activities,
  rowCount,
  columnCount,
  cellSize,
  cellMargin,
  cellRadius,
  monthLabels,
}: {
  activities: Activity[]
  rowCount: number
  columnCount: number
  cellSize: number
  cellMargin: number
  cellRadius: number
  monthLabels: MonthLabel[]
}) {
  const columnWidth = cellSize + cellMargin

  return (
    <div className="mx-auto w-fit max-w-full overflow-x-auto">
      {/* Month labels */}
      <div
        className="relative mb-1 h-4 text-xs text-muted-foreground"
        style={{ width: columnCount * columnWidth - cellMargin }}
        aria-hidden
      >
        {monthLabels.map(({ columnIndex, label }) => (
          <span
            key={`${columnIndex}-${label}`}
            className="absolute top-0 tabular-nums"
            style={{ left: columnIndex * columnWidth }}
          >
            {label}
          </span>
        ))}
      </div>

      <ActivityMosaic
        className="justify-start"
        activities={activities}
        rowCount={rowCount}
        columnCount={columnCount}
        cellSize={cellSize}
        cellMargin={cellMargin}
        cellRadius={cellRadius}
      >
        <ActivityMosaicGrid>
          {({ activity, rowIndex, columnIndex }) => (
            <ActivityMosaicCell
              activity={activity}
              rowIndex={rowIndex}
              columnIndex={columnIndex}
            />
          )}
        </ActivityMosaicGrid>
      </ActivityMosaic>
    </div>
  )
}
