"use client";

import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip } from "recharts";
import { Card } from "@/components/ui/card";

const moodData = [
  { name: "Jan", value: 4 },
  { name: "Feb", value: 6 },
  { name: "Mar", value: 8 },
  { name: "Apr", value: 7 },
  { name: "May", value: 9 },
  { name: "Jun", value: 5 },
];

export function DreamFrequencyChart() {
  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold mb-4">Dream Frequency</h3>
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={moodData}>
            <XAxis 
              dataKey="name"
              axisLine={{ stroke: 'hsl(var(--muted-foreground))' }}
              tick={{ fill: 'hsl(var(--muted-foreground))' }}
            />
            <YAxis
              axisLine={{ stroke: 'hsl(var(--muted-foreground))' }}
              tick={{ fill: 'hsl(var(--muted-foreground))' }}
            />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: 'hsl(var(--background))',
                border: '1px solid hsl(var(--border))',
                borderRadius: '6px'
              }}
            />
            <Line 
              type="monotone" 
              dataKey="value" 
              stroke="hsl(var(--primary))" 
              strokeWidth={2}
              dot={{ fill: 'hsl(var(--primary))' }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}