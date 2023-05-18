import './single.css';
import Sidebar from "../../components/sidebar/sidebar";
import Singlepost from "../../components/singlepost/Singlepost";


const Single = () => {
  return(
      <>
          <div className="single">
              <Singlepost/>
              <Sidebar/>
          </div>
      </>
  )
}

export default Single;