
import { IoIosArrowDropdown } from "react-icons/io";
const Footer=()=>{
    return(
    <div className="w-full h-96 bg-gray-800 mt-11">

         <div className="w-9/12  h-full flex mx-auto gap-x-60  ">
                             {/* Categories  */}
      <div className="mt-14  ">
          <p className="font-normal text-bases  text-white">CATEGORIES</p>
          <p className="text-gray-300 text-sm mt-3">Web Builder</p>
          <p className="text-gray-300 text-sm mt-5">Hosting</p>
          <p className="text-gray-300 text-sm mt-5">Data Center</p>
          <p className="text-gray-300 text-sm mt-5">Robotic-Automation</p>
      </div>


      {/* Contact */}
      <div className="mt-14 ">
           <p className="font-normal text-bases  text-white">CONTACT</p>
           <p className="text-gray-300 text-sm mt-3">Contact</p>
           <p className="text-gray-300 text-sm mt-4">Privacy Policy</p>
           <p className="text-gray-300 text-sm mt-4">Terms Of Service</p>
           <p className="text-gray-300 text-sm mt-4">Categories</p>
           <p className="text-gray-300 text-sm mt-4">About</p>
      </div>


         {/* icon */}
      <div className="flex pt-28 mt-4 ">
        <p className="text-gray-300 text-sm ">United States</p>
        <IoIosArrowDropdown className="mt-1 bg-gray-800"/>
      </div>
         </div>
       
    </div>)
}
export default Footer;