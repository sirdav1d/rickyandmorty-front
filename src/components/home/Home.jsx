import "./home.css"
import Footer from "../footer/Footer"
import Navbar from "../navbar/Navbar"
import Card from "../card/Card"

function Home() {
  return <div className="Home">
    <Navbar/>
    <Card/>
    <Footer/>
  </div>;
}

export default Home;
