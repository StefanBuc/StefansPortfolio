import { Book, Cloud, Code } from "lucide-react";

export const About = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Passionate Computer Science
              <br /> Student
            </h3>
            <p className="text-muted-foreground">
              I'm a Computer Science student at the University of Guelph with a
              passion for building clean, efficient, and meaningful software.
              Whether it's developing full-stack web applications, automating
              workflows, or experimenting with emerging technologies, I love
              turning ideas into functional, user-friendly solutions.
            </p>
            <p className="text-muted-foreground">
              Aside from academics, I enjoy swimming, rock climbing, traveling,
              going to the gym and photography.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Contact Me
              </a>
              <a
                href="/Stefan_Bucataru's_Resume.pdf"
                target="_blank"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transtition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg"> Full-Stack Development</h4>
                  <p className="text-muted-foreground">
                    Building responsive and scalable web applications with React, Flask, and MySQL.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Cloud className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg"> Systems & Cloud</h4>
                  <p className="text-muted-foreground">
                    Experienced with Linux environments, Docker and maintaining self-hosted applications.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Book className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg"> Continuous Learning</h4>
                  <p className="text-muted-foreground">
                    Always exploring new tools, frameworks, and technologies to sharpen my problem-solving and design skills.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
