type Project = {
  id: string
  title: string
  category: string
  image: string
  description: string
}

type PortfolioGridProps = {
  projects: Project[]
  category: string
}

export default function PortfolioGrid({ projects, category }: PortfolioGridProps) {
  const filteredProjects = category === "all" ? projects : projects.filter((project) => project.category === category)

  return (
    <div className="portfolio-grid">
      {filteredProjects.map((project) => (
        <div key={project.id} className="project-card group">
          <img
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            className="w-full h-[300px] object-cover"
          />
          <div className="project-info">
            <h3 className="text-xl font-bold text-white mb-1">{project.title}</h3>
            <p className="text-white/80">{project.description}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

