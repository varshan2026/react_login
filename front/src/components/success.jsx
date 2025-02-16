import success from "../assets/success.jpg";

function Success(){
    return(
        <div className="">
            <img src={success} className="relative w-[100vw] h-[100vh] object-cover"></img>

            <div className="absolute top-50 left-5 hidden sm:hidden md:hidden lg:block p-5">
                <h1 className=" text-9xl font-black text-white">You're in!</h1>
                <h3 className=" text-5xl font-black text-white pl-8 mt-5">let’s do something!</h3>
            </div>
        </div>
    )
}

export default Success;