import { ArrowLeft, CheckCircle2, BellRing, Zap } from "lucide-react";
import { useLocation } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ServiceSupportMonitoring() {
  const [, navigate] = useLocation();

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <section className="pt-32 pb-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container">
          <button onClick={() => navigate("/") } className="inline-flex items-center gap-2 text-black font-medium mb-8 hover:gap-3 transition-all">
            <ArrowLeft size={18} />
            Retour
          </button>
          <h1 className="text-5xl lg:text-6xl font-bold text-black mb-6 leading-tight">Support & Monitoring</h1>
          <p className="text-xl text-gray-600 max-w-3xl leading-relaxed">Monitoring continu et support technique 24/7 pour vos services.</p>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-black mb-6">Vue d'ensemble</h2>
              <p className="text-gray-600 leading-relaxed mb-4">Supervision, alerting et support technique pour garantir disponibilité et réactivité.</p>
              <ul className="space-y-3">
                {["Monitoring en temps réel","Alertes proactives","Incident management","Support 24/7","SLA garantis","Rapports mensuels"].map((f, idx)=> (
                  <li key={idx} className="flex items-start gap-3"><CheckCircle2 size={20} className="text-black flex-shrink-0 mt-1"/><span className="text-gray-700">{f}</span></li>
                ))}
              </ul>
            </div>
            <div className="rounded-lg flex items-center justify-center p-0"><div className="text-center"><div className="image-card"><img src="/support.png" alt="Support & Monitoring" className="w-full"/></div></div></div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50"><div className="container"><h2 className="text-4xl font-bold text-black mb-12 text-center">Disponibilité & Réactivité</h2><div className="grid grid-cols-1 md:grid-cols-3 gap-8">{[{title:"Disponibilité garantie",desc:"SLA et monitoring avancé",icon:<BellRing size={32}/>},{title:"Détection précoce",desc:"Alertes et corrélations d'incidents",icon:<Zap size={32}/>},{title:"Support",desc:"Intervention et reporting 24/7",icon:<BellRing size={32}/> }].map((t,idx)=> (<div key={idx} className="p-8 bg-white border border-gray-200 rounded-lg hover:shadow-lg transition-shadow"><div className="text-black mb-4">{t.icon}</div><h3 className="text-xl font-bold text-black mb-3">{t.title}</h3><p className="text-gray-600 leading-relaxed">{t.desc}</p></div>))}</div></div></section>

      <section className="py-20 bg-black text-white"><div className="container text-center"><h2 className="text-4xl font-bold mb-6">Surveillez et maintenez vos services</h2><p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">Notre équipe surveille votre stack et intervient rapidement en cas d'incident.</p><button className="px-8 py-3 bg-white text-black font-medium rounded-sm hover:bg-gray-100 transition-colors duration-200">Contact Support</button></div></section>

      <Footer />
    </div>
  );
}
