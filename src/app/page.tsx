import Herobanner from "@/components/herobanner";
import Header from "@/components/header";
import Herosection from "@/components/herosection";

export default function Home() {
  return (
    <main className="mx-auto">
      <div className="bg-slate-900">
      <Herobanner  /></div>
      <Header/>
      <Herosection/></main>
  );
}