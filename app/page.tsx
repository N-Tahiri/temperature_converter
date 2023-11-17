import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center pt-12">
      {/* <div className="divider divider-secondary"></div> */}
      <div className="flex flex-col w-full p-4">
        <div className="flex flex-row justify-center items-center card bg-base-300 rounded-box gap-6 p-6">
          <Link href={"/standard"}>
            <button className="btn btn-outline font-bold text-xl">
              Standard
            </button>{" "}
          </Link>
          <Link href={"/advanced"}>
            <button className="btn btn-outline btn-primary font-bold text-xl">
              Advanced
            </button>
          </Link>
        </div>
        <div className="divider divider-secondary">Preview</div>
        <div className="grid card bg-base-300 rounded-box place-items-center">
          <Link href={"/advanced"}>
            <Image
              src="/advanced.png"
              alt="advanced"
              width={600}
              height={100}
              className="m-2 border-4 border-primary"
            />
          </Link>
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
