import MyCarousel from "../components/MyCarousel";

import localFont from 'next/font/local'

const iphoneFont = localFont({
  src: "../fonts/SF-Pro-Display-Medium.otf",
  variable: "--font-SF",
  weight: "100 900",
}
);

export default function Home() {
  return (
    <div className="w-full">
      <main className="w-full">
        <MyCarousel />

        <div className="w-[90%] mx-auto mt-4 mb-12 lg:w-[1280px] lg:my-20">
          <h1 className={`${iphoneFont.className} text-center  text-xl   xl:text-5xl `}>Innovación al alcance de todos</h1>
          <p className="text-center text-xs text-gray-600 mt-4 " >En AppleTecno Chascomús, conectamos a la gente con la tecnología de punta. Descubre en nuestra tienda la magia de Apple con productos que inspiran y enriquecen tu vida diaria.</p>
        </div>

      </main>
      <footer className="bg-[#0a0a0acc] w-full block">
        <div>
          <p>redes</p>
          <p>face</p>
          <p>ig</p>
        </div>
        <div>
          <p>Navegacion</p>
          <p>Inicio</p>
          <p>Productos</p>
          <p>Info</p>
        </div>
      </footer>
    </div>
  );
}
