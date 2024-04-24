import { LayoutGrid } from "@/components/LayoutGrid";
import Image from "next/image";
import Muszak from "@/logos/muszak.png"

export function Footer() {
  return <footer className="bg-gray-darkest py-14 laptop:py-28 px-5 laptop:px-16 w-full font-display">
    <LayoutGrid>

      <div className="flex flex-col space-y-3 laptop:col-span-4 col-start-1 text-xl font-extrabold">
        <a href="https://ddg.gg">NYATA 2024</a>
        <a href="https://ddg.gg">Adatkezelési tájékoztató</a>
        <a href="https://szakkoli.hu" target="_blank" rel="noopener noreferrer">szakkoli.hu</a>
        <a href="https://muszak.bme.hu" target="_blank" rel="noopener noreferrer">muszak.bme.hu</a>

      </div>
      <div className="flex flex-col items-end text-right col-span-4 col-start-10 space-y-3 text-base font-extrabold">
        <div className="mr-[-9px]"><Image src={Muszak} width={102} height={102} alt="MŰSZAK logo" /></div>
        <div>A 2024-es NYATA-t a Műegyetemi<br /> Szakkollégiumok Közössége (MŰSZAK) szervezi.</div>

      </div>
    </LayoutGrid>
  </footer>
}