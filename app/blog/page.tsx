import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "Understanding Dream Symbolism",
    excerpt: "Explore the hidden meanings behind common dream symbols and their cultural significance...",
    author: "Dr. Sarah Chen",
    date: "March 20, 2024",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1519682577862-22b62b24e493?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 2,
    title: "The Science of Lucid Dreaming",
    excerpt: "Learn about the latest research in lucid dreaming and techniques to control your dreams...",
    author: "Prof. Michael Rivera",
    date: "March 18, 2024",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1502230831726-fe5549140034?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 3,
    title: "Dreams and Mental Health",
    excerpt: "Discover how understanding your dreams can improve your mental well-being...",
    author: "Dr. Emily Watson",
    date: "March 15, 2024",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1515894203077-2cd25148bf4e?auto=format&fit=crop&q=80&w=800",
  },
];

export default function BlogPage() {
  return (
    <div className="container mx-auto p-8 space-y-6 animate-fade-in">
      <div>
        <h1 className="text-3xl font-bold">Dream Insights Blog</h1>
        <p className="text-muted-foreground">Latest articles about dreams and their interpretation</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPosts.map((post) => (
          <Card key={post.id} className="overflow-hidden group">
            <div className="aspect-video relative overflow-hidden">
              <img
                src={post.image}
                alt={post.title}
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-6 space-y-4">
              <div className="space-y-2">
                <h2 className="text-xl font-semibold line-clamp-2">{post.title}</h2>
                <p className="text-sm text-muted-foreground line-clamp-3">
                  {post.excerpt}
                </p>
              </div>
              <div className="flex items-center justify-between text-sm">
                <div className="text-muted-foreground">
                  <p>{post.author}</p>
                  <p>{post.date} · {post.readTime}</p>
                </div>
                <Button variant="ghost" size="sm" className="gap-2">
                  Read More
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}