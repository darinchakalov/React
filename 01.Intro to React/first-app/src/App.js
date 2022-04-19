import "./App.css";
import Advertisement from "./components/Advertisment.js";
import Carousel from "./components/Carousel.js";
import Cart from "./components/Cart.js";
import Features from "./components/Features.js";
import Footer from "./components/Footer.js";
import Header from "./components/Header.js";
import Hero from "./components/Hero.js";
import News from "./components/News.js";
import Products from "./components/Products.js";
import SearchArea from "./components/SearchArea.js";
import ShopBanner from "./components/ShopBanner.js";
import Testimonial from "./components/Testimonial.js";

function App() {
	return (
		<div>
			<Header></Header>
			<SearchArea></SearchArea>
			<Hero></Hero>
			<Features></Features>
			<Products></Products>
			<Cart></Cart>
			<Testimonial></Testimonial>
			<Advertisement></Advertisement>
			<ShopBanner></ShopBanner>
			<News></News>
			<Carousel></Carousel>
			<Footer></Footer>
		</div>
	);
}

export default App;
