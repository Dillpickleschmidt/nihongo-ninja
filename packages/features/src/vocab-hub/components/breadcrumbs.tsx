import { ChevronRight } from "lucide-react";
import { Fragment } from "react";

import type { BreadcrumbItem } from "../utils/navigation";

export function FolderBreadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  if (items.length <= 1) return null;

  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex flex-wrap items-center gap-1.5 text-sm text-muted-foreground">
        {items.map((item, index) => (
          <Fragment key={item.href}>
            <li>
              {item.current ? (
                <span className="text-foreground">{item.label}</span>
              ) : (
                <a href={item.href} className="transition-colors hover:text-foreground">
                  {item.label}
                </a>
              )}
            </li>
            {index < items.length - 1 && (
              <li aria-hidden>
                <ChevronRight className="size-3.5" />
              </li>
            )}
          </Fragment>
        ))}
      </ol>
    </nav>
  );
}
