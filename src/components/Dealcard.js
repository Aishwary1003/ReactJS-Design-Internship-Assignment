import imgpc1 from "../assets/imgpc1.png"
const Dealcard=(props)=>{
    return(
     <div className="w-1/3 max-h-none bg-white flex-col justify-center pt-9 pb-5 rounded-xl">
        <img className="mx-auto " src={imgpc1} width={130} height={90}/>

        <div className="flex gap-1  mt-16 ml-5">
            <p className="rounded-lg bg-gray-100 font-normal text-sm px-2 py-1 text-sky-800">20% Off</p>
            <p className="rounded-lg bg-gray-100 font-normal text-sm px-2 py-1 text-sky-800">Limited time </p>


        </div>

        <div className="ml-20 font-bold text-base text-gray-600">Webbuilder 1</div>

        <p className="font-normal text-base text-gray-500 pl-5 pr-7">Computer  Modern clasic with wix support</p>


        <div className="flex ml-5">
              <p className="font-normal text-xl text-gray-600 ">$39.96</p>

              <div className="flex mt-2 gap-3 ml-4">
                  <p className="font-normal text-sm text-gray-400">$49.96</p>
                  <p className="font-normal text-sm text-red-500">(20% Off)</p>
              </div>
              
        </div>


        <button className=" mt-3 ml-6 w-64 h-12 rounded-xl bg-blue-500 font-normal text-base text-center text-white">{props.button}</button>



    </div>

    )
}
export default Dealcard;