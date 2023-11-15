import TemperatureConverter from "./components/TemperatureConverter";
import LINK from "next/link";
import IMAGE from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-gradient-to-r from-cyan-500 to-blue-500">
      {/* Head */}
      <div className="flex gap-14 py-6 flex-wrap justify-center">
        <LINK href="/">
          <IMAGE src="/logo.png" alt="logo" width={100} height={100} />
        </LINK>
        <p className="text-6xl font-bold  text-slate-600 hover:text-slate-700 border-b-4 border-orange-600">
          Temperature Converter
        </p>
      </div>

      {/* Middle */}
      <div className="flex p-4 z-90 ">
        <div className="z-20">
          <TemperatureConverter />
        </div>
      </div>
    </main>
  );
}
/* <IMAGE
          src={"/background.jpg"}
          alt={"background"}
          width={1000}
          height={100}
          className="absolute top-32 left-16 w-9/12 z-10 border-2 border-red-700 rounded-lg"
        ></IMAGE> */
