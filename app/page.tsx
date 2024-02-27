import React from "react";
import Player from "@/app/views/player";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Player></Player>
    </main>
  );
}
