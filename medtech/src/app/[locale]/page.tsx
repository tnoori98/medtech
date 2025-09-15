"use client"
import Vision from "../device/components/Vision";
import LiveProductDiagnosticGrid from "../device/components/LiveDiagnosticGrid";
import { Footer } from "../footer/components/Footer";
import Navbar from "../navbar/components/Navbar";
import { Spotlight } from "../spotlight/components/Spotlight";
import Team from "../team/components/Team";

export default function Home() {
  return (
    <div>
      <div className="container mx-auto max-w-7xl">
        <Navbar />
        <Spotlight />
        <div id="prodcuts"><LiveProductDiagnosticGrid /></div>
        <div id="vision"><Vision /></div>
        <div id="team"><Team /></div>
      </div>
        <Footer />
    </div>
  );
}
