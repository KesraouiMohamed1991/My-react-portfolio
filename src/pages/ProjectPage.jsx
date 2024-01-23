import { useParams } from "react-router-dom"
import { Link } from "react-router-dom";

function ProjectPage() {

    const { id } = useParams();
 console.log(id);
  return (
      <div   className="h-screen  mx-auto sm:w-5/6 flex items-start justify-center text-red-50 flex-col w-screen ">
      <h1>Project Page</h1>
      <p>This is the project page</p>
      <p>{id}</p>
      <Link to="/">Go back to the homepage</Link>
      <br />  

      
    </div>
  )
}

export default ProjectPage
