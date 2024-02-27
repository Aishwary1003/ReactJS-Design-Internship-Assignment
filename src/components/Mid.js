import IMAGE from"../assets/IMAGE.png";
import icon from "../assets/icon.png";
import droparrow from "../assets/droparrow.png";
import { GoChevronRight } from "react-icons/go";
import Cards from "./Cards";
import Dealcards from "./Dealcards";

const Mid=()=>{
    return(
        <div className="w-9/12 h-full mx-auto mt-10">
              <h6 className="text-4xl font-normal  leading-10 mb-4">Best Website builders in the US</h6>




              

                    {/* date div */}

                <div className=" w-full flex py-2 justify-between border-t-2 border-b-2  border-gray-200 mt-2">


                    <div className="flex gap-6 ">

                       <div className=" flex gap-2 ">
                           <img  width={20} height={20}
                                src={IMAGE}/>
                            <p className="font-normal text-sm text-gray-600">Last Updated - February 22,2020</p>
                        </div>


                        <div className=" flex gap-2 ">
                             <img width={20} height={20} src={icon}  />
                             <p className="font-normal text-sm text-gray-600">Advertising Disclosure</p>
                        </div>

                    </div>
                   
                     
                    <div className=" flex  ">
                   
                        <p className="font-normal text-sm text-gray-600">Top Relevent</p>
                        <img width={24} height={24} src={droparrow}/>
                    </div>

                </div>

              {/* div of buttons */}


                <div className="flex w-full mt-4 gap-5">
                  <button className="bg-white rounded-xl px-4 py-2 text-gray-600 text-sm">Tools</button>
                  <button className="bg-white rounded-xl  px-4 py-2 text-gray-600 text-sm">AWS Builder</button>
                  <button className="bg-white rounded-xl  px-4 py-2 text-gray-600 text-sm">Start Build</button>
                  <button className="bg-white rounded-xl  px-4 py-2 text-gray-600 text-sm">Build Supplies</button>
                  <button className="bg-white rounded-xl  px-4 py-2 text-gray-600 text-sm">Tooling</button>
                 <button className="bg-white rounded-xl  px-4 py-2 text-gray-600 text-sm">BlueHosting</button>
                </div>


                {/* hosting bar */}

                <div className="flex items-center gap-1 mt-5">

                    <p className="text-sm font-normal text-zinc-500">Home</p>
                    <GoChevronRight/>
                    <p className="text-sm font-normal text-zinc-500">Hosting for all</p>
                     <GoChevronRight/>
                    <p className="text-sm font-normal text-zinc-500">Hosting</p>
                     <GoChevronRight/>
                    <p className="text-sm font-normal text-zinc-500">Hosting6</p>
                     <GoChevronRight/>
                    <p className="text-sm font-normal text-zinc-500">Hosting5</p>

                </div>


                {/* All Cards */}
              
                  <Cards/>

                  <p className="font-normal text-3xl mt-10">Related deals you might like for</p>

                  <Dealcards/>



                  {/* Signup text and button */}
                
                <div  className="w-full flex  mt-10 ml-10">
                   <p className="font-normal text-3xl w-2/5 text-gray-600">Sign up and get exclusive special deals</p>
                  
                        <input className=" ml-32  w-1/3 h-12 rounded-s-xl"/>
                        <button className="bg-blue-500  w-20 h-12 rounded-e-xl text-center font-normal text-sm text-white"> Sign Up</button>

                  
                    
                </div>


               
                 
                  
                 

              

                      

                 


            







        </div>
    )
}
export default Mid;