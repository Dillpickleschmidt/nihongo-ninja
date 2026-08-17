import { playClickSound } from "../utils/select-sound";
import { Button3D } from "./button-3d";

export type ActionBarState = "check" | "correct" | "wrong" | "idle";

const STATE_COLORS: Record<ActionBarState, string> = {
  check: "rgb(6,182,212)",
  correct: "rgb(16,185,129)",
  wrong: "rgb(244,63,94)",
  idle: "rgb(139,92,246)",
};

const STATE_LABELS: Record<ActionBarState, string> = {
  check: "Check",
  correct: "Next",
  wrong: "Next",
  idle: "Continue",
};

export function PracticeActionBar({
  state,
  onAction,
  canCheck,
  label,
  color,
}: {
  state: ActionBarState;
  onAction: () => void;
  canCheck?: boolean;
  label?: string;
  color?: string;
}) {
  const disabled = state === "check" && canCheck === false;

  return (
    <div className="fixed right-0 bottom-16 left-0 z-30 flex justify-center px-4">
      <div className="w-full max-w-sm sm:w-auto sm:min-w-48">
        <Button3D
          color={color ?? STATE_COLORS[state]}
          disabled={disabled}
          onClick={() => {
            playClickSound();
            onAction();
          }}
        >
          {label ?? STATE_LABELS[state]}
        </Button3D>
      </div>
    </div>
  );
}
