export default function Projects(){
    return (
        <div id ='projects'>
            <div className="projectDetails">
                <h2>
                    Projects
                </h2>
                <div className="projectColumn">
                    <div className="project1">
                         <img alt = 'WishWash' src = 'https://i.imgur.com/9l3ldZ0.png'></img>
                        <h4>
                            WishWash
                        </h4>
                        <h5>
                            Creating a library of books, movies, and broadways that allows users to be able to search through and see if there are any adaptations of a specific story in different entertainment mediums.
                        </h5>
                        <div className='projectTech'>
                            <h6>
                                Python | Django | Javascript | HTML | CSS
                            </h6>
                        </div>
                        <div className='projectLinks'>
                            <a href = 'https://github.com/nununuam/wishwash' target="_blank" rel="noopener noreferrer"><h6>GitHub Repo</h6></a>
                            <a href = 'https://amphitheatre.herokuapp.com/' target="_blank" rel="noopener noreferrer"><h6>Demo</h6></a>
                        </div>
                    </div>
                    <div className="project2">
                        <img alt = 'Revuu' src = 'https://i.imgur.com/C40H2fA.png'></img>
                        <h4>
                            Revuu
                        </h4>
                        <h5>
                            Revuu is an application that allows users to post/edit/delete their review on anything they like and give it a rating between 0 - 5. Users also have their own profile that shows all the reviews they have created.
                        </h5>
                        <div className='projectTech'>
                            <h6>
                                React | Express | Javascript | MongoDB | CSS
                            </h6>
                        </div>
                        <div className='projectLinks'>
                            <a href = 'https://github.com/janiceh94/Revuu' target="_blank" rel="noopener noreferrer"><h6>GitHub Repo</h6></a>
                            <a href = 'http://revuu.herokuapp.com/' target="_blank" rel="noopener noreferrer"><h6>Demo</h6></a>
                        </div>
                    </div>
                    <div className="project3">
                        <img alt = 'BunBuns' src = 'https://i.imgur.com/6hvQgFa.png'></img>
                        <h4>
                            BunBuns
                        </h4>
                        <h5>
                            On the BUNBUNS platform, users create recipes, share recipes along with photos, and follow other homecooks as they navigate the trials, tribulations, and celebrations inside the kitchen.
                        </h5>
                        <div className='projectTech'>
                            <h6>
                                Express | EJS | MongoDB | Javascript | CSS
                            </h6>
                        </div>
                        <div className='projectLinks'>
                            <a href = 'https://github.com/janiceh94/Full-Stack-Web-App' target="_blank" rel="noopener noreferrer"><h6>GitHub Repo</h6></a>
                            <a href = 'https://bunbun-seirfx119.herokuapp.com/' target="_blank" rel="noopener noreferrer"><h6>Demo</h6></a>
                        </div>
                    </div>
                    <div className="project4">
                        <img alt = 'FF7-Run' src = 'https://i.imgur.com/c48NzrN.png'></img>
                        <h4>
                            FF7-Run
                        </h4>
                        <h5>
                            Try to collect gil while avoiding enemies that rush towards you by using Spacebar to jump. Game over is when an enemy touches you.
                        </h5>
                        <div className='projectTech'>
                            <h6>
                                Javascript | HTML | CSS
                            </h6>
                        </div>
                        <a href = 'https://github.com/janiceh94/FF7-Run' target="_blank" rel="noopener noreferrer"><h6>GitHub Repo</h6>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
} 