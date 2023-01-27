import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <div className="">
          <div className="container">
           <h1 className='text-xl md:text-5xl font-bold py-5 uppercase'>Hey, My name is Alidu Ali</h1> 
            <p className="py-2 text">
              I am a passionate frontend developer based in Accra, Ghana.
              My specialities are <strong>React JS</strong> and <strong>Tailwind CSS</strong>, 
              and I Planned and developed interfaces that simplified overall management and offered ease of use.
            </p>
            <p className="uppercase rounded-lg py-3 px-10 
              bg-slate-200 text-blue-500 font-bold my-10 self-center 
              hover:text-gray-200 hover:bg-blue-500 hover:outline-double"
            >
              <Link to='/index.html/projects'>
                See my Projects
              </Link>
            </p>
          </div>
        </div>
    )
}