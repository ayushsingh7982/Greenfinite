import Navbar from "../components/ui/Navbar";
import Footer from "../components/ui/Footer";
export default function Home() {
  return (
    <div
    className="min-h-screen flex flex-col"
    style={{ backgroundImage: "url('bg.jpg')", backgroundSize: "cover" }}
  >
    <div className="w-screen">
    <div className="min-h-screen flex flex-col">
    <Navbar />
    <main className="flex-1 flex justify-center items-center min-h-[82.2vh]">
      
    </main>
    <Footer />
  </div>
    </div>

  </div>
  );
}
