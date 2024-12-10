import Link from "next/link";


export default function Credits(){
    
    return(
        <section className="m-3 bg-slate-800 rounded p-2">
            <h1 className="flex justify-center text-xl underline">CREDITS</h1>
            <p className="flex justify-center p-1">Facts: <Link className="text-red-700 hover:text-red-900 hover:underline" href={"https://science.nasa.gov/mars/facts/"}> NASA Mars Facts Page</Link></p>
            <p className="flex justify-center p-1">Website made by: Vic Parra</p>
        </section>
    );
}