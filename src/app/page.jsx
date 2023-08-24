import Link from "next/link";

function Home() {
  return (
    <div className="homePage">
      <h1>Page d'accueil</h1>
      {/* Votre contenu de la page d'accueil ici */}
      <Link href="/about">À propos de nous</Link>
    </div>
  );
}

export default Home;
