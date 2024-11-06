"use client";

import { DreamFrequencyChart } from "./components/DreamFrequencyChart";
import { DreamThemesChart } from "./components/DreamThemesChart";
import { InsightsGrid } from "./components/InsightsGrid";

export default function OverviewPage() {
  return (
    <div className="container mx-auto p-8 space-y-6 animate-fade-in">
      <div>
        <h1 className="text-3xl font-bold">Dreams Overview</h1>
        <p className="text-muted-foreground">Analyze your dream patterns and insights</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <DreamFrequencyChart />
        <DreamThemesChart />
        <InsightsGrid />
      </div>
    </div>
  );
}