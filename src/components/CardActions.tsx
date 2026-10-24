"use client";

import { useState, useSyncExternalStore } from "react";
import { useTheme } from "next-themes";
import { Check, Copy, Moon, Share2, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";

const subscribe = () => () => {};

export function CardActions() {
  const { resolvedTheme, setTheme } = useTheme();
  const mounted = useSyncExternalStore(subscribe, () => true, () => false);
  const [message, setMessage] = useState("");

  const share = async () => {
    try {
      if (navigator.share) {
        await navigator.share({ title: "Keval Mangroliya — Digital card", url: window.location.href });
        return;
      }
      await navigator.clipboard.writeText(window.location.href);
      setMessage("Card link copied");
    } catch (error) {
      if (error instanceof DOMException && error.name === "AbortError") return;
      setMessage("Copy the page address to share this card.");
    }
  };

  return (
    <div className="relative flex shrink-0 items-center justify-end">
      <div className="flex items-center gap-1">
        <Button variant="ghost" size="icon-lg" aria-label="Share this digital card" onClick={share}>{message === "Card link copied" ? <Check /> : <Share2 />}</Button>
        <Button variant="ghost" size="icon-lg" aria-label="Toggle color theme" onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}>{mounted && resolvedTheme === "light" ? <Moon /> : <Sun />}</Button>
      </div>
      <p role="status" className="absolute right-0 top-full z-10 mt-2 w-56 rounded-xl border border-border bg-card p-3 text-left text-xs text-muted-foreground shadow-lg empty:hidden">{message && <><Copy className="mr-1 inline size-3" />{message}</>}</p>
    </div>
  );
}
