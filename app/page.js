import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      {/* top part */}
      <h1>MARTIAN VIEWS</h1>
      <p>Beautiful pictures of mars from NASA!</p>
      <ul>
        <li>
          <Link href={""}>Curiosity Rover</Link>
        </li>
        <li>
          <Link href={""}>Opportunity Rover</Link>
        </li>
        <li>
          <Link href={""}>Spirit Rover</Link>
        </li>
      </ul>

      {/* Featured Pic */}
      <h2>Random Featured Picture</h2>
      <div>
        {/* -- picture API stuff here -- */}
      </div>
      
      {/* Credits */}
      <h2>CREDITS</h2>
      <div>
        <p>Images:</p>
        <Link href={"https://www.nasa.gov"}></Link>
        <p>API Maintained By:</p>
        <Link href={"https://github.com/corincerami"}>Corin Cerami</Link>
        <p>Page Built By:</p>
        <Link href={"https://github.com/Vic-Parra"}>Vic Parra</Link>
      </div>
    </main>
  );
}
