import { ArrowLeft, CheckCircle2, Zap, Shield, BarChart3 } from "lucide-react";
import { useLocation } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ServicePresenceAbsence() {
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
            Présence & Absence
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl leading-relaxed">
            Suivi intelligent et automatisé de la présence des employés avec reconnaissance faciale avancée. Optimisez la gestion des ressources humaines et améliorez la productivité.
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
                Notre solution de suivi de présence utilise la technologie de reconnaissance faciale de dernière génération pour automatiser complètement la gestion des présences.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Exploitez vos caméras existantes sans nécessiter d'infrastructure supplémentaire. Le système fonctionne en temps réel et génère des rapports détaillés instantanément.
              </p>
              <ul className="space-y-3">
                {[
                  "Reconnaissance faciale précise et fiable",
                  "Intégration avec caméras existantes",
                  "Rapports en temps réel",
                  "Gestion des congés et absences",
                  "Alertes automatiques"
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
                    src="/presence.png"
                    alt="Présentation Présence & Absence"
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
                icon: <Zap size={32} />,
                title: "Détection Instantanée",
                description: "Reconnaissance faciale en temps réel avec latence minimale pour une précision maximale"
              },
              {
                icon: <Shield size={32} />,
                title: "Sécurité Renforcée",
                description: "Chiffrement des données biométriques et conformité RGPD complète"
              },
              {
                icon: <BarChart3 size={32} />,
                title: "Rapports Détaillés",
                description: "Tableaux de bord complets avec statistiques et tendances d'absence"
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

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <h2 className="text-4xl font-bold text-black mb-12 text-center">Avantages Métier</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Réduction des Coûts",
                description: "Éliminez les processus manuels et réduisez les erreurs administratives de 95%"
              },
              {
                title: "Amélioration de la Productivité",
                description: "Identifiez rapidement les patterns d'absence et optimisez la planification"
              },
              {
                title: "Conformité Légale",
                description: "Respect automatique des obligations légales en matière de suivi du temps de travail"
              },
              {
                title: "Expérience Employé",
                description: "Processus transparent et non-intrusif qui renforce la confiance"
              }
            ].map((benefit, idx) => (
              <div key={idx} className="p-8 border-l-4 border-black">
                <h3 className="text-xl font-bold text-black mb-3">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black text-white">
        <div className="container text-center">
          <h2 className="text-4xl font-bold mb-6">Prêt à transformer votre gestion des présences ?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Contactez notre équipe pour une démonstration personnalisée et découvrez comment notre solution peut s'adapter à vos besoins spécifiques.
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
