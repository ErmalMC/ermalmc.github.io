import picture from './assets/My_Picture.JPG'
import ProfessionalTimeline from './ProfessionalTimeline.jsx'
import ThemeToggle from './ThemeToggle.jsx'

const Showcase = () => {

    return(
        <div className='mt-10'>
            <ProfessionalTimeline />
        </div>
    )

}

const About = () =>{

    return(
        <div className="flex items-center gap-40 p-4">
            <img
                src={picture}
                alt="My_Picture"
                className="w-48 h-auto object-contain rounded-lg"
            />
            <p className="text-2xl font-medium dark:text-white">
                Hi. Ermal here!!
            </p>
        </div>
    )

}



const TotalUI = () => {

    return(
        <div className="flex justify-center mt-28">
            <div className="w-full max-w-xl">
                <div className="flex justify-end mt-4">
                    <ThemeToggle />
                </div>
                <About />
                <Showcase />
            </div>
        </div>
    )

}

const App = () => {


    return (
        <div className='min-h-screen dark:bg-gray-900'>
            <TotalUI />
        </div>

    )
}

export default App