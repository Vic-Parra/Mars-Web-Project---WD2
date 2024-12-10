import Link from "next/link";
import Credits from "./_components/credits";

export default function Home() {
  return (
    <main className="bg-slate-900">
      {/* Title */}
      <div className="bg-slate-950 p-3 mb-3">
        <h1 className="flex justify-center text-4xl font-bold underline text-red-500 mb-2">MARS DOT NET</h1>
        <p className="flex justify-center text-2xl text-red-600">For All Things Mars!</p> 
      </div>

      {/* nav */}
      <div>
        <Link href={"./quiz"} className="flex justify-center text-xl text-red-700 hover:text-red-900 hover:underline">Take Me To The Quiz!</Link>
      </div>

      {/* main page image - links to its source*/}
      <Link href={"https://starwalk.space/en/news/mars-the-ultimate-guide"}>
      <img className="mt-3 rounded-2xl" src="https://starwalk.space/gallery/images/mars-the-ultimate-guide/1920x1080.jpg" />
      </Link>



      {/* Credits */}
      <Credits />
    </main>
  );
}
