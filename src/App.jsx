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
        <div className="flex items-center gap-20 p-4">
            <img
                src={picture}
                alt="My_Picture"
                className="w-64 h-auto object-contain rounded-lg"
            />
            <p className="text-2xl font-medium">
                Hi. Ermal here!!
            </p>
        </div>
    )

}



const TotalUI = () => {

    return(
        <div className="flex justify-center mt-28">
            <div className="w-full max-w-md">
                <About />

            </div>
        </div>
    )

}

const ThemeToggle = () => {


    return(
        <div>

        </div>
    )
}

const App = () => {


    return (
        <div className='min-h-screen'>


            <TotalUI />
        </div>

    )
}

export default App