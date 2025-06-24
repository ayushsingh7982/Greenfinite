import Navbar from "../components/ui/Navbar";
import Footer from "../components/ui/Footer";
import UploadPage from "./UploadPage"; // or import UploadForm if extracted

export default function Home() {
  return (
    <div
      className="min-h-screen flex flex-col"
      style={{ backgroundImage: "url('bg.jpg')", backgroundSize: "cover" }}
    >
      <div className="w-screen">
        <div className="min-h-[30vh] flex flex-col">
          <Navbar />
          <main className="flex-1 flex justify-center items-center">
            <UploadPage /> {/* Add your upload component here */}
          </main>
          <Footer />
        </div>
      </div>
    </div>
  );
}
