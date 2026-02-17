import { ArrowLeft, CheckCircle2, MessageCircle, Zap, Shield } from "lucide-react";
import { useLocation } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ServiceChatbot() {
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
            Assistant conversationnel
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl leading-relaxed">
            Solutions de chatbot professionnelles déployées en PaaS managé — intégration multicanale,
            NLU/NLP et supervision continue.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-black mb-6">Vue d'ensemble</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Nous concevons des assistants conversationnels robustes pour automatiser le support,
                qualifier les demandes et enrichir l'expérience client tout en garantissant la
                conformité et la confidentialité des données.
              </p>
              <ul className="space-y-3">
                {["Multi‑canal (web, mobile, messagerie)", "NLU/NLP personnalisé", "Intégration CRM & API", "Escalade & supervision humaine", "Déploiement PaaS managé"].map((feature, idx) => (
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
                  <img src="/chat.png" alt="Assistant conversationnel" className="w-full" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container">
          <h2 className="text-4xl font-bold text-black mb-12 text-center">Fonctionnalités clés</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[{
              icon: <MessageCircle size={32} />,
              title: "Compréhension naturelle",
              description: "Intents et entités sur-mesure pour conversations précises"
            },{
              icon: <Shield size={32} />,
              title: "Sécurité & confidentialité",
              description: "Contrôles d'accès, anonymisation et conformité"
            },{
              icon: <Zap size={32} />,
              title: "Déploiement managé",
              description: "Maintenance, monitoring et montée en charge PaaS"
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
            {[{title: "Support client automatisé", description: "Réduisez les délais de réponse et augmentez la satisfaction client."},{title: "Qualification de leads", description: "Capture et qualification automatisée des prospects."},{title: "Assistants internes", description: "Bot pour employés: RH, IT, gestion des incidents."},{title: "FAQ dynamique", description: "Mise à jour automatique des connaissances"}].map((useCase, idx) => (
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
          <h2 className="text-4xl font-bold mb-6">Prêt à déployer un assistant ?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">Contactez notre équipe pour choisir l'approche la mieux adaptée à votre organisation.</p>
          <button className="px-8 py-3 bg-white text-black font-medium rounded-sm hover:bg-gray-100 transition-colors duration-200">Demander une démo</button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
