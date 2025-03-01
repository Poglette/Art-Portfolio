import Navigation from "@/components/navigation"
import PortfolioGrid from "@/components/portfolio-grid"

const technicalProjects = [
  {
    id: "tech-1",
    title: "Pixel Art Portrait",
    category: "technical",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/comrade-MsEztQKljSPl2zt3RTQfcW5Nmp2ROc.png",
    description: "Detailed pixel art portrait showcasing precise technical execution",
    details: {
      client: "Personal Project",
      duration: "1 week",
      tools: ["Aseprite", "Custom Pixel Tools", "Digital Color Theory"],
      role: "Technical Pixel Artist",
    },
  },
  // Keep other projects with placeholder images
  {
    id: "tech-2",
    title: "Mechanical Component Design",
    category: "technical",
    image: "/placeholder.svg?height=600&width=800",
    description: "Precision technical drawings for manufacturing",
    details: {
      client: "Engineering Solutions Ltd",
      duration: "3 weeks",
      tools: ["AutoCAD", "SolidWorks", "Technical Drawing Suite"],
      role: "Technical Artist",
    },
  },
  {
    id: "tech-3",
    title: "Architectural Section",
    category: "technical",
    image: "/placeholder.svg?height=600&width=800",
    description: "Cross-sectional technical drawing of building structure",
    details: {
      client: "ArchCorp",
      duration: "2 weeks",
      tools: ["AutoCAD", "Revit", "Architectural Blueprints"],
      role: "Technical Illustrator",
    },
  },
  {
    id: "tech-4",
    title: "Engineering Schematics",
    category: "technical",
    image: "/placeholder.svg?height=600&width=800",
    description: "Detailed engineering drawings with specifications",
    details: {
      client: "GlobalTech Industries",
      duration: "4 weeks",
      tools: ["MATLAB", "Simulink", "Engineering Standards"],
      role: "Schematic Designer",
    },
  },
  {
    id: "tech-5",
    title: "Industrial Design Blueprint",
    category: "technical",
    image: "/placeholder.svg?height=600&width=800",
    description: "Technical blueprints for industrial product design",
    details: {
      client: "Innovate Products Inc.",
      duration: "5 weeks",
      tools: ["Rhino", "KeyShot", "Industrial Design Principles"],
      role: "Blueprint Designer",
    },
  },
  {
    id: "tech-6",
    title: "Construction Details",
    category: "technical",
    image: "/placeholder.svg?height=600&width=800",
    description: "Detailed construction drawings with measurements",
    details: {
      client: "BuildRight Constructions",
      duration: "3 weeks",
      tools: ["Bluebeam Revu", "Construction Standards", "On-Site Measurement Tools"],
      role: "Construction Detailer",
    },
  },
]

export default function TechnicalDrawingPortfolio() {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Technical Drawing Portfolio</h1>
            <p className="text-xl text-white/80 max-w-2xl">
              Explore my collection of precise technical artwork, including pixel art and detailed technical
              illustrations.
            </p>
          </header>

          <PortfolioGrid projects={technicalProjects} category="technical" />
        </div>
      </div>
    </main>
  )
}

