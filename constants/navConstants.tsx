import { LucideIcon } from "lucide-react";
import { ButtonProps } from "../components/ui/button"; // Import ButtonProps to use as variant type
import { ThemeToggle } from "../components/theme-toggle";
import React from "react";

// Types for left navbar items
type LinkItem = {
  type: "link";
  label: string;
  href: string;
  icon?: LucideIcon;
};

// Types for right navbar items
type ButtonItem = {
  type: "button";
  label: string;
  variant?: ButtonProps["variant"];
};

// Use `React.ReactNode` directly for generic component items
type ComponentItem = {
  type: "component";
  component: React.ReactNode;
};

// Define navbar constants with type annotations
export const navConstants = {
  left: [
    { type: "link", label: "Working", href: "#" },
    { type: "link", label: "Pricing", href: "#" },
    { type: "link", label: "About", href: "#" },
    { type: "link", label: "FAQs", href: "#" },
    { type: "link", label: "Contact", href: "#" },
  ] as LinkItem[],

  right: [
    { type: "component", component: <ThemeToggle /> },
    { type: "button", label: "Sign In", variant: "ghost" },
    { type: "button", label: "Book" },
  ] as (ButtonItem | ComponentItem)[],
};

