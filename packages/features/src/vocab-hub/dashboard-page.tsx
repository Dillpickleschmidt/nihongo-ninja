import { VocabDashboard } from "./pages/vocab-dashboard";

export default function VocabDashboardPage({ chapter }: { chapter?: string }) {
  return <VocabDashboard chapterFromUrl={chapter} />;
}
