import React from 'react';
import { ArrowRight, Database, Brain, Globe, Shield, Zap, ShoppingCart, Server, Code, Lock } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans selection:bg-blue-100 selection:text-blue-900">

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white pb-24 pt-32 px-6">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150"></div>

        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/30 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="max-w-6xl mx-auto relative z-10 text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-400/30 bg-blue-500/10 backdrop-blur-md text-blue-300 text-xs font-bold tracking-widest uppercase mb-8 shadow-lg shadow-blue-900/20">
            <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
            Final Year Project
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight leading-tight mb-8 bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-blue-200 drop-shadow-sm">
            Real-Time Inventory <br /> Recommendation Agent
          </h1>

          <p className="text-lg md:text-xl text-blue-100/90 max-w-3xl leading-relaxed mb-12 font-light">
            A next-generation SaaS platform delivering <span className="text-white font-medium">AI-powered, real-time product suggestions</span> via live chat.
            Transforming e-commerce with personalized engagement and optimized operational efficiency.
          </p>

          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <div className="px-8 py-4 bg-white text-blue-900 rounded-full font-bold text-sm hover:bg-blue-50 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 cursor-default">
              AI Powered
            </div>
            <div className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full font-bold text-sm hover:bg-white/20 transition-all cursor-default">
              Real-Time Sync
            </div>
          </div>
        </div>
      </section>

      {/* Problem & Solution Grid */}
      <section className="py-24 px-6 max-w-6xl mx-auto -mt-20 relative z-20">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Card 1: Problem */}
          <div className="bg-white p-10 rounded-3xl shadow-2xl border border-gray-100 hover:-translate-y-2 transition-transform duration-300 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-red-50 rounded-bl-full -mr-10 -mt-10 transition-all group-hover:scale-110"></div>
            <div className="w-14 h-14 bg-red-100 rounded-2xl flex items-center justify-center mb-8 relative z-10">
              <Zap className="w-7 h-7 text-red-600" />
            </div>
            <h3 className="text-2xl font-bold mb-6 text-gray-900">The Challenge</h3>
            <ul className="space-y-4 text-gray-600 font-medium">
              <li className="flex gap-3 items-center"><div className="w-1.5 h-1.5 rounded-full bg-red-400"></div> Outdated static data</li>
              <li className="flex gap-3 items-center"><div className="w-1.5 h-1.5 rounded-full bg-red-400"></div> Generic, impersonal AI</li>
              <li className="flex gap-3 items-center"><div className="w-1.5 h-1.5 rounded-full bg-red-400"></div> Irrelevant suggestions</li>
              <li className="flex gap-3 items-center"><div className="w-1.5 h-1.5 rounded-full bg-red-400"></div> Inefficient support</li>
            </ul>
          </div>

          {/* Card 2: Solution */}
          <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-10 rounded-3xl shadow-2xl hover:-translate-y-2 transition-transform duration-300 text-white md:col-span-2 flex flex-col justify-center relative overflow-hidden">
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/10 rounded-tl-full blur-3xl pointer-events-none"></div>

            <div className="flex items-center gap-6 mb-8 relative z-10">
              <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-white/30">
                <Brain className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-3xl font-bold">The Intelligent Solution</h3>
            </div>
            <p className="text-blue-50 text-xl leading-relaxed mb-8 font-light relative z-10">
              We integrate directly with company databases to offer <strong className="text-white font-semibold">up-to-the-minute, personalized</strong> product suggestions.
              Our agent bridges the gap between static inventory and dynamic customer needs using advanced NLP and Machine Learning.
            </p>
            <div className="flex gap-4 relative z-10">
              <div className="px-4 py-2 bg-white/20 rounded-lg text-sm font-medium backdrop-blur-md border border-white/10">NLP Engine</div>
              <div className="px-4 py-2 bg-white/20 rounded-lg text-sm font-medium backdrop-blur-md border border-white/10">Live Database</div>
            </div>
          </div>
        </div>
      </section>

      {/* Expected Outcomes */}
      <section className="py-20 px-6 bg-white border-t border-gray-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-base font-bold tracking-widest text-blue-600 uppercase mb-3">Key Benefits</h2>
            <h3 className="text-4xl font-extrabold text-gray-900">Impact & Applications</h3>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              { icon: ShoppingCart, title: "Increased Sales", desc: "Driving revenue through hyper-personalized product suggestions." },
              { icon: Globe, title: "Scalable SaaS", desc: "Robust multi-tenant architecture suitable for various industries." },
              { icon: Database, title: "Real-Time Sync", desc: "Always-on connection to live inventory databases." },
              { icon: Brain, title: "Customer Engagement", desc: "Meaningful interactions that retain users and build loyalty." },
              { icon: Shield, title: "Operational Efficiency", desc: "Automating support to reduce manual workload and errors." },
              { icon: Zap, title: "Industry Versatile", desc: "Adaptable solution for automotive, retail, and more." },
            ].map((item, idx) => (
              <div key={idx} className="group p-6 rounded-2xl bg-gray-50 hover:bg-white border border-transparent hover:border-gray-100 hover:shadow-xl transition-all duration-300">
                <div className="w-12 h-12 bg-white text-blue-600 rounded-xl flex items-center justify-center shadow-sm mb-6 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                  <item.icon className="w-6 h-6" />
                </div>
                <h4 className="font-bold text-xl text-gray-900 mb-3">{item.title}</h4>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-24 px-6 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Powerful Tech Stack</h2>
            <p className="text-slate-400">Built with modern technologies for performance and scale</p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-6 gap-6">
            {[
              { icon: Code, cat: "Frontend", tech: "Next.js" },
              { icon: Server, cat: "Backend", tech: "Node.js" },
              { icon: Database, cat: "Database", tech: "MongoDB" },
              { icon: Brain, cat: "AI Engine", tech: "NLP & ML" },
              { icon: Lock, cat: "Security", tech: "Encryption" },
              { icon: Globe, cat: "Integration", tech: "REST APIs" },
            ].map((stack, i) => (
              <div key={i} className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors text-center group">
                <div className="mx-auto w-10 h-10 mb-4 text-blue-400 group-hover:text-blue-300 transition-colors">
                  <stack.icon className="w-full h-full" />
                </div>
                <div className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-2">{stack.cat}</div>
                <div className="font-bold text-lg">{stack.tech}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white text-gray-500 py-12 px-6 text-center border-t border-gray-100">
        <p className="mb-2 font-medium text-gray-900">Real-Time Inventory Recommendation Agent</p>
        <p className="text-sm">© {new Date().getFullYear()} Final Year Project. All rights reserved.</p>
      </footer>
    </div>
  );
}