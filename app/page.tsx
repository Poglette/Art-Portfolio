import Navigation from '@/components/navigation';
import { ArrowDownCircle } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <div className="video-container">
        <iframe
          src="https://www.youtube.com/embed/gJ9LfYDVA6Y?autoplay=1&mute=1&loop=1&playlist=gJ9LfYDVA6Y&controls=0&showinfo=0&rel=0"
          title="Portfolio Showreel"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute top-0 left-0 w-full h-full"
        ></iframe>

        <div className="menu-overlay">
          <Navigation />

          <div className="flex flex-col items-center justify-center h-full">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 text-center">
              Portfolio NAD
            </h1>
            <p className="text-xl md:text-2xl text-white/80 max-w-2xl text-center mb-8">
              Présentation de ma candidature
            </p>
            <Link
              href="#about"
              className="flex items-center gap-2 text-white hover:text-white/80 transition-colors"
            >
              <span>Explorez mes travaux</span>
              <ArrowDownCircle className="animate-bounce" />
            </Link>
          </div>

          <div className="flex justify-between items-center w-full">
            <div className="text-white/80">© 2025 Émile Harel-Richard</div>

            {/* LIENS MEDIA SOCIAUX */}
            {/* <div className="flex gap-4">
              <a href="#" className="text-white hover:text-white/80 transition-colors">
                Instagram
              </a>
              <a href="#" className="text-white hover:text-white/80 transition-colors">
                ArtStation
              </a>
              <a href="#" className="text-white hover:text-white/80 transition-colors">
                Behance
              </a>
            </div> */}
          </div>
        </div>
      </div>

      <section
        id="about"
        className="py-20 px-6 bg-secondary/50 backdrop-blur-sm"
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-justify">
              <h2 className="text-4xl font-bold mb-8 text-white text-center">
                À propos
              </h2>
              <p className="text-lg mb-6 text-white/80">
                Je me présente, Émile, un grand admirateur d'art. Guitariste à
                mes heures perdues, j'apprends à transformer les images en une
                autre forme de beauté afin de les faire naître à l'écran.
              </p>
              <p className="text-lg mb-6 text-white/80">
                Après plusieurs années d'étude en sciences humaines, j'entame
                mon parcours dans le monde de la 3D à vive allure.
              </p>
              <div className="flex gap-4 justify-center">
                <Link
                  href="/portfolio/modeling"
                  className="px-6 py-3 bg-white text-secondary font-medium rounded hover:bg-white/90 transition-colors"
                >
                  Portfolio
                </Link>
              </div>
            </div>
            <div className="aspect-square bg-white/5 backdrop-blur-sm rounded-lg overflow-hidden border border-white/10">
              <img
                src="/images/2024.jpg"
                alt="3D Artist Portrait"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
        <div className="max-w-6xl mx-auto mt-12">
          <div className="aspect-video w-full overflow-hidden rounded-lg bg-secondary">
            <iframe
              src="https://www.youtube.com/embed/gJ9LfYDVA6Y?playlist=gJ9LfYDVA6Y&controls=0&showinfo=0&rel=0"
              title="Portfolio Showreel"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
        </div>
      </section>
    </main>
  );
}
