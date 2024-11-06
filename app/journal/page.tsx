"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Plus, Calendar, Search } from "lucide-react";
import { Input } from "@/components/ui/input";

interface DreamEntry {
  id: number;
  date: string;
  title: string;
  mood: string;
  preview: string;
}

const sampleDreams: DreamEntry[] = [
  {
    id: 1,
    date: "2024-03-20",
    title: "Flying Over the City",
    mood: "🌟 Exciting",
    preview: "I found myself soaring above skyscrapers..."
  },
  {
    id: 2,
    date: "2024-03-19",
    title: "The Ancient Library",
    mood: "🤔 Mysterious",
    preview: "Walking through endless shelves of glowing books..."
  },
  // Add more sample dreams
];

export default function JournalPage() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="container mx-auto p-8 space-y-6 animate-fade-in">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Dream Journal</h1>
          <p className="text-muted-foreground">Record and track your dreams</p>
        </div>
        <Button className="gap-2">
          <Plus className="h-4 w-4" />
          New Entry
        </Button>
      </div>

      <div className="flex gap-4 mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search dreams..."
            className="pl-10"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <Button variant="outline" className="gap-2">
          <Calendar className="h-4 w-4" />
          Filter by Date
        </Button>
      </div>

      <div className="grid gap-4">
        {sampleDreams.map((dream) => (
          <Card key={dream.id} className="p-4 hover:bg-accent/50 cursor-pointer transition-colors">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="font-semibold text-lg">{dream.title}</h3>
                <p className="text-sm text-muted-foreground">{dream.mood}</p>
              </div>
              <span className="text-sm text-muted-foreground">{dream.date}</span>
            </div>
            <p className="text-muted-foreground">{dream.preview}</p>
          </Card>
        ))}
      </div>
    </div>
  );
}