import ListeningMaterial from "@/features/listening-material/ListeningMaterial"
import { Title } from "@solidjs/meta"

export default function page() {
  return (
    <>
      <Title>Nihongo Ninja - Listening Material</Title>
      <div class="px-12 pb-28 sm:px-16 md:px-24">
        <ListeningMaterial />
      </div>
    </>
  )
}
