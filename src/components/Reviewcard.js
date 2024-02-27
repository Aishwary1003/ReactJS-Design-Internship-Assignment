import starimage4 from '../assets/starimage4.png';
const Reviewcard=()=>{
    return(
        <div className="relative">
                      <div className="mt-2 ml-14 py-3 flex-col items-center w-32 h-28 bg-sky-50 rounded-tl-none rounded-tr-none rounded-br-lg rounded-bl-lg">
                           <p className=" font-sans text-3xl font-normal text-center ">9.1</p>

                           <p className=" font-sans mt-1 text-sm font-normal text-center">Very Good</p>
                           <img className="mx-auto mt-2 " src={starimage4}/>
                       </div>   

                       {/* <button  className="mt-20 bg-blue-500 text-white w-56 h-12 rounded-xl ">View</button> */}
                       <button  className="absolute bottom-4 bg-blue-500 text-white w-56 h-12 rounded-xl ">View</button>
        </div>
    )
}
export default Reviewcard;