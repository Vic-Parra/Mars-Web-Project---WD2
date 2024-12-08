
export default function Pic({picObj}){
    
    const{
        image,
        rover,
        sol,
        earthDate
    }=picObj

    return(
        <div>
            <img src={image} />
            <ul>
                <li>Rover: {rover}</li>
                <li>Sol: {sol}</li>
                <li>Earth Date: {earthDate}</li>
            </ul>
        </div>
    );
}