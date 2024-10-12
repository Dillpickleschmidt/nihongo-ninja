type KikusasaizuProps = {
  src: string
}

export default function Kikusasaizu({ src }: KikusasaizuProps) {
  return (
    <div>
      <iframe
        src={src}
        allowfullscreen
        title="L3-1 Summary"
        class="aspect-video w-full"
      />
      <script src="https://h5p.cee.sfu.ca/sites/all/modules/h5p/library/js/h5p-resizer.js" />
    </div>
  )
}
