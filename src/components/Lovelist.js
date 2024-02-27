import Tick from "../assets/Tick.png";
const Lovelist=()=>{
    return(
        <div className="mt-4">
            <p className="font-normal text-gray-600 ">Why we love it</p>
            <div className="flex gap-2 mt-2">
                  <div><img src={Tick}/></div>
                  <p className=" font-normal text-base text-gray-600">Documentation</p>
            </div>


            <div className="flex gap-2 my-1">
                  <div><img src={Tick}/></div>
                  <p className="font-normal text-base text-gray-600">Easy Use</p>
                 
            </div>




            <div className="flex gap-2">
                  <div><img src={Tick}/></div>
                  <p className="font-normal text-base text-gray-600">Out of box</p>
                 
            </div>
        </div>
    )
}
export default Lovelist;