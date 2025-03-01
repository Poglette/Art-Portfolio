import Navigation from "@/components/navigation"

export default function VideoPortfolio() {
  return (
    <main className="min-h-screen bg-background">
      <div className="bg-black/50 backdrop-blur-sm fixed w-full z-10">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <Navigation />
        </div>
      </div>

      <div className="pt-24 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <header className="mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Video Projects</h1>
            <p className="text-xl text-muted-foreground max-w-2xl">
              Présentation de 2 reportage que j'ai réalisé.
            </p>
          </header>

          <div className="grid gap-16">
            {/* First Video Project */}
            <div className="space-y-6">
              <div className="aspect-video w-full overflow-hidden rounded-lg bg-secondary">
                <iframe
                  src="https://www.youtube.com/embed/YOUR_FIRST_VIDEO_ID"
                  title="First Project"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">Le Drag au delà de la caméra</h2>
                <p className="text-muted-foreground">
                  Reportage réalisé pour mon cours d'intégration afin de documenter le parcours de ma coéquipière et moi-même dans la création d'un événement sur le drah. Ce projet nous a permis de mettre en lumière les différentes étapes de l'organisation, de la conception à la réalisation finale.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-secondary rounded-full text-sm">3D Animation</span>
                  <span className="px-3 py-1 bg-secondary rounded-full text-sm">Visual Effects</span>
                  <span className="px-3 py-1 bg-secondary rounded-full text-sm">Cinema 4D</span>
                </div>
              </div>
            </div>

            {/* Second Video Project */}
            <div className="space-y-6">
              <div className="aspect-video w-full overflow-hidden rounded-lg bg-secondary">
                <iframe
                  src="https://www.youtube.com/embed/YOUR_SECOND_VIDEO_ID"
                  title="Second Project"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">Court dodumentaire sur l'amour</h2>
                <p className="text-muted-foreground">
                  Detailed description of your second video project. Discuss the inspiration, technical aspects, and the
                  impact you aimed to achieve. Include any notable recognition or client feedback received.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-secondary rounded-full text-sm">Motion Graphics</span>
                  <span className="px-3 py-1 bg-secondary rounded-full text-sm">Character Animation</span>
                  <span className="px-3 py-1 bg-secondary rounded-full text-sm">After Effects</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

