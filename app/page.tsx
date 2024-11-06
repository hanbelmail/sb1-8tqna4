import { Button } from "@/components/ui/button";
import { Brain, Book, PieChart } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen p-8">
      <div className="max-w-6xl mx-auto space-y-8">
        <section className="text-center space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent animate-fade-in">
            Unlock the Mystery of Your Dreams
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover the hidden meanings behind your dreams with our AI-powered interpretation system and keep track of your dream journey.
          </p>
          <div className="flex justify-center gap-4 pt-4">
            <Button size="lg" className="gap-2">
              <Brain className="h-5 w-5" />
              Start Interpreting
            </Button>
            <Button size="lg" variant="outline">
              Open Journal
            </Button>
          </div>
        </section>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 pt-12">
          <div className="p-6 rounded-xl bg-card border transition-transform hover:scale-105">
            <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <Brain className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">AI Dream Analysis</h3>
            <p className="text-muted-foreground">
              Get instant, personalized interpretations of your dreams using advanced AI.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-card border transition-transform hover:scale-105">
            <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <Book className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Dream Journal</h3>
            <p className="text-muted-foreground">
              Keep track of your dreams in a beautiful, organized digital journal.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-card border transition-transform hover:scale-105">
            <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <PieChart className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Pattern Recognition</h3>
            <p className="text-muted-foreground">
              Discover recurring themes and patterns in your dream history.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}