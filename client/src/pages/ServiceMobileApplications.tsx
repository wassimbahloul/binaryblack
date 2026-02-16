import { ArrowLeft, CheckCircle2, Smartphone, Zap, Cpu } from "lucide-react";
import { useLocation } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ServiceMobileApplications() {
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
            Mobile Applications
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl leading-relaxed">
            Applications mobiles natives haute performance pour iOS et Android. Expérience utilisateur premium avec accès aux fonctions matérielles.
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
                Nous développons des applications mobiles natives en Swift et Kotlin avec un focus sur performance et expérience utilisateur.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Chaque application est optimisée pour les AppStore et GooglePlay, avec offline capability et intégrations matérielles complètes.
              </p>
              <ul className="space-y-3">
                {[
                  "Swift & Kotlin natifs",
                  "Interfaces intuitives et fluides",
                  "Offline capability",
                  "Push notifications",
                  "Analytics intégrés",
                  "App Store & Play Store ready"
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
                  <img src="/mobile.png" alt="Mobile Applications" className="w-full" />
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
                icon: <Smartphone size={32} />,
                title: "Performance Optimale",
                description: "Intégration native et réactivité maximale pour une expérience fluide"
              },
              {
                icon: <Zap size={32} />,
                title: "Expérience Premium",
                description: "Animations, interactions et design pensés pour chaque platform"
              },
              {
                icon: <Cpu size={32} />,
                title: "Accès aux APIs Natives",
                description: "Intégration caméra, géolocalisation, capteurs et fonctions matérielles"
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
                title: "Applications Métier",
                description: "Force de vente mobile, gestion d'inventaire et services sur le terrain"
              },
              {
                title: "Applications Consumer",
                description: "Marketplace, E-commerce et applications sociales"
              },
              {
                title: "IoT & Capteurs",
                description: "Applications contrôlant appareils connectés et collectant des données"
              },
              {
                title: "Services Financiers",
                description: "Paiements sécurisés, portefeuilles numériques et banque mobile"
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
          <h2 className="text-4xl font-bold mb-6">Lancer votre application mobile</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Nous accompagnons du prototypage à la publication en boutique avec support complet.
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
