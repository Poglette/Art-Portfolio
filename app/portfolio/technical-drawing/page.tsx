import CenteredLayout from "@/components/layout/CenteredLayout";
import PortfolioGrid from "@/components/portfolio-grid";

const technicalProjects = [
  {
    id: "tech-1",
    title: "Église",
    category: "technical",
    image: "/eglise.png",
    description: "Dessin de batiment à 2 points de fuites",
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
    title: "Magasin de beigne",
    category: "technical",
    image: "/beigne.png",
    description: "Dessin de batiment à 2 points fuites",
    details: {
      client: "Engineering Solutions Ltd",
      duration: "3 weeks",
      tools: ["AutoCAD", "SolidWorks", "Technical Drawing Suite"],
      role: "Technical Artist",
    },
  },
  {
    id: "tech-3",
    title: "La forêt désolé",
    category: "technical",
    image: "/foret.png",
    description: "Défi personnel: un dessin, une histoire",
    details: {
      client: "ArchCorp",
      duration: "2 weeks",
      tools: ["AutoCAD", "Revit", "Architectural Blueprints"],
      role: "Technical Illustrator",
    },
  },
  {
    id: "tech-4",
    title: "Décor 2D",
    category: "technical",
    image: "/projet2.png",
    description: "Décor 2D à 3 points de fuite",
    details: {
      client: "GlobalTech Industries",
      duration: "4 weeks",
      tools: ["MATLAB", "Simulink", "Engineering Standards"],
      role: "Schematic Designer",
    },
  },
];

export default function TechnicalDrawingPortfolio() {
  return (
    <CenteredLayout>
      <div className="pt-24 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <header className="mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Dessins technique et d'ambiance
            </h1>
            <p className="text-xl text-white/80 max-w-2xl">
              Dessins travaillant la perspective
            </p>
          </header>

          <PortfolioGrid projects={technicalProjects} category="technical" />
        </div>
      </div>
    </CenteredLayout>
  );
}
