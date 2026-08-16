import {
  external_resources,
  getExternalResourceLink,
  type ExternalResource,
} from "@nn/data/external_resources";
import { getThumbnailUrl } from "@nn/data/utils/thumbnails";
import { cn } from "@nn/ui";

const DIFFICULTY_COLORS: Record<string, string> = {
  easy: "bg-green-500",
  medium: "bg-yellow-500",
  hard: "bg-red-500",
};

const RESOURCE_ICONS: Record<string, string> = {
  video: "📹",
  "listening-material": "👂",
};

function truncate(text: string, maxLength: number) {
  return text.length > maxLength ? `${text.substring(0, maxLength)}...` : text;
}

function ExternalResourceCard({
  resourceId,
  resource,
}: {
  resourceId: string;
  resource: ExternalResource;
}) {
  const thumbnailUrl = getThumbnailUrl(resource.external_url);
  const link = getExternalResourceLink(resourceId);

  return (
    <a
      href={link.to}
      className="relative block overflow-hidden rounded-[14px] p-3.5 shadow-lg shadow-black transition-opacity hover:opacity-80"
      style={{ width: 160, height: 105 }}
    >
      {thumbnailUrl === null ? null : (
        <div
          className="absolute inset-0 -z-2 scale-[135%] opacity-45"
          style={{
            backgroundImage: `url(${thumbnailUrl})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />
      )}

      <div className="absolute inset-0 -z-1 bg-gradient-to-b from-transparent to-black/35 dark:to-black/45" />

      <div className="relative z-10 flex h-full flex-col justify-between">
        <div className="flex items-start justify-between">
          <span className="text-xl leading-4 drop-shadow-md">
            {RESOURCE_ICONS[resource.module_type] ?? "📎"}
          </span>
          <div
            className={`h-3 w-3 rounded-full drop-shadow-sm ${
              DIFFICULTY_COLORS[resource.difficulty_rating] ?? "bg-gray-500"
            }`}
          />
        </div>
        <div>
          <div className="font-outfit text-[13px] leading-tight font-semibold text-white drop-shadow-sm">
            {truncate(resource.title, 35)}
          </div>
          <div className="pt-[5px] text-[11px] leading-none text-muted-foreground capitalize drop-shadow-sm">
            {resource.module_type.replace("-", " ")}
          </div>
        </div>
      </div>
    </a>
  );
}

export function ExternalResourcesSection({
  externalResourceIds,
}: {
  externalResourceIds: string[];
}) {
  const count = externalResourceIds.length;
  if (count === 0) return null;

  return (
    <div className="w-0 min-w-full overflow-x-auto">
      <div
        className={cn("flex w-max gap-4 pb-2", count < 3 && "ml-auto", count === 3 && "md:ml-auto")}
      >
        {externalResourceIds.map((id) => {
          const resource = external_resources[id];
          if (!resource) return null;
          return <ExternalResourceCard key={id} resourceId={id} resource={resource} />;
        })}
      </div>
    </div>
  );
}
