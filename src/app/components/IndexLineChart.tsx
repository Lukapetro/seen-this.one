"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { chartColors, chartData, formatYAxis, tooltipFormatter, tooltipStyle } from "./chart-data";

const IndexLineChart = () => {
  return (
    <Card className="w-full border border-border/40 bg-gradient-to-b from-card/50 to-card">
      <CardContent className="p-4 md:p-6">
        <div className="h-[500px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={chartData}
              margin={{ top: 10, right: 30, left: 10, bottom: 4 }}
            >
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
              <Line
                type="monotone"
                dataKey="defi"
                name="DeFi Index (2020-2021)"
                stroke={chartColors.defi}
                strokeWidth={2}
                dot={false}
              />
              <Line
                type="monotone"
                dataKey="ai"
                name="AI Index (2024 - Current)"
                stroke={chartColors.ai}
                strokeWidth={2}
                dot={false}
                connectNulls={true}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default IndexLineChart;
