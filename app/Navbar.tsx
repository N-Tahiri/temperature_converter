import Link from "next/link";
import Image from "next/image";
import Theme from "./components/Theme";

export default function Navbar() {
  return (
    <div className="flex gap-10 justify-center items-center text-xl font-bold">
      <Link href={"/"}>
        {" "}
        <Image src={"/logo.png"} alt={"logo"} width={80} height={10}></Image>
      </Link>
      <Link
        href={"/"}
        className=" text-slate-400 hover:text-slate-300 hover:text-2xl"
      >
        Home
      </Link>
      <Link
        href={"/standard"}
        className=" text-slate-400 hover:text-slate-300 hover:text-2xl"
      >
        Standard
      </Link>
      <Link
        href={"/advanced"}
        className=" text-slate-400 hover:text-slate-300 hover:text-2xl"
      >
        Advanced
      </Link>

      {/* Theme */}
      <Theme />
    </div>
  );
}
