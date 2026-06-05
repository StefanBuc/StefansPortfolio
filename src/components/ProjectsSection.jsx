import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Vacation Planner",
    description:
      "An AI-powered vacation planning app",
    image: "/projects/VacationPlanner.png",
    tags: ["Python", "FastAPI", "React", "TailwindCSS"],
    demoUrl: "",
    githubUrl: "https://github.com/StefanBuc/Vacation-Planner",
  },
  {
    id: 2,
    title: "Jarvis Ai",
    description:
      "This is an AI-powered personal assistant similar to the one from Iron Man.",
    image: "/projects/Jarvis.png",
    tags: ["Python", "Pytorch"],
    demoUrl: "",
    githubUrl: "https://github.com/StefanBuc/jarvis-project",
  },
  {
    id: 3,
    title: "Quick Compress",
    description:
      "A simple web application that allows users to compress videos quickly and easily.",
    image: "/projects/quickcompress.png",
    tags: ["React", "TailwindCSS", "FastAPI", "Python", "FFmpeg"],
    demoUrl: "https://compress.stefanb.me/",
    githubUrl: "https://github.com/StefanBuc/quick-compress",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          These are some of the projects I've worked on recently. Feel free to
          explore them and check out the code on GitHub!
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover h-full flex flex-col"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6 flex flex-1 flex-col">
                <div className="flex flex-wrap content-start gap-2 mb-4 min-h-14">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs font-medium rounded-full bg-primary/20 text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-6">
                  {project.description}
                </p>
                <div className="mt-auto flex justify-between items-center">
                  <div className="flex space-x-3">
                    {project.demoUrl !== "" && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                      >
                        <ExternalLink size={20} />
                      </a>
                    )}
                    {project.githubUrl !== "" && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                      >
                        <Github size={20} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/StefanBuc"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
