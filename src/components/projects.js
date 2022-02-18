
const projects = [
    {
      id: 1,
      name: 'Website sell sneaker(Java Servlet)',
      linkGitHub: 'https://github.com/thanhnam2811/FashionWeb'
    },
    {
      id: 2,
      name: 'Manage sneaker stores Winform(Java)',
      linkGitHub: 'https://github.com/CaoHoaiTan/QuanLiCuaHangBanGiay'
    },
    {
      id: 3,
      name: 'App English card (Flutter dart)',
      linkGitHub: 'https://github.com/CaoHoaiTan/app_english_card'
    },
    {
        id: 4,
        name: 'Website sell fashion clothes',
        linkGitHub: 'https://github.com/thanhnam2811/SneakersWeb'
      },
  
  ]
  
function Projects(){

    return(
      <div  className="project">
           <ul>
                {
                  projects.map((project) => (
                    <li key= {project.id} className = {project.id}>
                    <a href={project.linkGitHub} className= {project.id}> <i className="fab fa-github-alt"> </i>{project.name}</a>
                    </li>
                  ))
                 }

           </ul> 
                                      
      </div>

    )
}

export default Projects;