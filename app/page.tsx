import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <div className="pt-10 flex flex-col gap-6">
        <button className="btn btn-outline">
          <Link href={"/standard"} className="font-bold text-xl">
            Standard
          </Link>
        </button>
        <button className="btn btn-outline btn-primary">
          <Link href={"/advanced"} className="font-bold text-xl">
            Advanced
          </Link>
        </button>
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
