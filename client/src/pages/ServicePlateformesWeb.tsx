import { ArrowLeft, CheckCircle2, Zap, Shield, BarChart3 } from "lucide-react";
import { useLocation } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ServicePlateformesWeb() {
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
            Plateformes Web
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl leading-relaxed">
            Développement de plateformes web haute performance avec technologies modernes. Applications réactives et scalables pour votre métier.
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
                Nous construisons des plateformes web robustes, rapides et sécurisées, adaptées à vos besoins métier. Chaque solution combine design elegant et performance optimale.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                De la conception à la production, nous assurons accessibilité, SEO et maintenance durable.
              </p>
              <ul className="space-y-3">
                {[
                  "React, Vue, Angular & frameworks modernes",
                  "Responsive et accessible WCAG",
                  "Performances optimisées & PWA",
                  "SEO et bonnes pratiques",
                  "Intégration API complète"
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
                  <img src="/web.png" alt="Plateformes Web" className="w-full" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <h2 className="text-4xl font-bold text-black mb-12 text-center">Fonctionnalités Clés</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Zap size={32} />,
                title: "Performance & PWA",
                description: "Optimisation, rendu côté serveur et expériences rapides"
              },
              {
                icon: <Shield size={32} />,
                title: "Sécurité & Conformité",
                description: "Bonnes pratiques de sécurité, headers et contrôle d'accès"
              },
              {
                icon: <BarChart3 size={32} />,
                title: "Analyse & Monitoring",
                description: "Dashboards, métriques et suivi des performances"
              }
            ].map((feature, idx) => (
              <div key={idx} className="p-8 bg-white border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
                <div className="text-black mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-black mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <h2 className="text-4xl font-bold text-black mb-12 text-center">Cas d'Usage</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Applications SaaS",
                description: "Plateformes multi-locataires scalables avec gestion utilisateurs avancée"
              },
              {
                title: "E-commerce",
                description: "Boutiques en ligne performantes avec conversions optimisées"
              },
              {
                title: "Dashboards & Analytics",
                description: "Visualisations en temps réel et reporting personnalisé"
              },
              {
                title: "Portails Métier",
                description: "Solutions d'accès sécurisé aux données professionnelles"
              }
            ].map((useCase, idx) => (
              <div key={idx} className="p-8 border-l-4 border-black">
                <h3 className="text-xl font-bold text-black mb-3">{useCase.title}</h3>
                <p className="text-gray-600 leading-relaxed">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black text-white">
        <div className="container text-center">
          <h2 className="text-4xl font-bold mb-6">Prêt à construire votre plateforme web ?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Contactez notre équipe pour discuter de votre projet et connaître les meilleures solutions.
          </p>
          <button className="px-8 py-3 bg-white text-black font-medium rounded-sm hover:bg-gray-100 transition-colors duration-200">
            Demander une démo
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
