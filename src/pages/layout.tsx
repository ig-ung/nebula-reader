import NavbarTop from "@/components/navbar";
import { CarouselCard } from "@/components/carousel-card";

export default function Layout({ children }: { children: React.ReactNode}) {
  return (
    <div className="">
      <NavbarTop />
      <CarouselCard />
    </div>
  )
}