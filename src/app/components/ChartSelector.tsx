"use client";

import { useState } from "react";
import IndexBarChart from "./IndexBarChart";
import IndexComparisonChart from "./IndexComparisonChart";
import IndexLineChart from "./IndexLineChart";

const ChartSelector = () => {
  const [selectedChart, setSelectedChart] = useState<"area" | "line" | "bar">("area");

  return (
    <div className="space-y-4">
      <div className="flex space-x-4 border-b border-border/40">
        <button
          onClick={() => setSelectedChart("area")}
          className={`px-4 py-2 text-sm font-medium ${
            selectedChart === "area"
              ? "border-b-2 border-primary text-primary"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          Area Chart
        </button>
        <button
          onClick={() => setSelectedChart("line")}
          className={`px-4 py-2 text-sm font-medium ${
            selectedChart === "line"
              ? "border-b-2 border-primary text-primary"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          Line Chart
        </button>
        <button
          onClick={() => setSelectedChart("bar")}
          className={`px-4 py-2 text-sm font-medium ${
            selectedChart === "bar"
              ? "border-b-2 border-primary text-primary"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          Bar Chart
        </button>
      </div>
      {selectedChart === "area" && <IndexComparisonChart />}
      {selectedChart === "line" && <IndexLineChart />}
      {selectedChart === "bar" && <IndexBarChart />}
    </div>
  );
};

export default ChartSelector;
