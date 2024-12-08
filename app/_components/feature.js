"use client"

import { useEffect } from "react";
import { useState } from "react";
import Pic from "./pic"

export default function Feature(){

    const [singlePic, setSinglePic] = useState({});

    async function getSinglePic(){
        try {
            const response = await fetch("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=Nd6LD9Tl0dmZgV9b4VTTAstqO7OngR8T9kX6WSFj");
            if ( !response.ok) console.log(response.statusText)
            // console.dir(response);
            const data = await response.json();
            // console.dir(data);
            setSinglePic(data);
        } catch (error) {
            console.log(`Error: ${error.message}`);
        }
    }

    useEffect( () => {
        getSinglePic();
    } , [] );

    return(
        <div>
            <Pic picObj={singlePic}/>
        </div>
    );
}