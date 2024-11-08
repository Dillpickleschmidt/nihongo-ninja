import VocabList from "@/features/vocab-list/VocabList"
import { Title } from "@solidjs/meta"

export default function page() {
  return (
    <>
      <Title>Nihongo Ninja - Vocab List</Title>
      <div class="container mx-auto !max-w-[1100px] px-4 py-32">
        <VocabList />
      </div>
    </>
  )
}
