import picture from './assets/My_Picture.JPG'

const Navbody = () => {
    return (
        <div>

        </div>
    )
}

const Navbar = () => {
    return (
        <div>

        </div>
    )
}

const Showcase = () => {

    return(
        <div>


        </div>
    )

}

const About = () =>{

    return(
        <div className='mx-auto'>
            <img src={picture}
                 alt="My_Picture"
                 className='w-full max-w-sm object-contain'/>
            <p>
                
            </p>

        </div>
    )

}



const TotalUI = () => {

    return(
        <div className="flex justify-center">
            <div className="w-full max-w-md">
                <About />

            </div>
        </div>
    )

}


const App = () => {


    return (
        <div className='bg-amber-200 min-h-screen'>
            <h1 className="text-center font-bold text-red-400 text-9xl"> Hello world! </h1>
            <TotalUI/>
        </div>

    )
}

export default App