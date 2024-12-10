"use client"
import React from "react"
import Credits from "../_components/credits";


export default function Quiz(){

    // making it easier to put alerts on answer buttons
    function AlertButton({ message, children }) {
        return (
          <button className="bg-rose-800 mx-2 rounded p-1 text-black" onClick={() => alert(message)}>
            {children}
          </button>
        );
      }
    

    // style variables
    const questionStyle = "text-xl";

    return(
        <div className="bg-slate-900">
            {/* Title */}
            <div className="bg-slate-950 p-3">
                <h1 className="flex justify-center text-4xl font-bold underline">MARS QUIZ</h1>
                <p className="flex justify-center">Let&#39;s see how much you know about our beloved red neighbour!</p>
            </div>

            {/* actual quiz part */}
            <div >
                <div className="border-red-700 border-2 rounded-lg max-w-fit p-2 m-5 ">
                    <p className={questionStyle}>1. How many NASA spacecrafts are in Mars?</p>
                    <div className="flex justify-center">
                    <AlertButton message="Correct! There are currently 3 NASA spacecrafts in Mars' orbit, and 2 NASA rovers on the planet's surface.">5</AlertButton>
                    <AlertButton message="Incorrect. There are currently 3 NASA spacecrafts in Mars' orbit, and 2 NASA rovers on the planet's surface.">3</AlertButton>
                    <AlertButton message="Incorrect. There are currently 3 NASA spacecrafts in Mars' orbit, and 2 NASA rovers on the planet's surface.">2</AlertButton>
                    <AlertButton message="Incorrect. There are currently 3 NASA spacecrafts in Mars' orbit, and 2 NASA rovers on the planet's surface.">10</AlertButton>
                    </div>
                </div>
                <div className="border-red-700 border-2 rounded-lg max-w-fit p-2 m-5 ">
                    <p className={questionStyle}>2. Are we looking for current life on Mars?</p>
                    <div className="flex justify-center">
                    <AlertButton message="Incorrect. NASA is currently looking for evidence of ancient life on Mars, not current living organisms">Yes</AlertButton>
                    <AlertButton message="Correct! NASA is currently looking for evidence of ancient life on Mars, not current living organisms">No</AlertButton>
                    </div>
                </div>
                <div className="border-red-700 border-2 rounded-lg max-w-fit p-2 m-5 ">
                    <p className={questionStyle}>3. How big is Mars&39; radius?</p>
                    <div className="flex justify-center">
                    <AlertButton message="Incorrect. Mars has a radius of 2106 miles">5000 miles</AlertButton>
                    <AlertButton message="Correct! Mars has a radius of 2106 miles">2106 miles</AlertButton>
                    <AlertButton message="Incorrect. Mars has a radius of 2106 miles">7050 miles</AlertButton>
                    <AlertButton message="Incorrect. Mars has a radius of 2106 miles">3,963 miles</AlertButton>
                    </div>
                </div>
                <div className="border-red-700 border-2 rounded-lg max-w-fit p-2 m-5 ">
                    <p className={questionStyle}>4. What are martian days called?</p>
                    <div className="flex justify-center">
                    <AlertButton message="Incorrect Martian days are called Sols">Suns</AlertButton>
                    <AlertButton message="Incorrect. Martian days are called Sols">Marts</AlertButton>
                    <AlertButton message="Incorrect. Martian days are called Sols">Martian Days</AlertButton>
                    <AlertButton message="Correct! Martian days are called Sols">Sols</AlertButton>
                    </div>
                </div>
                <div className="border-red-700 border-2 rounded-lg max-w-fit p-2 m-5 ">
                    <p className={questionStyle}>5. How many moons does Mars have??</p>
                    <div className="flex justify-center">
                    <AlertButton message="Incorrect. Mars has 2 moons">9</AlertButton>
                    <AlertButton message="Incorrect. Mars has 2 moons">4</AlertButton>
                    <AlertButton message="Correct! Mars has 2 moons">2</AlertButton>
                    <AlertButton message="Incorrect. Mars has 2 moons">1</AlertButton>
                    </div>
                </div>
                <div className="border-red-700 border-2 rounded-lg max-w-fit p-2 m-5 ">
                    <p className={questionStyle}>6. True of false: Mars has rings</p>
                    <div className="flex justify-center">
                    <AlertButton message="Incorrect. Mars does not have rings">True</AlertButton>
                    <AlertButton message="Correct! Mars does not have rings">False</AlertButton>
                    </div>
                </div>
                <div className="border-red-700 border-2 rounded-lg max-w-fit p-2 m-5 ">
                    <p className={questionStyle}>7. What is the name for martian soil (dirt)?</p>
                    <div className="flex justify-center">
                    <AlertButton message="Correct! Martian soil is called regolith">Regolith</AlertButton>
                    <AlertButton message="Incorrect. Martian soil is called regolith">Dirt</AlertButton>
                    <AlertButton message="Incorrect. Martian soil is called regolith">Rocks</AlertButton>
                    <AlertButton message="Incorrect. Martian soil is called regolith">Powder</AlertButton>
                    </div>
                </div>
                <div className="border-red-700 border-2 rounded-lg max-w-fit p-2 m-5 ">
                    <p className={questionStyle}>8. True or False: Mars has the same surface area as Earth&39;s dry land</p>
                    <div className="flex justify-center">
                    <AlertButton message="Correct!">True</AlertButton>
                    <AlertButton message="Incorrect">False</AlertButton>
                    </div>
                </div>
                <div className="border-red-700 border-2 rounded-lg max-w-fit p-2 m-5 ">
                    <p className={questionStyle}>9. True or False Mars can reach temperatures of -153°C</p>
                    <div className="flex justify-center">
                    <AlertButton message="Correct!">True</AlertButton>
                    <AlertButton message="Incorrect">False</AlertButton>
                    </div>
                </div>
                <div className="border-red-700 border-2 rounded-lg max-w-fit p-2 m-5 ">
                    <p className={questionStyle}>10. True or False: There are aliens currently living on mars?</p>
                    <div className="flex justify-center">
                    <AlertButton message="who knows... They could be out there...">True</AlertButton>
                    <AlertButton message="who knows... They could be out there...">False</AlertButton>
                    </div>
                </div>
            </div>

            {/* Credits */}
            <Credits />
        </div>
    );
}