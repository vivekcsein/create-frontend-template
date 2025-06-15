// import CardGamev1 from "@/components/context/games/CardGamev1";
// import Border from "@/components/layouts/Border";
import Searchbar_main from "@/components/ui/tailwindcss/Searchbar/Searchbar_main";

export default function Home() {
  return (
    <main className="w-full bg-background h-lvh">
      {/* <CardGamev1 /> */}
      {/* <Border variant="offset-bottom-left" size="medium">
        <div className="w-100 h-50 bg-accent rounded-sm  "></div>
      </Border> */}
      <Searchbar_main />
    </main>
  );
}
