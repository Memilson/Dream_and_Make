import React from 'react';
import { Shuffle } from 'lucide-react';

interface RandomButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
}

const RandomButton = React.forwardRef<HTMLButtonElement, RandomButtonProps>(({ loading = false, className = '', onClick, children, disabled, ...props }, ref) => {
  const [isPulsing, setPulsing] = React.useState(false);
  const isDisabled = Boolean(disabled || loading);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (isDisabled) {
      return;
    }
    setPulsing(true);
    if (typeof window !== 'undefined') {
      window.setTimeout(() => setPulsing(false), 220);
    }
    onClick?.(event);
  };

  return (
    <button
      ref={ref}
      type="button"
      className={`dm-button random-button ${isPulsing ? 'is-pulsing' : ''} ${loading ? 'is-loading' : ''} ${className}`.trim()}
      aria-live="polite"
      aria-busy={loading}
      disabled={isDisabled}
      onClick={handleClick}
      {...props}
    >
      <Shuffle className="tab-icon" aria-hidden />
      <span>{loading ? 'Carregando…' : (children ?? 'Estou com sorte')}</span>
      <span className="random-button__pulse" aria-hidden />
    </button>
  );
});

RandomButton.displayName = 'RandomButton';

export default RandomButton;
