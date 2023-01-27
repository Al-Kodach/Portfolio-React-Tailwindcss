export default function About() {
    return (
        <div id="about">
            <div className="container">
                <div className=" text-gray-500">
                    <h1 className="title text-gray-700">About Me</h1>
                    <div className="bg-blue-700 w-8 lg:w-12 h-1 m-auto rounded-full my-3"></div>
                    <p className="text py-5 ">
                        Hardware and Software Installation, Web Security, and Self Starter.
                        I classify myself as a utility player, a critical thinker, and the ability to implement methods for easy doing of things.
                        When I'm not coding, I like to play with my cat, 
                        clean up my environment, and also like to go hiking. 
                    </p>
                </div>

                <div className=" text py-5">
                    <h3 className="title py-2 pb-5 text-gray-700">My Skills</h3>
                    <div className="grid grid-cols-auto-fit-100 gap-4 md:grid-cols-auto-fit-150 md:py-5">
                        <span className="skill">HTML</span>
                        <span className="skill">CSS</span>
                        <span className="skill">JavaScript</span>
                        <span className="skill">React</span>
                        <span className="skill">Git</span>
                        <span className="skill">Figma</span>
                        <span className="skill">Tailwind CSS</span>
                        <span className="skill">Node JS</span>
                    </div>
                </div>
            </div>
        </div>
    )
}