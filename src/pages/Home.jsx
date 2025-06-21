import Navbar from "../components/ui/Navbar";
import Footer from "../components/ui/Footer";
export default function Home() {
  return (
    <div
      className="min-h-screen flex flex-col"
      style={{ backgroundImage: "url('bg.jpg')", backgroundSize: "cover" }}
    >
      <div className="w-screen">
        <Navbar />
        {/* <img src="logo.png" alt="Logo1" className="w-1/3 mx-auto" /> */}
        
        <Footer />
      </div>

    </div>
  );
}
