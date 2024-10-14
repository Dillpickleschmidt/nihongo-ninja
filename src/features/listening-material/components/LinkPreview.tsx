import { A } from "@solidjs/router"

type LinkComponentProps = {
  title: string
  href: string
  src: string
  alt: string
  external?: boolean
}

export default function LinkPreview({
  title,
  href,
  src,
  alt,
  external = false,
}: LinkComponentProps) {
  return (
    <div>
      <h2 class="mb-4 text-center text-3xl font-semibold">{title}</h2>
      {external ? (
        <a target="_blank" href={href}>
          <div
            class="overflow-hidden rounded-md duration-200 hover:scale-[0.99] hover:opacity-85"
            style={{ "aspect-ratio": 3 / 2 }}
          >
            <img src={src} alt={alt} class="h-full w-full object-cover" />
          </div>
        </a>
      ) : (
        <A href={href}>
          <div
            class="overflow-hidden rounded-md duration-200 hover:scale-[0.99] hover:opacity-85"
            style={{ "aspect-ratio": 3 / 2 }}
          >
            <img src={src} alt={alt} class="h-full w-full object-cover" />
          </div>
        </A>
      )}
    </div>
  )
}
