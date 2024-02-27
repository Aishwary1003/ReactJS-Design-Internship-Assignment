import imgpc1 from "../assets/imgpc1.png";
import { GoChevronDown } from "react-icons/go";
import starimg from '../assets/starimg.png';
import starimg2 from '../assets/starimage2.png';
import Template from "./Template";
import Lovelist from "./Lovelist";
import Reviewcard from "./Reviewcard";
import cupimage from "../assets/cupimage.png";

const Card=({data})=>{

    return(
        <div className="w-full  max-h-none flex my-10 relative bg-white  rounded-xl">


            <div className="w-11 h-11 rounded-full  bg-slate-100 py-2 px-4 absolute top-4 left-0 -translate-x-5 translate-y-4">{data.id}</div>
                            
                            {/* Overlapped tag */}
                {(data.id==1 || data.id==2)?(
                      
                 <button className="absolute  -translate-x-1 -translate-y-4  bg-orange-500 w-36 h-8 flex items-center rounded-e-xl gap-1 pl-1 ">
                      <img src={cupimage}/>
                      <p className="text-white">Best Choice</p>
                 </button>  
 

                ):(<p></p>)}
             
                             {/* Imagepc and title */}
            <div className="flex-col items-center   pt-20 px-10 ">
              
                  <img  src={imgpc1} width={130} height={90}/>  
                   <p className="absolute left-20 mt-2 font-sans font-normal text-sm text-slate-500" >{data.title}</p>
            </div>   

                           {/* desc1 and 2 */}
                    <div className="w-6/12">
                          <p className="font-normal text-gray-600 mt-5 mb-1">
                            <span className=" font-sans font-bold text-base text-gray-700">
                             {data.desctitle}
                            </span>
                            {data.desc1}
                            </p>

                        
                        {(data.id==4)?(<p className=" mt-2 pb-1 w-14  h-6 rounded font-sans font-normal text-sm text-sky-800 radius-1 bg-gray-100">26% Off</p>):(<p></p>)}


                         <p className=" font-sans  mb-3 font-bold text-base text-gray-700">Main highlights</p>


                          <div className=" font-normal text-gray-600 pl-5 mt-3">
                                   {(data.id==4)?(<Template/>):( data.desc2)}
                          </div>


                          {/* Lovelist */}

                         {(data.id==4)?( <Lovelist/>):(<p></p>)}








                          <div className="flex items-center  mt-5">
                            <p className="text-blue-500 mb-1 ">Show more</p>
                              {(data.id==1 || data.id==2)?( <GoChevronDown />):(<p></p>)} 
                          </div>

                    </div>




                       {/* review rate and button */}

                       {(data.id==4)?(<Reviewcard/>):
                       (   
                    <div className="flex-col ">
                       <div className=" ml-14 py-3 flex-col items-center w-32 h-28 bg-sky-50 rounded-tl-none rounded-tr-none rounded-br-lg rounded-bl-lg">
                           <p className=" font-sans text-3xl font-normal text-center ">{data.ratingno}</p>

                           <p className=" font-sans mt-1 text-sm font-normal text-center">{data.ratingrev}</p>
                           {(data.id==1 || data.id==3)  && <img className="mx-auto mt-2 " src={starimg}/>}
                           {data.id==2 &&  <img className="mx-auto mt-2 " src={starimg2}/>}

                           
                       </div>   

                       <button  className=" bg-blue-500 text-white w-56 h-12 rounded-xl mt-20 ">View</button>


                    </div>
                       )}

           
                        
                   





        </div>
    )
}

export default Card;