import projects from '../ProjectsData.js'

export default function Projects() {
    const projectsElement = projects.map(project => (
        <div key={project.name} className='py-10 md:py-6 lg:py-10 md:grid grid-cols-2 place-items-center gap-10 sm:text-sm ' id='projects'>
            
            <img className='h-auto ' src={project.img} alt="" />

            <div className='flex flex-col items-center'>
                <h1 className='py-4 text-2xl text-zinc-700 font-extrabold lg:text-3xl'>{project.name}</h1>
                <p className='text md:container pb-8'>{project.description}</p>

                <div>
                    {project.live.length > 0 && 
                        <a href={`${project.live}`} target='_blank'
                            className='linkCode hover:text-gray-700 mr-5 ' 
                        >
                            Live Link
                        </a>
                    }
                        <a href={`${project.code}`} target='_blank'
                            className='linkCode s:my-5 hover:text-gray-700' 
                        
                        >
                            Code Link
                        </a>
                </div>
            </div>
        </div>
    ))

    return (
        <div className="container md:min-w-full md:px-10 lg:px-20 ">
                <h1 className="title text-gray-700">Projects</h1>
                <div className="bg-blue-700 w-8 lg:w-12 h-1 m-auto rounded-full my-4"></div>
                <p className=" mb-10 text md:m-auto md:pb-8">
                    All my projects include links to the code and live version. Click the div to learn more about each one.
                </p>
                { projectsElement }
        </div>
    )
}