"use client";

import { useScrollToHash } from "@/lib/use-scroll-to-hash";

export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  useScrollToHash();
  return <>{children}</>;
} 