import Navigation from "@/components/navigation"
import PortfolioGrid from "@/components/portfolio-grid"

// Sample data - replace with your actual projects
const visualizationProjects = [
  {
    id: "vis-1",
    title: "Architectural Rendering",
    category: "visualization",
    image: "/placeholder.svg?height=600&width=800",
    description: "Photorealistic exterior visualization of modern architecture",
  },
  {
    id: "vis-2",
    title: "Product Showcase",
    category: "visualization",
    image: "/placeholder.svg?height=600&width=800",
    description: "Studio-quality product visualization for marketing",
  },
  {
    id: "vis-3",
    title: "Interior Design",
    category: "visualization",
    image: "/placeholder.svg?height=600&width=800",
    description: "Detailed interior visualization with custom lighting",
  },
  {
    id: "vis-4",
    title: "Urban Planning",
    category: "visualization",
    image: "/placeholder.svg?height=600&width=800",
    description: "Large-scale urban development visualization",
  },
  {
    id: "vis-5",
    title: "Scientific Visualization",
    category: "visualization",
    image: "/placeholder.svg?height=600&width=800",
    description: "Complex data visualization for scientific research",
  },
  {
    id: "vis-6",
    title: "Conceptual Visualization",
    category: "visualization",
    image: "/placeholder.svg?height=600&width=800",
    description: "Abstract concept visualization for branding",
  },
]

export default function VisualizationPortfolio() {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">3D Visualization Portfolio</h1>
            <p className="text-xl text-muted-foreground max-w-2xl">
              Explore my photorealistic visualizations for architecture, products, interiors, and conceptual projects.
            </p>
          </header>

          <PortfolioGrid projects={visualizationProjects} category="visualization" />
        </div>
      </div>
    </main>
  )
}

