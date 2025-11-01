import React from 'react';

export type TabItem<T extends string> = { id: T; label: string };

export function Tabs<T extends string>({
  items,
  active,
  onChange,
  'aria-label': ariaLabel,
  className = '',
}: {
  items: ReadonlyArray<TabItem<T>>;
  active: T;
  onChange: (next: T) => void;
  'aria-label'?: string;
  className?: string;
}) {
  return (
    <div role="tablist" aria-label={ariaLabel} className={`tablist ${className}`.trim()}>
      {items.map((it) => (
        <button
          key={it.id}
          role="tab"
          aria-selected={active === it.id}
          className={`dm-button ${active === it.id ? '' : 'dm-button--ghost'}`.trim()}
          onClick={() => onChange(it.id)}
        >
          {it.label}
        </button>
      ))}
    </div>
  );
}
