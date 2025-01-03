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
import { chartColors, chartData, formatYAxis, tooltipFormatter, tooltipStyle } from "./chart-data";

const IndexComparisonChart = () => {
  return (
    <Card className="w-full border border-border/40 bg-gradient-to-b from-card/50 to-card">
      <CardContent className="p-4 md:p-6">
        <div className="h-[500px]">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={chartData}
              margin={{ top: 10, right: 30, left: 10, bottom: 4 }}
            >
              <defs>
                <linearGradient id="defiColor" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor={chartColors.defi} stopOpacity={0.8} />
                  <stop offset="95%" stopColor={chartColors.defi} stopOpacity={0.1} />
                </linearGradient>
                <linearGradient id="aiColor" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor={chartColors.ai} stopOpacity={0.8} />
                  <stop offset="95%" stopColor={chartColors.ai} stopOpacity={0.1} />
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
                domain={[0, 140]}
                axisLine={{ stroke: "hsl(var(--border))" }}
                ticks={[0, 20, 40, 60, 80, 100, 120, 140]}
                tickLine={false}
              />
              <Tooltip
                contentStyle={tooltipStyle}
                formatter={tooltipFormatter}
                label
              />
              <Legend
                wrapperStyle={{
                  color: "hsl(var(--card-foreground))",
                  fontWeight: 500,
                  paddingTop: 16
                }}
                verticalAlign="bottom"
                height={48}
                margin={{ top: 0 }}
                iconType="circle"
                iconSize={8}
              />
              <Area
                type="monotone"
                dataKey="defi"
                name="DeFi Index (2020-2021)"
                stroke={chartColors.defi}
                fill="url(#defiColor)"
                fillOpacity={1}
                strokeWidth={2}
              />
              <Area
                type="monotone"
                dataKey="ai"
                name="AI Index (2024 - Current)"
                stroke={chartColors.ai}
                fill="url(#aiColor)"
                fillOpacity={1}
                strokeWidth={2}
                connectNulls={true}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default IndexComparisonChart;
