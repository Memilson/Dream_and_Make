import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

/**
 * useSyncedTab: sync a string union tab with the URL ?tab= param.
 * - values: allowed tab ids
 * - defaultValue: fallback when param is missing/invalid
 * - basePath: pathname to navigate when changing tabs (defaults to current pathname)
 * - key: querystring key (defaults to 'tab')
 */
export function useSyncedTab<T extends string>(options: {
  values: readonly T[];
  defaultValue: T;
  basePath?: string;
  key?: string;
  replace?: boolean;
}) {
  const { values, defaultValue, basePath, key = 'tab', replace = true } = options;
  const location = useLocation();
  const navigate = useNavigate();

  const getInitial = React.useCallback((): T => {
    const params = new URLSearchParams(location.search);
    const t = params.get(key) as T | null;
    return (t && (values as readonly string[]).includes(t)) ? t : defaultValue;
  }, [location.search, key, values, defaultValue]);

  const [tab, setTabState] = React.useState<T>(getInitial);

  React.useEffect(() => {
    setTabState(getInitial());
  }, [getInitial]);

  const setTab = React.useCallback((next: T) => {
    const params = new URLSearchParams(location.search);
    params.set(key, next);
    navigate({ pathname: basePath || location.pathname, search: `?${params.toString()}` }, { replace });
  }, [location.pathname, location.search, key, basePath, navigate, replace]);

  const isActive = React.useCallback((t: T) => t === tab, [tab]);

  return { tab, setTab, isActive } as const;
}
