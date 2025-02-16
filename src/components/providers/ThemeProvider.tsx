"use client"
import React from "react";
import { useThemeStore } from "@/stores/themeStore";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const { theme } = useThemeStore();

  return React.cloneElement(children as React.ReactElement, {
    "data-theme": theme,
  });
}