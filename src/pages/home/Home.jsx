import './home.css';
import Header from "../../header/Header";
import Posts from "../../posts/posts";
import Sidebar from "../../sidebar/sidebar";

const Home = () => {
  return(
      <>
          <Header/>
          <div className="home">
              <Posts/>
              <Sidebar/>
          </div>
      </>
  )
}

export default Home;