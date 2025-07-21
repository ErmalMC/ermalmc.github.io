import picture from './assets/My_Picture.JPG'
import ProfessionalTimeline from './ProfessionalTimeline.jsx'
import ThemeToggle from './ThemeToggle.jsx'
import { FaGithub, FaLinkedin, FaEnvelope, FaFileDownload } from 'react-icons/fa';

const Showcase = () => {

    return(
        <div className='mt-10'>
            <ProfessionalTimeline />
        </div>
    )

}

const About = () => {
    return (
        <div className="flex items-center gap-10 p-4">
            <img
                src={picture}
                alt="My_Picture"
                className="w-44 h-auto object-contain rounded-lg"
            />
            <div>
                <p className="text-xl font-medium dark:text-white mb-4">
                    Hey, Ermal here — a 21-year-old software engineer passionate about full-stack systems and robotics.
                </p>
                <div className="flex items-center gap-3 flex-wrap">
                    <a
                        href="/Ermal's_CV.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm px-5 py-2 bg-gray-100 text-black dark:text-white rounded-full shadow-md  dark:bg-blue-500  transition"
                    >
                        Resume <FaFileDownload />
                    </a>

                    <a
                        href="https://github.com/ErmalMC"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center text-black dark:text-white rounded p-2 transition"
                    >
                        <FaGithub className="w-5 h-5" />
                    </a>

                    <a
                        href="https://www.linkedin.com/in/ermal-baki/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center text-black dark:text-white rounded p-2 transition"
                    >
                        <FaLinkedin className="w-5 h-5" />
                    </a>

                    <a
                        href="mailto:ermalbaki84@gmail.com"
                        className="flex items-center justify-center text-black dark:text-white rounded p-2 transition"
                    >
                        <FaEnvelope className="w-5 h-5" />
                    </a>
                </div>
            </div>
        </div>
    );
};



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