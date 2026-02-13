import { ArrowLeft, CheckCircle2, Eye, AlertTriangle, TrendingUp } from "lucide-react";
import { useLocation } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ServicePerformanceSecurity() {
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
            Performance & Sécurité
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl leading-relaxed">
            Analyse comportementale en temps réel pour optimiser la productivité et renforcer la sécurité. Détectez les anomalies et prenez des décisions éclairées.
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
                Notre plateforme d'analyse comportementale utilise l'intelligence artificielle pour surveiller et optimiser les performances en temps réel.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Identifiez les zones de risque, détectez les comportements anormaux et prenez des mesures préventives avant que les problèmes ne surviennent.
              </p>
              <ul className="space-y-3">
                {[
                  "Analyse comportementale IA avancée",
                  "Détection d'anomalies en temps réel",
                  "Alertes de sécurité instantanées",
                  "Rapports de performance détaillés",
                  "Prédiction des risques"
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
                    src="/performance_3d_realistic.png"
                    alt="Performance & Sécurité"
                    className="w-full"
                  />
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
                icon: <Eye size={32} />,
                title: "Surveillance Intelligente",
                description: "Monitoring continu avec apprentissage adaptatif pour une meilleure précision"
              },
              {
                icon: <AlertTriangle size={32} />,
                title: "Alertes Intelligentes",
                description: "Notifications intelligentes basées sur les seuils configurables et les patterns"
              },
              {
                icon: <TrendingUp size={32} />,
                title: "Optimisation Continue",
                description: "Recommandations automatiques pour améliorer les performances"
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
                title: "Sécurité des Locaux",
                description: "Détection des intrusions, des comportements suspects et des zones interdites"
              },
              {
                title: "Optimisation des Ressources",
                description: "Analyse de l'utilisation des espaces et optimisation de l'allocation des ressources"
              },
              {
                title: "Conformité et Audit",
                description: "Traçabilité complète et rapports d'audit pour les certifications ISO"
              },
              {
                title: "Prévention des Incidents",
                description: "Identification proactive des risques avant qu'ils ne se matérialisent"
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
          <h2 className="text-4xl font-bold mb-6">Sécurisez et optimisez vos opérations</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Découvrez comment notre solution peut transformer votre approche de la sécurité et de la performance.
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
