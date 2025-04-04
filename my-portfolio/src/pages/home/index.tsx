import { useState } from "react";
import BurgerMenu from "../../components/NavigationBar/burgerMenuButton";
import Footer from "../../components/footer";
import HeaderDisplay from "../../components/NavigationBar/headerDisplay";
import Mylife from "../../components/myLife";
import BodySection from "../../components/bodySection";

const Home = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleMenuToggle = () => {
        setMenuOpen(!menuOpen);
        console.log("menuOpen:", menuOpen);
    };

    return (
        <div className="flex flex-col min-h-screen bg-orangeSun text-white relative">
            <BurgerMenu setMenuOpen={handleMenuToggle} />
            <HeaderDisplay menuOpen={menuOpen} />

            <BodySection />

            <Mylife />

            <Footer />

            <div className="bg-softGreen text-white p-4">
                This section uses your soft green background
            </div>
        </div>
    );
};

export default Home;
