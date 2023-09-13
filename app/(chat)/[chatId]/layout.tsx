import { ReactNode } from "react";

export const runtime = "edge";

export default function ChatLayout({ children }: { children: ReactNode }) {
  return (
    <div className="bg-white h-screen w-screen">
      {children}
    </div>
  );
}