import { formatMnemonic } from "../utils/card-display";

export function MnemonicDisplay({ mnemonic }: { mnemonic: string | null | undefined }) {
  if (!mnemonic) return null;

  return (
    <div className="w-full max-w-lg rounded-lg bg-card/60 p-4 dark:bg-white/5">
      <h4 className="mb-2 text-xs font-semibold tracking-wide text-muted-foreground uppercase dark:text-white/40">
        Mnemonic
      </h4>
      <p
        className="text-sm leading-relaxed text-foreground/70 dark:text-white/70"
        dangerouslySetInnerHTML={{ __html: formatMnemonic(mnemonic) }}
      />
    </div>
  );
}
