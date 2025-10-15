import { Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";
import { cn } from "@/lib/utils";

export const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary"> Touch</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Feel free to reach out for collaborations or just to say hello! I'm
          always open to discussing new projects, or potential opportunities.
        </p>

        <div className="space-y-8">
          <h3 className="text-2xl font-semibold mb-6"> Contact Information</h3>

          <div className="flex flex-col md:flex-row md:space-x-12 justify-center items-center space-y-6 md:space-y-0">
            <div className="flex flex-col md:flex-row items-start space-x-4 sm:space-y-1">
              <div className="p-3 rounded-full bg-primary/10 mx-auto">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h4 className="hidden md:block"> Email</h4>
                <a
                  href="mailto:stefanandrei.bucataru@gmail.com"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  stefanandrei.bucataru@gmail.com
                </a>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-start space-x-4 sm:space-y-1">
              <div className="p-3 rounded-full bg-primary/10 mx-auto">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h4 className="hidden md:block"> Phone</h4>
                <a
                  href="tel:+16474258140"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  +1 (647) 425-8140
                </a>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-start space-x-4 sm:space-y-1">
              <div className="p-3 rounded-full bg-primary/10 mx-auto">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h4 className="hidden md:block"> Location</h4>
                <a className="text-muted-foreground hover:text-primary transition-colors">
                  Toronto, ON, Canada
                </a>
              </div>
            </div>
          </div>

          <div className="pt-8">
            <h4 className="font-medium mb-4"> Connect With Me</h4>
            <div className="flex space-x-4 justify-center">
              <a
                href="https://www.linkedin.com/in/stefanbucataru/"
                target="_blank"
              >
                <Linkedin />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
