import AdvancedTemperatureConverter from "../components/AdvancedTemperatureConverter";
import Link from "next/link";
import Image from "next/image";

export default function Advanced() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      {/* Head */}
      <div className="flex gap-14 py-6 flex-wrap justify-center">
        <Link href="/">
          <Image src="/logo.png" alt="logo" width={100} height={100} />
        </Link>
        <p className="text-6xl font-bold  text-slate-600 hover:text-slate-700 border-b-4 border-orange-600">
          Temperature Converter
        </p>
      </div>
      <div>
        {/* Middle */}
        <div className="flex p-4 z-90 ">
          <div className="z-20">
            <AdvancedTemperatureConverter />
          </div>
        </div>
      </div>
    </main>
  );
}
