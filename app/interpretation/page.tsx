"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Brain, Loader2 } from "lucide-react";
import { Card } from "@/components/ui/card";

export default function InterpretationPage() {
  const [dream, setDream] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleInterpretation = async () => {
    setIsLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsLoading(false);
  };

  return (
    <div className="container max-w-4xl mx-auto p-8 space-y-8 animate-fade-in">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">AI Dream Interpretation</h1>
        <p className="text-muted-foreground">
          Describe your dream in detail, and our AI will help you understand its meaning.
        </p>
      </div>

      <Card className="p-6 space-y-4">
        <Textarea
          placeholder="Describe your dream here..."
          className="min-h-[200px] resize-none"
          value={dream}
          onChange={(e) => setDream(e.target.value)}
        />
        <Button 
          className="w-full" 
          size="lg"
          disabled={isLoading || !dream.trim()} 
          onClick={handleInterpretation}
        >
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Interpreting...
            </>
          ) : (
            <>
              <Brain className="mr-2 h-4 w-4" />
              Interpret Dream
            </>
          )}
        </Button>
      </Card>

      <div className="grid md:grid-cols-2 gap-6">
        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-2">Common Symbols</h3>
          <ul className="space-y-2 text-muted-foreground">
            <li>🌊 Water - Emotions, unconscious mind</li>
            <li>🏃‍♂️ Running - Avoiding situations</li>
            <li>🏠 Houses - Self, personality aspects</li>
            <li>✈️ Flying - Freedom, transcendence</li>
          </ul>
        </Card>
        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-2">Tips for Better Results</h3>
          <ul className="space-y-2 text-muted-foreground">
            <li>Be as detailed as possible</li>
            <li>Include emotions felt during the dream</li>
            <li>Mention colors and symbols</li>
            <li>Describe the setting</li>
          </ul>
        </Card>
      </div>
    </div>
  );
}