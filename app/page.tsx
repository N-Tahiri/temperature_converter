import TemperatureConverter from "./components/TemperatureConverter";
import LINK from "next/link";
import IMAGE from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <div className="flex gap-14">
          <LINK href="/">
            <IMAGE src="/logo.png" alt="logo" width={100} height={100} />
          </LINK>
          <p className="text-6xl font-bold  text-slate-600 hover:text-slate-700 border-b-4 border-orange-600">
            Temperature Converter
          </p>
          <LINK href="/">
            <IMAGE src="/logo.png" alt="logo" width={100} height={100} />
          </LINK>
        </div>
        <div className="flex p-14 justify-center">
          <TemperatureConverter />
        </div>
      </div>
    </main>
  );
}
