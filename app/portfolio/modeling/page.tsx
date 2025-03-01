import Navigation from "@/components/navigation"
import PortfolioGrid from "@/components/portfolio-grid"

const modelingProjects = [
  {
    id: "model-1",
    title: "Pixel Art Character - Tony",
    category: "modeling",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/tony_porc2-8eVL1w6rnba8YnEE3uVICWt7krzmvx.png",
    description: "Detailed pixel art character design of a charming pig character",
    details: {
      client: "Personal Project",
      duration: "2 weeks",
      tools: ["Aseprite", "Photoshop", "Custom Pixel Tools"],
      role: "Pixel Artist & Character Designer",
    },
  },
  {
    id: "model-2",
    title: "Architectural Interior",
    category: "modeling",
    image: "/placeholder.svg?height=600&width=800",
    description: "Detailed interior space with custom furniture",
    details: {
      client: "Modern Spaces Architecture",
      duration: "4 weeks",
      tools: ["3ds Max", "Corona Renderer", "Forest Pack", "RailClone"],
      role: "3D Environment Artist",
    },
  },
  {
    id: "model-3",
    title: "Character Design",
    category: "modeling",
    image: "/placeholder.svg?height=600&width=800",
    description: "Fully rigged character model for animation",
    details: {
      client: "GameStudio XYZ",
      duration: "8 weeks",
      tools: ["Maya", "ZBrush", "Marvelous Designer", "Substance Painter"],
      role: "Character Artist",
    },
  },
  {
    id: "model-4",
    title: "Product Visualization",
    category: "modeling",
    image: "/placeholder.svg?height=600&width=800",
    description: "Photorealistic product model for marketing",
    details: {
      client: "TechGear Products",
      duration: "3 weeks",
      tools: ["Blender", "Cycles", "Substance Painter"],
      role: "Product Visualization Artist",
    },
  },
  {
    id: "model-5",
    title: "Environment Design",
    category: "modeling",
    image: "/placeholder.svg?height=600&width=800",
    description: "Detailed environment model for game development",
    details: {
      client: "Epic Games",
      duration: "12 weeks",
      tools: ["Maya", "ZBrush", "Substance Designer", "Unreal Engine"],
      role: "Senior Environment Artist",
    },
  },
  {
    id: "model-6",
    title: "Mechanical Assembly",
    category: "modeling",
    image: "/placeholder.svg?height=600&width=800",
    description: "Complex mechanical assembly with moving parts",
    details: {
      client: "Industrial Solutions Ltd",
      duration: "5 weeks",
      tools: ["Fusion 360", "KeyShot", "AutoCAD"],
      role: "Technical 3D Artist",
    },
  },
]

export default function ModelingPortfolio() {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Modélisation 3D</h1>
            <p className="text-xl text-white/80 max-w-2xl">
              Explore my collection of detailed 3D models, pixel art, and character designs.
            </p>
          </header>

          <PortfolioGrid projects={modelingProjects} category="modeling" />
        </div>
      </div>
    </main>
  )
}

