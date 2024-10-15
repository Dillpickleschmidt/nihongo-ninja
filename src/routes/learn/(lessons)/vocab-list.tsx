import VocabList from "@/features/vocab-list/VocabList"
import { Title } from "@solidjs/meta"

export default function page() {
  return (
    <>
      <Title>Nihongo Ninja - Vocab List</Title>
      <div class="px-12 pb-28 sm:px-16 md:px-24">
        <VocabList />
      </div>
    </>
  )
}
