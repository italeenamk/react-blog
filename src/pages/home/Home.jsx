import './home.css';
import Header from "../../components/header/Header";
import Posts from "../../components/posts/posts";
import Sidebar from "../../components/sidebar/sidebar";

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