import hero_1_logo_doodle from "../assets/hero_1_logo_doodle.jpg";

export default function Home() {
  return (

    <>

   <img src={hero_1_logo_doodle} alt="Hero"  className="w-full" />
      <div className="text-center mt-10">
        <h1 className="text-4xl mb-4">Welcome to Quality Clothing</h1>

        <p className="text-gray-400 mb-6">Your one-stop shop for stylish apparel</p>
        <p className="text-gray-400">Discover our latest collection and find the perfect piece for your style.</p>
        

      </div>
   
    </>

  );
}