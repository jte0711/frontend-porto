import CsSearchbar from "@component/CsSearchbar";
import CsBody from "@module/Body";
import Navbar from "@module/Navbar";

export default function Page(): JSX.Element {
  return (
    <main className="w-full lg:w-[730px] flex flex-col justify-center items-center">
      <Navbar />
      <CsSearchbar containerClass="mt-9" />
      <CsBody />
    </main>
  );
}
