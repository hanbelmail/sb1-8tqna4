import { Card } from "@/components/ui/card";

const insights = [
  {
    value: "85%",
    label: "Dreams Recorded",
  },
  {
    value: "12",
    label: "Lucid Dreams",
  },
  {
    value: "8.5",
    label: "Avg. Dream Rating",
  },
];

export function InsightsGrid() {
  return (
    <Card className="p-6 md:col-span-2">
      <h3 className="text-lg font-semibold mb-4">Recent Insights</h3>
      <div className="grid md:grid-cols-3 gap-4">
        {insights.map((insight, index) => (
          <div key={index} className="p-4 bg-accent rounded-lg">
            <div className="text-2xl font-bold mb-1">{insight.value}</div>
            <div className="text-sm text-muted-foreground">{insight.label}</div>
          </div>
        ))}
      </div>
    </Card>
  );
}