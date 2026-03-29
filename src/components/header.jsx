import { Link } from 'react-router-dom';
import logo_1_hero from "../assets/logo_1_hero.png";
import hero_1_logo_doodle from "../assets/hero_1_logo_doodle.jpg";

export default function Header() {
    return (
        <>
            <div className="border-b border-gray-800 px-6 py-4 flex justify-between items-center shadow-lg">
                <img src={logo_1_hero} alt="Logo" className="h-10" />

                <div className="space-x-4 text-gray-400">
                    <Link to="/">Home</Link>
                    <Link to="/products">Products</Link>
                    <Link to="/cart">Cart</Link>
                </div>


            </div>
         
        </>
    );
}