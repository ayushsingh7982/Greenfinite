import Navbar from "../components/ui/Navbar";

export default function Home() {
  return (
    <div
      className="min-h-screen flex flex-col"
      style={{ backgroundImage: "url('bg.jpg')", backgroundSize: "cover" }}
    >
      <div className="w-screen">
        <Navbar />
        <img src="asset2.jpg" alt="Logo1" className="w-1/3 mx-auto" />
        <h1 className="font-brand text-4xl text-black">Is Tailwind Config Working?</h1>

      </div>

    </div>
  );
}
