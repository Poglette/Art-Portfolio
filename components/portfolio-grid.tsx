'use client';

import { useEffect, useState } from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';

type Project = {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
};

type PortfolioGridProps = {
  projects: Project[];
  category: string;
};

export default function PortfolioGrid({
  projects,
  category,
}: PortfolioGridProps) {
  const filteredProjects =
    category === 'all'
      ? projects
      : projects.filter((project) => project.category === category);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (selectedProject) {
      setIsOpen(true);
    }
  }, [selectedProject]);

  const resetSelectedProject = () => {
    setIsOpen(false);
    setTimeout(() => {
      setSelectedProject(null);
    }, 200);
  };

  return (
    <>
      <div className="portfolio-grid">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="project-card group cursor-pointer"
            onClick={() => setSelectedProject(project)}
          >
            <img
              src={project.image || '/placeholder.svg'}
              alt={project.title}
              className="w-full h-[300px] object-cover"
            />
            <div className="project-info">
              <h3 className="text-xl font-bold text-white mb-1">
                {project.title}
              </h3>
              <p className="text-white/80">{project.description}</p>
            </div>
          </div>
        ))}
      </div>

      <Dialog
        open={isOpen}
        onOpenChange={(open) => !open && resetSelectedProject()}
      >
        <DialogContent className="max-w-screen-lg p-0">
          <div className="p-8">
            {selectedProject && (
              <img
                src={selectedProject.image || '/placeholder.svg'}
                alt={selectedProject.title}
                className="w-full h-auto max-h-[80vh] object-contain"
              />
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
