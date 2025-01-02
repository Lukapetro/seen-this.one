"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
  Area,
  AreaChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

interface DataPoint {
  date: string;
  defi: number;
  ai: number;
}

const data: DataPoint[] = [
  { date: "Apr", defi: 3, ai: 3 },
  { date: "May", defi: 4, ai: 3.5 },
  { date: "Jun", defi: 5, ai: 4 },
  { date: "Jul", defi: 10, ai: 5 },
  { date: "Aug", defi: 12, ai: 6 },
  { date: "Sep", defi: 10, ai: 7 },
  { date: "Oct", defi: 12, ai: 8 },
  { date: "Nov", defi: 15, ai: 10 },
  { date: "Dec", defi: 30, ai: 12 },
  { date: "Jan", defi: 45, ai: 0 },
  { date: "Feb", defi: 55, ai: 0 },
  { date: "Mar", defi: 65, ai: 0 },
  { date: "Apr", defi: 63, ai: 0 },
];

const formatYAxis = (value: number) => `$${value}B`;

const IndexComparisonChart = () => {
  return (
    <Card className="w-full border border-border/40 bg-gradient-to-b from-card/50 to-card">
      <CardContent className="p-4 md:p-6">
        <div className="h-[500px]">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={data}
              margin={{ top: 10, right: 30, left: 10, bottom: 10 }}
            >
              <defs>
                <linearGradient id="defiColor" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#818cf8" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#818cf8" stopOpacity={0.1} />
                </linearGradient>
                <linearGradient id="aiColor" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#34d399" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#34d399" stopOpacity={0.1} />
                </linearGradient>
              </defs>
              <CartesianGrid
                strokeDasharray="3 3"
                stroke="hsl(var(--border))"
                opacity={0.15}
                horizontal={true}
                vertical={false}
              />
              <XAxis
                dataKey="date"
                stroke="hsl(var(--muted-foreground))"
                tick={{ fill: "hsl(var(--muted-foreground))" }}
                axisLine={{ stroke: "hsl(var(--border))" }}
                tickLine={false}
              />
              <YAxis
                stroke="hsl(var(--muted-foreground))"
                tick={{ fill: "hsl(var(--muted-foreground))" }}
                tickFormatter={formatYAxis}
                domain={[0, 70]}
                axisLine={{ stroke: "hsl(var(--border))" }}
                ticks={[0, 10, 20, 30, 40, 50, 60, 70]}
                tickLine={false}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: "hsl(var(--card))",
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "var(--radius)",
                  color: "hsl(var(--card-foreground))",
                  boxShadow:
                    "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
                }}
                formatter={(value: number) => [`$${value}B`, ""]}
              />
              <Legend
                wrapperStyle={{
                  color: "hsl(var(--card-foreground))",
                  fontWeight: 500,
                }}
                verticalAlign="bottom"
                height={48}
                iconType="circle"
                iconSize={8}
              />
              <Area
                type="monotone"
                dataKey="defi"
                name="DeFi Index (2020-2021)"
                stroke="#818cf8"
                fill="url(#defiColor)"
                fillOpacity={1}
                strokeWidth={2}
              />
              <Area
                type="monotone"
                dataKey="ai"
                name="AI Index (2024 - Current)"
                stroke="#34d399"
                fill="url(#aiColor)"
                fillOpacity={1}
                strokeWidth={2}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default IndexComparisonChart;
