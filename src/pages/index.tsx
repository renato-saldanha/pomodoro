import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Inicio from "./Inicio";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center mt-30 text-primario text-center space-y-40">
      <Header />
      <Inicio />      
      <Footer />
    </div>
  );
}
