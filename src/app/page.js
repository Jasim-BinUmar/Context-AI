import Image from "next/image";
import HistorySidePanel from "./components/HistorySidePanel";
export default function LandingPage() {
  return (
    <div className="h-screen bg-primary items-center justify-center">
      <HistorySidePanel/>
    </div>
  );
}
