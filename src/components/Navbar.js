import searchicon from "../assets/searchicon.png"
const Navbar=()=>{

    return(
    <div className="bg-gray-800 flex  flex-wrap justify-center items-center w-full h-12">
             
                   
    <div className="flex flex-wrap   items-center   justify-between  w-8/12">
                    {/* search form */}
        <form className="flex ml-48 bg-white  border rounded-lg">
           <button className="bg-white rounded-lg ">
                 <img height={22} width={22} src={searchicon}/>
           </button>

           <input className="rounded-lg " type="text"/>
       </form>
       



      
             <div className="flex gap-8">
                   <p className="text-zinc-300 text-sm">Categories</p>
                   <p className="text-zinc-300 text-sm">Website builders</p>
             </div>
         
             <p className="text-zinc-300 text-sm">Today's deals</p> 
                     
         
    </div>
   

       
       
          

    </div>);
}

export default Navbar;