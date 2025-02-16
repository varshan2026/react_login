import dashboard from "../assets/fail.jpg";

function Fail(){
    return(
        <div className="">
            <img src={dashboard} className="relative w-[100vw] h-[100vh] object-cover"></img>

            <div className="absolute top-50 left-100 hidden sm:hidden md:hidden lg:block p-8">
                <h1 className=" text-8xl font-black text-white"> Login Failed!</h1>
                <h3 className=" text-5xl font-black text-white pl-2 mt-5"> Are you sure that’s you?</h3>
            </div>
        </div>
    )
}

export default Fail;