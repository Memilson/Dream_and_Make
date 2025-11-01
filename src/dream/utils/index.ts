export const fmtDate = (iso: string) => new Date(iso).toLocaleString();
export const rand = <T,>(arr: T[]) => arr[Math.floor(Math.random() * arr.length)];
