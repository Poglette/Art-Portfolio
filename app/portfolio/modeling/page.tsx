import CenteredLayout from "@/components/layout/CenteredLayout";
import PortfolioGrid from "@/components/portfolio-grid";

const modelingProjects = [
  {
    id: "model-1",
    title: "Chaise Ikea",
    category: "modeling",
    image: "/chaise.png",
    description:
      "Représentation d'une chaise Ikea réalisé avec une référence orthographique",
    details: {
      client: "Personal Project",
      duration: "2 weeks",
      tools: ["Aseprite", "Photoshop", "Custom Pixel Tools"],
      role: "Pixel Artist & Character Designer",
    },
  },
  {
    id: "model-2",
    title: "Coffre",
    category: "modeling",
    image: "/coffre.png",
    description:
      "Modélisation réalisé avec des formes de base et une image de référence",
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
];

export default function ModelingPortfolio() {
  return (
    <CenteredLayout>
      <div className="pt-24 px-6 w-full">
        <div className="max-w-7xl mx-auto">
          <header>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Modélisation 3D
            </h1>
            <p className="text-xl text-white/80 max-w-2xl">
              Travaux réalisé en modélisation dans Maya.
            </p>
          </header>
        </div>
      </div>
      <div className="w-full max-w-7xl">
        <PortfolioGrid projects={modelingProjects} category="modeling" />
      </div>
      <div />
      <div />
    </CenteredLayout>
  );
}
