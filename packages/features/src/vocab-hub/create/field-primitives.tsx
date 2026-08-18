import { Minus, Plus } from "lucide-react";

export function Field({
  label,
  value,
  onChange,
  placeholder,
  indicator,
  description,
  title,
  inputClassName,
}: {
  label?: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  indicator?: React.ReactNode;
  description?: string;
  title?: string;
  inputClassName?: string;
}) {
  return (
    <div className="relative flex-1" title={title}>
      {label && <label className="mb-1 block text-sm font-medium">{label}</label>}
      <input
        type="text"
        value={value}
        onChange={(e) => {
          onChange(e.currentTarget.value);
        }}
        placeholder={placeholder}
        className={`h-10 w-full rounded-md border bg-transparent px-3 text-sm outline-none placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring ${inputClassName ?? "border-border dark:border-card-foreground"}`}
      />
      {indicator && (
        <div className="pointer-events-none absolute top-7.5 right-4 text-xs font-medium text-muted-foreground/70 italic">
          {indicator}
        </div>
      )}
      {description && (
        <p className="mt-1 text-xs leading-none font-normal text-muted-foreground">{description}</p>
      )}
    </div>
  );
}

export function RowButtons({
  onRemove,
  onAdd,
  noun,
}: {
  onRemove: () => void;
  onAdd: () => void;
  noun: string;
}) {
  return (
    <div className="flex items-center gap-0.5">
      <button
        type="button"
        className="flex size-8 cursor-pointer items-center justify-center rounded-md hover:bg-accent hover:text-red-500 focus-visible:text-red-500"
        onClick={onRemove}
        aria-label={`Remove ${noun}`}
      >
        <Minus className="size-3" />
      </button>
      <button
        type="button"
        className="flex size-8 cursor-pointer items-center justify-center rounded-md hover:bg-accent hover:text-green-500 focus-visible:text-green-500"
        onClick={onAdd}
        aria-label={`Add ${noun}`}
      >
        <Plus className="size-3" />
      </button>
    </div>
  );
}

export function StringListEditor({
  label,
  noun,
  values,
  placeholder,
  onChange,
  firstRowIndicator,
  allowEmpty,
}: {
  label?: string;
  noun: string;
  values: string[];
  placeholder: string;
  onChange: (values: string[]) => void;
  firstRowIndicator?: React.ReactNode;
  allowEmpty?: boolean;
}) {
  return (
    <div>
      {label && (
        <div className="mb-1.5">
          <span className="text-sm font-medium">{label}</span>
        </div>
      )}
      <div className="space-y-2">
        {values.map((value, i) => (
          <div key={i} className="flex items-center gap-1">
            <Field
              value={value}
              placeholder={placeholder}
              onChange={(next) => {
                onChange(values.map((item, j) => (j === i ? next : item)));
              }}
              indicator={i === 0 ? firstRowIndicator : undefined}
            />
            <RowButtons
              noun={noun}
              onRemove={() => {
                if (allowEmpty) {
                  onChange(values.filter((_, j) => j !== i));
                } else {
                  onChange(values.length > 1 ? values.filter((_, j) => j !== i) : [""]);
                }
              }}
              onAdd={() => {
                onChange([...values, ""]);
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export function PairListEditor<T extends Record<string, string | undefined>>({
  label,
  noun,
  values,
  fields,
  onChange,
  makeEmpty,
}: {
  label: string;
  noun: string;
  values: T[];
  fields: { key: keyof T & string; placeholder: string }[];
  onChange: (values: T[]) => void;
  makeEmpty: () => T;
}) {
  return (
    <div>
      <div className="mb-1.5">
        <span className="text-sm font-medium">{label}</span>
      </div>
      <div className="space-y-2">
        {values.map((value, i) => (
          <div key={i} className="flex items-center gap-1">
            <div className="grid flex-1 grid-cols-2 gap-2">
              {fields.map((field) => (
                <Field
                  key={field.key}
                  value={value[field.key] ?? ""}
                  placeholder={field.placeholder}
                  onChange={(next) => {
                    onChange(
                      values.map((item, j) => (j === i ? { ...item, [field.key]: next } : item)),
                    );
                  }}
                />
              ))}
            </div>
            <RowButtons
              noun={noun}
              onRemove={() => {
                onChange(values.filter((_, j) => j !== i));
              }}
              onAdd={() => {
                onChange([...values, makeEmpty()]);
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
