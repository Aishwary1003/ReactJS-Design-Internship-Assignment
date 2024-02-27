import Card from "./Card";
import data from "./data";
const Cards=()=>{


    return(
    <div className="w-full h-full bg-zinc-50 box-border ">
                
                {data.map((data)=>{return <Card data={data}/>})}
         
                
         
    </div>)

}

export default Cards;