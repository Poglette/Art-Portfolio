import Navigation from "@/components/navigation"
import PortfolioGrid from "@/components/portfolio-grid"

const animationProjects = [
  {
    id: "anim-1",
    title: "Desolate Landscape",
    category: "animation",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Excercice1.1-vSDRoww24nvz1M8z7mcFFIgldRoDWG.png",
    description: "Atmospheric scene featuring a haunting landscape with ethereal elements",
    details: {
      client: "Personal Project",
      duration: "3 weeks",
      tools: ["Photoshop", "After Effects", "Procreate"],
      role: "Digital Artist & Animator",
    },
  },
  // Keep other projects with placeholder images
  {
    id: "anim-2",
    title: "Product Animation",
    category: "animation",
    image: "/placeholder.svg?height=600&width=800",
    description: "Dynamic product showcase with mechanical animations",
    details: {
      client: "TechCorp Industries",
      duration: "2 weeks",
      tools: ["Cinema 4D", "After Effects", "Redshift"],
      role: "Motion Designer",
    },
  },
  {
    id: "anim-3",
    title: "Architectural Flythrough",
    category: "animation",
    image: "/placeholder.svg?height=600&width=800",
    description: "Cinematic camera movement through architectural space",
    details: {
      client: "ArchViz Ltd.",
      duration: "4 weeks",
      tools: ["3ds Max", "V-Ray", "After Effects"],
      role: "3D Artist & Animator",
    },
  },
  {
    id: "anim-4",
    title: "VFX Simulation",
    category: "animation",
    image: "/placeholder.svg?height=600&width=800",
    description: "Particle and physics-based visual effects",
    details: {
      client: "Indie Game Studio",
      duration: "6 weeks",
      tools: ["Houdini", "Nuke", "Redshift"],
      role: "VFX Artist",
    },
  },
  {
    id: "anim-5",
    title: "Logo Animation",
    category: "animation",
    image: "/placeholder.svg?height=600&width=800",
    description: "Dynamic brand animation for corporate identity",
    details: {
      client: "BrandX Agency",
      duration: "1 week",
      tools: ["After Effects", "Illustrator"],
      role: "Motion Graphics Designer",
    },
  },
  {
    id: "anim-6",
    title: "Short Film Sequence",
    category: "animation",
    image: "/placeholder.svg?height=600&width=800",
    description: "Narrative-driven animation sequence for storytelling",
    details: {
      client: "Film School Project",
      duration: "8 weeks",
      tools: ["Maya", "After Effects", "Premiere Pro"],
      role: "Animator & Compositor",
    },
  },
]

export default function AnimationPortfolio() {
  return (
    <main
      className="min-h-screen"
      style={{ background: "linear-gradient(to bottom, #04082f, #26272d)", backgroundAttachment: "fixed" }}
    >
      <div className="bg-black/50 backdrop-blur-sm fixed w-full z-10">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <Navigation />
        </div>
      </div>

      <div className="pt-24 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <header className="mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Animation Portfolio</h1>
            <p className="text-xl text-white/80 max-w-2xl">
              Discover my animation work spanning atmospheric scenes, character animations, and visual storytelling.
            </p>
          </header>

          <PortfolioGrid projects={animationProjects} category="animation" />
        </div>
      </div>
    </main>
  )
}

