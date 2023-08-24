import Button from "@/reusable-ui/Button";
import Logo from "@/reusable-ui/Logo";
import Link from "next/link";

function Home() {
  return (
    <section className="homePage flex flex-col justify-center w-full items-start  max-w-[1560px] mx-auto px-5">
      <div className="relative rounded-3xl backdrop-blur-[30px]  bg-backgroundBlur mt-12 px-5 py-10 xl:h-[500px] max-w-[764px] mx-auto lg:rounded-[53px] lg:px-14 xl:ml-5 lg:mt-12">
        <div className="hidden xl:block mb-10">
          <Logo />
        </div>
        <div className="flex flex-col gap-y-8 lg:pt">
          <h1 className="text-2xl text-white text-center font-bold xl:text-5xl xl:text-left">
            SAUTEZ SUR L’OCCASION AVEC “THÉTIPTOP” !
          </h1>
          <p className="text-white/60 text-center text-base xl:text-lg xl:text-left">
            Pour l’ouverture de notre 10ème boutique, nous avons organisé un jeu
            concours où vous êtes 100% gagnant !
          </p>
        </div>
        <Link href={""} className="absolute -bottom-12 xl:flex gap-x-7 hidden">
          <span
            className="text-3xl font-bold py-8 px-16 rounded-[30px] bg-greenTip text-white"
            href={""}
          >
            Participez au concours
          </span>
          <span
            className=" text-3xl font-bold py-8 px-8 rounded-[30px] bg-greenTip/75 text-white"
            href={""}
          >
            →
          </span>
        </Link>
      </div>
      <Link href={"/"} className="block xl:hidden max-w-[400px] mx-auto w-full">
        <Button label={"Participer au concours"} className="mt-12 lg:my-7" />
      </Link>
    </section>
  );
}

export default Home;
