import Button from "@/reusable-ui/Button";
import Link from "next/link";

function Home() {
  return (
    <section className="homePage mx-5">
      <div className="rounded-3xl backdrop-blur-[30px] bg-backgroundBlur mt-20 px-5 py-20">
        <div className="flex flex-col gap-y-8">
          <h1 className="text-2xl text-white text-center font-bold">
            SAUTEZ SUR L’OCCASION AVEC “THÉTIPTOP” !
          </h1>
          <p className="text-white/60 text-center text-base">
            Pour l’ouverture de notre 10ème boutique, nous avons organisé un jeu
            concours où vous êtes 100% gagnant !
          </p>
        </div>
      </div>
      <Link href={"/"}>
        <Button label={"Participer au concours"} className="mt-12" />
      </Link>
    </section>
  );
}

export default Home;
