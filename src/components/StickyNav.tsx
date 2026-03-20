import { useState, useEffect } from "react";
import { BarChart3, BookOpen, Target, Trophy, Camera } from "lucide-react";
const logoFrutero = "https://res.cloudinary.com/dpzywidxy/image/upload/v1772056454/logo-frutero_uu089k.png";

interface StickyNavProps {
  onNavigate: (sectionId: string) => void;
  activeSection: string;
}

const StickyNav = ({ onNavigate, activeSection }: StickyNavProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > window.innerHeight - 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "metricas", label: "Metrics", icon: BarChart3, bgColor: "bg-brand-dark-blue" },
    { id: "experiencia", label: "Experience", icon: BookOpen, bgColor: "bg-brand-red" },
    { id: "impacto", label: "Impact", icon: Target, bgColor: "bg-brand-yellow" },
    { id: "photo-gallery", label: "Gallery", icon: Camera, bgColor: "bg-brand-dark-blue" },
  ];

  if (!isVisible) return null;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-lg transition-all duration-300">
      <div className="max-w-6xl mx-auto px-6 md:px-8 py-3 flex items-center justify-between">
        <button onClick={() => onNavigate("hero")} className="flex items-center">
          <img src={logoFrutero} alt="Frutero" className="h-[26px] md:h-8" />
        </button>

        <div className="flex items-center gap-2 md:gap-3">
          {navItems.map((item) => {
            const IconComponent = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`
                  px-3 py-1.5 md:px-4 md:py-2 rounded-lg text-xs md:text-sm font-semibold
                  transition-all duration-200 
                  ${activeSection === item.id
                    ? `${item.bgColor} text-white shadow-md scale-105`
                    : "bg-muted text-foreground hover:bg-muted/80"
                  }
                `}
              >
                <span className="hidden md:inline mr-1">
                  <IconComponent className="w-4 h-4 inline-block" />
                </span>
                <span className="hidden sm:inline">{item.label}</span>
                <span className="sm:hidden">
                  <IconComponent className="w-4 h-4" />
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default StickyNav;
