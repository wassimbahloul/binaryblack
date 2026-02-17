import { ArrowLeft, CheckCircle2, Cpu, Zap, BarChart3 } from "lucide-react";
import { useLocation } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ServiceIaAutomation() {
  const [, navigate] = useLocation();

  return (
    <div className="min-h-screen bg-white">
      <Header />

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
            Automatisation par IA
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl leading-relaxed">
            Automatisation intelligente et orchestrations alimentées par modèles IA pour optimiser
            processus et opérations métier.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-black mb-6">Vue d'ensemble</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Nous automatisons tâches répétitives et workflows complexes via des modèles IA
                robustes et des intégrations API fiables.
              </p>
              <ul className="space-y-3">
                {["RPA augmenté par IA", "Orchestration de workflows", "Surveillance & retraining", "Intégration API", "Déploiement sécurisé"].map((feature, idx) => (
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
                  <img src="/ai.png" alt="Automatisation IA" className="w-full" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container">
          <h2 className="text-4xl font-bold text-black mb-12 text-center">Fonctionnalités</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[{
              icon: <Cpu size={32} />,
              title: "Automatisation intelligente",
              description: "Tâches pilotées par modèles et règles métier"
            },{
              icon: <BarChart3 size={32} />,
              title: "Monitoring & KPIs",
              description: "Tableaux de bord et alerting opérationnel"
            },{
              icon: <Zap size={32} />,
              title: "Ops & Scalabilité",
              description: "Déploiement et montée en charge sécurisés"
            }].map((feature, idx) => (
              <div key={idx} className="p-8 bg-white border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
                <div className="text-black mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-black mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container">
          <h2 className="text-4xl font-bold text-black mb-12 text-center">Cas d'usage</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[{title: "Automatisation des factures", description: "Extraction, validation et routage automatisés."},{title: "Traitement des réclamations", description: "Classification et priorisation automatique."},{title: "Orchestration IT", description: "Workflows automatisés pour opérations IT."},{title: "Analyse de processus", description: "Optimisation continue grâce aux métriques"}].map((useCase, idx) => (
              <div key={idx} className="p-8 border-l-4 border-black">
                <h3 className="text-xl font-bold text-black mb-3">{useCase.title}</h3>
                <p className="text-gray-600 leading-relaxed">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-black text-white">
        <div className="container text-center">
          <h2 className="text-4xl font-bold mb-6">Automatisez intelligemment</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">Parlons de la façon dont l'automatisation IA peut simplifier vos opérations.</p>
          <button className="px-8 py-3 bg-white text-black font-medium rounded-sm hover:bg-gray-100 transition-colors duration-200">Contactez-nous</button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
