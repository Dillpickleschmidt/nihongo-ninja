import { VocabProvider } from "../context";
import { CenterNavBar } from "./center-nav-bar";
import { VocabRightPanel } from "./vocab-right-panel";

export function VocabHubShell({
  showPanel,
  children,
}: {
  showPanel: boolean;
  children: React.ReactNode;
}) {
  return (
    <VocabProvider>
      <div className={`px-4 pb-16 ${showPanel ? "md:pr-80" : ""}`}>
        <CenterNavBar />
        {children}
      </div>

      {showPanel && (
        <div className="fixed top-0 right-0 hidden w-80! border-l border-border/50 bg-card/70 py-4 pl-4 backdrop-blur-sm md:block md:h-[calc(100vh-4rem)] dark:bg-card/30">
          <VocabRightPanel />
        </div>
      )}
    </VocabProvider>
  );
}
