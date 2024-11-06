"use client";

import { useLanguage } from "@/components/language-provider";
import { ThemeToggle } from "@/components/theme-toggle";
import { LanguageToggle } from "@/components/language-toggle";
import { cn } from "@/lib/utils";
import { Brain, Home, Book, PieChart, Newspaper, Moon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const sidebarItems = [
  { icon: Home, href: "/", labelKey: "nav.home" },
  { icon: Brain, href: "/interpretation", labelKey: "nav.interpretation" },
  { icon: Book, href: "/journal", labelKey: "nav.journal" },
  { icon: PieChart, href: "/overview", labelKey: "nav.overview" },
  { icon: Newspaper, href: "/blog", labelKey: "nav.blog" },
];

export function Sidebar() {
  const { t } = useLanguage();
  const pathname = usePathname();

  return (
    <div className="flex h-screen w-64 flex-col bg-background border-r">
      <div className="p-4 flex items-center gap-2">
        <Moon className="h-8 w-8 text-primary" />
        <span className="font-bold text-xl">DreamScape</span>
      </div>
      
      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {sidebarItems.map((item) => {
            const Icon = item.icon;
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={cn(
                    "flex items-center gap-3 px-4 py-3 rounded-lg transition-colors",
                    "hover:bg-accent hover:text-accent-foreground",
                    pathname === item.href
                      ? "bg-accent text-accent-foreground"
                      : "text-muted-foreground"
                  )}
                >
                  <Icon className="h-5 w-5" />
                  <span>{t(item.labelKey)}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="p-4 border-t flex items-center justify-between">
        <ThemeToggle />
        <LanguageToggle />
      </div>
    </div>
  );
}