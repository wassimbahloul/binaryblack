import { ArrowLeft, CheckCircle2, FileText, Zap, TrendingUp } from "lucide-react";
import { useLocation } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ServiceInvoiceManagement() {
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
            Système de Gestion de Factures
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl leading-relaxed">
            Automatisation Complète du Traitement des Factures. Capturez automatiquement les informations des factures et intégrez-les directement dans votre base de données.
          </p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-black mb-6">Caractéristiques Principales</h2>
              <ul className="space-y-3">
                {[
                  "Capture automatique d'images de factures",
                  "Reconnaissance OCR avancée",
                  "Extraction intelligente de données",
                  "Validation automatique",
                  "Intégration base de données",
                  "Audit trail complet"
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
                    src="/invoice.png"
                    alt="Gestion de Factures"
                    className="w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <h2 className="text-4xl font-bold text-black mb-12 text-center">Avantages et Bénéfices</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Zap size={32} />,
                title: "Réduction",
                description: "Réduction du temps de traitement de 80%"
              },
              {
                icon: <CheckCircle2 size={32} />,
                title: "Élimination",
                description: "Élimination des erreurs manuelles"
              },
              {
                icon: <TrendingUp size={32} />,
                title: "Amélioration",
                description: "Amélioration du cash flow"
              },
              {
                icon: <FileText size={32} />,
                title: "Conformité",
                description: "Conformité comptable garantie"
              },
              {
                icon: <CheckCircle2 size={32} />,
                title: "Archivage",
                description: "Archivage automatisé"
              },
              {
                icon: <TrendingUp size={32} />,
                title: "Économies",
                description: "Économies significatives"
              }
            ].map((benefit, idx) => (
              <div key={idx} className="p-8 bg-white border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
                <div className="text-black mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-black mb-3">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
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
              "Entreprises de services",
              "Distributeurs",
              "Agences de voyage",
              "Cabinets d'expertise comptable",
              "PME et ETI"
            ].map((useCase, idx) => (
              <div key={idx} className="p-6 border-l-4 border-black bg-gray-50">
                <p className="text-lg font-semibold text-black">{useCase}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black text-white">
        <div className="container text-center">
          <h2 className="text-4xl font-bold mb-6">Prêt à Commencer?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Contactez notre équipe pour une démonstration personnalisée et découvrez comment cette solution peut transformer votre entreprise.
          </p>
          <button className="px-8 py-3 bg-white text-black font-medium rounded-sm hover:bg-gray-100 transition-colors duration-200">
            Demander une Démo
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
