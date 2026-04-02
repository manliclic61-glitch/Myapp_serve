import hero_1_logo_doodle from "../assets/hero_1_logo_doodle.jpg";
import logo_2_hero from "../assets/logo_2_hero.png";



export default function Home() {

  return (

    <>



      <div
        className="mt-10 bg-fixed h-[450px] bg-cover bg-center mb-10"
        style={{ backgroundImage: `url(${hero_1_logo_doodle})` }}
      >
        <div className="h-full flex items-end p-6 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
          <img
            src={logo_2_hero}
            alt="Logo"
            className="h-full object-contain"
          />
        </div>


      </div>
      <div className="p-5 m-5 ">

        <h1 className="text-4xl mb-4">Welcome to Quality Clothing</h1>

        <p className="text-gray-400 mb-6">Your one-stop shop for stylish apparel</p>
        <p className="text-gray-400">Discover our latest collection and find the perfect piece for your style.</p>








      </div>


    </>


  );
}