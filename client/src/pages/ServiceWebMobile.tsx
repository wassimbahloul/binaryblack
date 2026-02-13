import { ArrowLeft, CheckCircle2, Smartphone, Globe, Zap } from "lucide-react";
import { useLocation } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ServiceWebMobile() {
  const [, navigate] = useLocation();

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container">
          <button
            onClick={() => navigate("/")}
            className="inline-flex items-center gap-2 text-black font-medium mb-8 hover:gap-3 transition-all"
          >
            <ArrowLeft size={18} />
            Retour
          </button>
          <h1 className="text-5xl lg:text-6xl font-bold text-black mb-6 leading-tight">
            Web & Mobile
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl leading-relaxed">
            Plateformes web et applications mobiles sur mesure pour vos besoins spécifiques. Solutions modernes, performantes et scalables.
          </p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-black mb-6">Vue d'ensemble</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Nous développons des applications web et mobiles qui combinent design élégant et fonctionnalités robustes.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Chaque projet est conçu en tenant compte de vos objectifs métier, de l'expérience utilisateur et des performances optimales.
              </p>
              <ul className="space-y-3">
                {[
                  "Applications web modernes et réactives",
                  "Applications mobiles iOS et Android",
                  "Design responsive et accessible",
                  "Intégration API complète",
                  "Support et maintenance continu"
                ].map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 size={20} className="text-black flex-shrink-0 mt-1" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-lg flex items-center justify-center p-0">
              <div className="text-center">
                <div className="image-card">
                  <img
                    src="/dev_3d_bw.png"
                    alt="Web & Mobile"
                    className="w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <h2 className="text-4xl font-bold text-black mb-12 text-center">Technologies Utilisées</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Globe size={32} />,
                title: "Web Development",
                description: "React, Vue.js, Angular, Node.js, Express, FastAPI pour des applications web performantes"
              },
              {
                icon: <Smartphone size={32} />,
                title: "Mobile Development",
                description: "React Native, Flutter, Swift pour des applications natives et cross-platform"
              },
              {
                icon: <Zap size={32} />,
                title: "Backend Robuste",
                description: "Python, Java, C#, .NET pour des backends scalables et sécurisés"
              }
            ].map((tech, idx) => (
              <div key={idx} className="p-8 bg-white border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
                <div className="text-black mb-4">{tech.icon}</div>
                <h3 className="text-xl font-bold text-black mb-3">{tech.title}</h3>
                <p className="text-gray-600 leading-relaxed">{tech.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <h2 className="text-4xl font-bold text-black mb-12 text-center">Notre Processus</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                title: "Découverte",
                description: "Compréhension approfondie de vos besoins et objectifs"
              },
              {
                step: "02",
                title: "Conception",
                description: "Design UX/UI moderne et intuitif"
              },
              {
                step: "03",
                title: "Développement",
                description: "Développement agile avec tests continus"
              },
              {
                step: "04",
                title: "Déploiement",
                description: "Lancement et support post-lancement"
              }
            ].map((phase, idx) => (
              <div key={idx} className="p-6 bg-gray-50 border border-gray-200 rounded-lg">
                <div className="text-3xl font-bold text-black mb-3">{phase.step}</div>
                <h3 className="text-lg font-bold text-black mb-2">{phase.title}</h3>
                <p className="text-gray-600 text-sm">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black text-white">
        <div className="container text-center">
          <h2 className="text-4xl font-bold mb-6">Prêt à lancer votre projet ?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Contactez notre équipe de développeurs expérimentés pour discuter de votre vision et la concrétiser.
          </p>
          <button className="px-8 py-3 bg-white text-black font-medium rounded-sm hover:bg-gray-100 transition-colors duration-200">
            Commencer un projet
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
