import picture from './assets/My_Picture.JPG'


const App = () => {


    return (
        <div>
            <img src={picture}
                 alt="My_Picture"
                 className='w-full max-w-sm object-contain'/>
            <h1 className="text-center font-bold text-red-400 text-9xl"> Hello world! </h1>
        </div>

    )
}

export default App
