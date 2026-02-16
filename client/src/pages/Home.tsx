import { ArrowRight, Zap, Award, Repeat, Factory, Building2, GraduationCap, BookOpen, Brain, BarChart3, Shield, FileCheck, Smartphone, Cloud, ChevronDown } from "lucide-react";
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroBanner from "@/components/HeroBanner";
import { cn } from "@/lib/utils";

export default function Home() {
  const [openCategories, setOpenCategories] = useState<Set<number>>(new Set());

  const toggleCategory = (index: number) => {
    setOpenCategories(prev => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });
  };
  function Card({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card"
      className={cn(
        "bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm",
        className
      )}
      {...props}
    />
  );
}


  
  const techs = [
    "Python", "Java", "JavaScript", "C#", "PHP", "Angular",
    "React", ".NET", "Node.js", "Express.js", "Spring Boot", "Flask",
    "FastAPI", "Vue.js", "Laravel", "MySQL", "MongoDB", "SQL Server",
    "TensorFlow", "Keras", "PyTorch", "XGBoost", "Docker", "Git"
  ];
  
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* no overlay: mini services navigate to full pages */}

      {/* Hero Banner with Owner */}
      <HeroBanner />

      {/* Hero Section */}
      <section className="pt-20 pb-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mb-6">
                <span className="inline-block px-3 py-1 bg-black text-white text-xs font-semibold uppercase tracking-wider rounded-full">
                  Innovation • IA • Excellence
                </span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold text-black mb-6 leading-tight">
                Transformez votre surveillance en intelligence
              </h1>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Obtenez des insights sur présence, performance et sécurité, sans matériel ajouté.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-8 py-3 bg-black text-white font-medium rounded-sm hover:bg-gray-900 transition-colors duration-200 flex items-center justify-center gap-2">
                  Découvrir
                  <ArrowRight size={18} />
                </button>
                <button className="px-8 py-3 border-2 border-black text-black font-medium rounded-sm hover:bg-black hover:text-white transition-colors duration-200">
                  En savoir
                </button>
              </div>
            </div>
            <div className="rounded-lg flex items-center justify-center p-0">
              <div className="text-center">
                <div className="image-card home-image">
                  <img
                    src="/logo11.png"
                    alt="Web & Mobile"
                    className="w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      

      {/* Solutions Section */}
      <section id="services" className="py-12 bg-white">
        <div className="container">
          <div className="text-center mb-10">
            <h2 className="text-4xl lg:text-5xl font-bold text-black mb-4">Nos Services</h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">Solutions d'IA sur mesure</p>
          </div>

          {/* Services Section — Ultra Professional */}
          <div className="services-container">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10">
              {/* CATEGORY 1: Computer Vision & IA */}
              <div className="services-column">
                <button 
                  onClick={() => toggleCategory(0)}
                  className="category-header category-header-clickable"
                  aria-expanded={openCategories.has(0)}
                >
                  <div className="category-header-content">
                    <div className="category-icon">
                      <Brain size={28} strokeWidth={1.5} />
                    </div>
                    <div>
                      <h3 className="category-title">Computer Vision & IA</h3>
                      <p className="category-subtitle">Solutions intelligentes</p>
                    </div>
                  </div>
                  <div className={`category-chevron ${openCategories.has(0) ? 'category-chevron-open' : ''}`}>
                    <ChevronDown size={20} strokeWidth={2} />
                  </div>
                </button>
                <div className={`services-stack ${openCategories.has(0) ? 'services-stack-open' : 'services-stack-closed'}`}>
                  <div className="flex flex-col gap-3 mt-2">
                  {[
                      { icon: BarChart3, title: "Présence & Absence", desc: "Suivi de présence automatisé", href: "/service/presence-absence" },
                      { icon: Shield, title: "Performance & Sécurité", desc: "Analyse comportementale", href: "/service/performance-security" },
                      { icon: Shield, title: "Sécurité Équipements", desc: "Contrôle EPI", href: "/service/safety-verification" },
                      { icon: FileCheck, title: "Gestion Factures", desc: "OCR & extraction", href: "/service/invoice-management" }
                  ].map((srv, i) => {
                    const Icon = srv.icon;
                    return (
                      <a key={i} href={srv.href} className="service-item">
                        <div className="service-item-icon">
                          <Icon size={20} strokeWidth={1.5} />
                        </div>
                        <div className="service-item-content">
                          <h4 className="service-item-title">{srv.title}</h4>
                          <p className="service-item-desc">{srv.desc}</p>
                        </div>
                        <div className="service-item-arrow">
                          <ArrowRight size={16} strokeWidth={2} />
                        </div>
                      </a>
                    );
                  })}
                  </div>
                </div>
              </div>

              {/* CATEGORY 2: Web & Mobile */}
              <div className="services-column">
                <button 
                  onClick={() => toggleCategory(1)}
                  className="category-header category-header-clickable"
                  aria-expanded={openCategories.has(1)}
                >
                  <div className="category-header-content">
                    <div className="category-icon">
                      <Smartphone size={28} strokeWidth={1.5} />
                    </div>
                    <div>
                      <h3 className="category-title">Développement Web & Mobile</h3>
                      <p className="category-subtitle">Applications modernes</p>
                    </div>
                  </div>
                  <div className={`category-chevron ${openCategories.has(1) ? 'category-chevron-open' : ''}`}>
                    <ChevronDown size={20} strokeWidth={2} />
                  </div>
                </button>
                <div className={`services-stack ${openCategories.has(1) ? 'services-stack-open' : 'services-stack-closed'}`}>
                  <div className="flex flex-col gap-3 mt-2">
                  {[
                    { key: "plateformes-web", icon: Smartphone, title: "Plateformes Web", desc: "Applications réactives", href: "/service/plateformes-web" },
                    { key: "mobile-applications", icon: Smartphone, title: "Mobile Applications", desc: "iOS & Android natifs", href: "/service/mobile-applications" },
                    { key: "ui-ux-design", icon: Smartphone, title: "UI/UX Design", desc: "Design UI/UX", href: "/service/ui-ux-design" },
                    { key: "integration-api", icon: Smartphone, title: "Intégration API", desc: "Intégration API", href: "/service/integration-api" }
                  ].map((srv, i) => {
                    const Icon = srv.icon;
                    return (
                      <a key={i} href={srv.href} className="service-item">
                        <div className="service-item-icon">
                          <Icon size={20} strokeWidth={1.5} />
                        </div>
                        <div className="service-item-content">
                          <h4 className="service-item-title">{srv.title}</h4>
                          <p className="service-item-desc">{srv.desc}</p>
                        </div>
                        <div className="service-item-arrow">
                          <ArrowRight size={16} strokeWidth={2} />
                        </div>
                      </a>
                    );
                  })}
                  </div>
                </div>
              </div>

              {/* CATEGORY 3: Cloud Services */}
              <div className="services-column">
                <button 
                  onClick={() => toggleCategory(2)}
                  className="category-header category-header-clickable"
                  aria-expanded={openCategories.has(2)}
                >
                  <div className="category-header-content">
                    <div className="category-icon">
                      <Cloud size={28} strokeWidth={1.5} />
                    </div>
                    <div>
                      <h3 className="category-title">Services Cloud</h3>
                      <p className="category-subtitle">Infrastructure scalable</p>
                    </div>
                  </div>
                  <div className={`category-chevron ${openCategories.has(2) ? 'category-chevron-open' : ''}`}>
                    <ChevronDown size={20} strokeWidth={2} />
                  </div>
                </button>
                <div className={`services-stack ${openCategories.has(2) ? 'services-stack-open' : 'services-stack-closed'}`}>
                  <div className="flex flex-col gap-3 mt-2">
                  {[
                    { key: "iaas-infrastructure", icon: Cloud, title: "IaaS & Infrastructure", desc: "Infrastructure élastique", href: "/service/iaas-infrastructure" },
                    { key: "platform-service", icon: Cloud, title: "Platform as a Service", desc: "PaaS managé", href: "/service/platform-service" },
                    { key: "managed-databases", icon: Cloud, title: "Managed Databases", desc: "Bases haute disponibilité", href: "/service/managed-databases" },
                    { key: "support-monitoring", icon: Cloud, title: "Support & Monitoring", desc: "Supervision 24/7", href: "/service/support-monitoring" }
                  ].map((srv, i) => {
                    const Icon = srv.icon;
                    return (
                      <a key={i} href={srv.href} className="service-item service-item-premium">
                        <div className="service-item-icon">
                          <Icon size={20} strokeWidth={1.5} />
                        </div>
                        <div className="service-item-content">
                          <h4 className="service-item-title">{srv.title}</h4>
                          <p className="service-item-desc">{srv.desc}</p>
                        </div>
                        <div className="service-item-arrow">
                          <ArrowRight size={16} strokeWidth={2} />
                        </div>
                      </a>
                    );
                  })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-black mb-6">Excellence d'Innovation</h2>
              <h3 className="text-2xl font-semibold text-black mb-4">Notre Histoire</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                BinaryBlack est née de la passion de créer des solutions d'intelligence artificielle innovantes et précises. En tant qu'entreprise spécialisée dans la transformation digitale, nous bénéficions d'une expertise approfondie dans le développement de solutions IA de pointe.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Aujourd'hui, notre expertise couvre l'intégralité de la chaîne de valeur : Conception IA, Développement Logiciel, Cloud Computing, Optimisation Performance.
              </p>
              <h3 className="text-2xl font-semibold text-black mb-4">Nos Clients</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Nous avons grandi en accompagnant les entreprises innovantes ainsi que des partenaires nationaux de premier plan .
              </p>
              <button className="px-8 py-3 bg-black text-white font-medium rounded-sm hover:bg-gray-900 transition-colors duration-200">
                Découvrir nos Solutions
              </button>
            </div>
            <div>
              <div className="text-left lg:text-right">
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-black mb-4">Partenaires & collaborations</h3>
                </div>

                <div className="partners-grid flex flex-col gap-4 max-w-sm ml-auto">
                  <div className="partner-card">
                    <div className="partner-icon">
                      <Factory size={22} />
                    </div>
                    <div className="partner-content">
                      <div className="partner-title">Secteur industriel</div>
                      <div className="partner-sub">Sites de production multisectoriels</div>
                    </div>
                  </div>

                  <div className="partner-card">
                    <div className="partner-icon">
                      <Building2 size={22} />
                    </div>
                    <div className="partner-content">
                      <div className="partner-title">Institutions publiques</div>
                      <div className="partner-sub">Organismes & structures d'État</div>
                    </div>
                  </div>

                  <div className="partner-card partner-education">
                    <div className="partner-icon">
                      <GraduationCap size={22} />
                    </div>
                    <div className="partner-content">
                      <div className="partner-title">Enseignement</div>
                      <ul className="partner-list">
                        <li>Primaire, collèges, lycées & universités</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <h2 className="text-4xl font-bold text-black mb-12 text-center">Excellence Garantie</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 values-grid">
            {[
              {
                title: "Innovation Continue",
                description: "Technologies de pointe pour innover",
                icon: <Zap size={20} aria-hidden="true" />
              },
              {
                title: "Qualité Supérieure",
                description: "Excellence et robustesse",
                icon: <Award size={20} aria-hidden="true" />
              },
              {
                title: "Flexibilité Garantie",
                description: "Solutions évolutives et adaptables",
                icon: <Repeat size={20} aria-hidden="true" />
              }
            ].map((value, idx) => (
              <div key={idx} className="value-card">
                <div className="value-icon">{value.icon}</div>
                <div>
                  <h3 className="value-title text-lg">{value.title}</h3>
                  <p className="value-desc text-sm mt-1">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
              {[
                { label: "Clients satisfaits", value: "10+" },
                { label: "Projets réussis", value: "15+" },
                { label: "Années d'expérience", value: "3+" },
              ].map((stat, idx) => (
                <div key={idx} className="stat-card">
                  <div className="stat-value">{stat.value}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
        </div>
      </section>

      {/* Technologies Section */}
     

      
      <Footer />
    </div>
  );
}
