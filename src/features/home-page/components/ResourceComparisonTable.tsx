// ResourceComparisonSection.tsx
import { resources, metricLabels } from "../data/resourcesData"
import type {
  FlexibleMetric,
  Resource,
  StarRatingMetric,
} from "../data/resourcesData"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import { Info } from "lucide-solid"
import { X } from "lucide-solid"

const StarRating = ({ value }: { value: number }) => {
  if (value === 0) {
    return (
      <div class="flex h-8 items-center">
        <span class="font-medium">-</span>
      </div>
    )
  }

  return (
    <div class="flex h-8 items-center gap-1">
      {[...Array(5)].map((_, index) => (
        <img
          src={`/icons/${index < value ? "star_filled" : "star_outline"}.png`}
          alt={index < value ? "Filled Star" : "Empty Star"}
          class="h-4 w-4"
        />
      ))}
    </div>
  )
}

const MetricCell = ({
  metric,
}: {
  metric: StarRatingMetric | FlexibleMetric
}) => {
  if (metric.type === "stars") {
    return <StarRating value={metric.value} />
  }

  if (!metric.note) {
    return <div class="flex h-8 items-center">{metric.content}</div>
  }

  return (
    <HoverCard>
      <div class="flex h-8 items-center gap-1.5">
        <HoverCardTrigger class="flex items-center hover:text-primary">
          {metric.content}
        </HoverCardTrigger>
        <HoverCardTrigger class="flex text-muted-foreground hover:text-primary">
          <Info class="h-4 w-4 opacity-50" />
        </HoverCardTrigger>
        <HoverCardContent>
          <p class="text-sm">{metric.note}</p>
        </HoverCardContent>
      </div>
    </HoverCard>
  )
}

const LabelColumn = () => (
  <div class="rounded-l-xl border-2 border-black bg-gradient-to-b from-blue-500/20 to-purple-500/20 px-4 py-8 shadow-lg backdrop-blur-sm sm:px-8">
    <h3 class="mb-5 h-[28px] text-nowrap text-center text-xl font-medium text-primary/90 dark:text-[#BBBBBB]">
      Compare Resources
    </h3>
    <ul class="flex flex-col gap-4 text-nowrap font-medium text-primary/80">
      {metricLabels.map((label) => (
        <li class="flex h-8 items-center">{label}</li>
      ))}
    </ul>
  </div>
)

const ResourceColumn = (props: { resource: Resource; isFirst?: boolean }) => {
  const { resource, isFirst } = props
  const metrics = Object.values(resource.metrics)

  return (
    <div
      class={`px-6 py-8 ${
        isFirst
          ? "rounded-r-xl border-y-2 border-r-2 border-black bg-gradient-to-b from-blue-500/15 to-purple-500/15 text-primary/80 shadow-lg backdrop-blur-sm"
          : "min-w-40"
      }`}
    >
      <h3
        class={`mb-5 h-[28px] text-nowrap text-center text-xl font-medium ${
          isFirst ? "text-violet-400" : "text-primary/90 dark:text-[#BBBBBB]"
        }`}
      >
        {resource.name}
      </h3>
      <ul class="flex flex-col gap-4 text-nowrap font-medium text-primary/80">
        {metrics.map((metric) => (
          <li class="flex justify-center">
            <MetricCell metric={metric} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function ResourceComparisonTable() {
  return (
    <div class="mx-auto max-w-[1450px]">
      <div class="flex w-full">
        <LabelColumn />
        <div class="flex w-full overflow-x-auto rounded-r-xl">
          {resources.map((resource, index) => (
            <ResourceColumn resource={resource} isFirst={index === 0} />
          ))}
        </div>
      </div>
    </div>
  )
}
