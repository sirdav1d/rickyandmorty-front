import "./home.css"
import Footer from "../footer/Footer"
import Navbar from "../navbar/Navbar"
import CardList from "components/cardList/CardList";

function Home() {
  return <div className="Home">
    <Navbar/>
    <CardList/>
    <Footer/>
  </div>;
}

export default Home;
