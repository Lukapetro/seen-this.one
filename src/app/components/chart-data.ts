export interface DataPoint {
  date: string;
  defi: number;
  ai?: number;
}

export const chartData: DataPoint[] = [
  { date: "Apr", defi: 3.11, ai: 0 },
  { date: "May", defi: 3.71, ai: 0 },
  { date: "Jun", defi: 4.98, ai: 0 },
  { date: "Jul", defi: 7.24, ai: 0 },
  { date: "Aug", defi: 15.81, ai: 0 },
  { date: "Sep", defi: 12.59, ai: 0 },
  { date: "Oct", defi: 13.19, ai: 3 },
  { date: "Nov", defi: 19.18, ai: 7 },
  { date: "Dec", defi: 21.56, ai: 12 },
  { date: "Jan", defi: 44.98, ai: 19 },
  { date: "Feb", defi: 64.53 },
  { date: "Mar", defi: 103.12 },
  { date: "Apr", defi: 129.17 },
];

export const formatYAxis = (value: number) => `$${value}B`;

export const tooltipFormatter = (value: number, name: string) => {
  const label = name === "ai" ? "AI Agents Index" : "DeFi Index";
  return [`$${value}B`, label];
};

export const chartColors = {
  defi: "#818cf8",
  ai: "#34d399",
};

export const tooltipStyle = {
  backgroundColor: "rgb(17, 17, 17)",
  border: "1px solid rgba(255, 255, 255, 0.1)",
  borderRadius: "var(--radius)",
  color: "rgb(250, 250, 250)",
  boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
};
