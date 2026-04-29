import { motion } from 'motion/react';
import { Mic, CheckCircle2 } from 'lucide-react';

export default function Hero() {
  return (
    <section className="pt-32 pb-20 overflow-hidden">
      <div className="container-max grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-8 lg:pr-10"
        >
          <div className="flex flex-col gap-6">
            <div className="inline-flex items-center gap-2 bg-sky-50 text-sky-700 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest w-fit border border-sky-100">
              <span className="flex h-2 w-2 rounded-full bg-sky-600 animate-pulse"></span> 
              Built for Philippine Healthcare
            </div>
            <h1 className="h1 text-primary">
              Spend more time with <br />
              <span className="text-secondary underline decoration-slate-200 underline-offset-12">patients</span>, not paperwork.
            </h1>
            <p className="text-xl text-slate-500 leading-relaxed max-w-xl">
              Ambient AI that understands local clinical nuances. Secure, HIPAA-compliant, and optimized for practitioners in the Philippines.
            </p>
          </div>

          <div className="flex flex-wrap gap-5 items-center">
            <button className="bg-primary hover:bg-slate-800 text-white px-8 py-4 rounded-full font-bold transition-all shadow-lg hover:shadow-primary/20">
              Request Demo
            </button>
            
            <div className="flex items-center gap-4">
              <div className="flex -space-x-3">
                <div className="w-11 h-11 rounded-full border-2 border-white bg-slate-200 flex items-center justify-center text-[10px] font-bold shadow-sm">Dr. A</div>
                <div className="w-11 h-11 rounded-full border-2 border-white bg-slate-300 flex items-center justify-center text-[10px] font-bold shadow-sm">Dr. M</div>
                <div className="w-11 h-11 rounded-full border-2 border-white bg-slate-400 flex items-center justify-center text-[10px] font-bold shadow-sm">Dr. R</div>
              </div>
              <div className="flex flex-col">
                <p className="text-sm font-bold text-slate-900 tracking-tight">Trusted by 500+ Doctors</p>
                <div className="flex text-amber-400 text-xs">★★★★★</div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          {/* Mockup UI */}
          <div className="relative z-10 bg-white border border-outline-variant p-6 rounded-xl shadow-2xl">
            <div className="flex items-center justify-between pb-4 border-b border-surface-variant mb-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-action-blue/10 rounded-full flex items-center justify-center text-action-blue">
                  <Mic size={20} />
                </div>
                <div>
                  <div className="label-caps !text-action-blue">Listening...</div>
                  <div className="body-md font-semibold text-primary">Consultation in Progress</div>
                </div>
              </div>
              <div className="px-2 py-1 bg-surface-container-low text-on-surface-variant label-caps rounded text-[10px]">
                04:12 mins
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="w-1.5 h-auto bg-action-blue rounded-full" />
                <div className="flex-grow space-y-2 py-1">
                  <div className="h-4 bg-surface-container rounded w-[80%]" />
                  <div className="h-4 bg-surface-container rounded w-[60%]" />
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-1.5 h-auto bg-surface-dim rounded-full" />
                <div className="flex-grow space-y-2 py-1 opacity-60">
                  <div className="h-4 bg-surface-container rounded w-full" />
                  <div className="h-4 bg-surface-container rounded w-[90%]" />
                  <div className="h-4 bg-surface-container rounded w-[40%]" />
                </div>
              </div>
              <div className="bg-surface-container-low rounded-lg p-4 mt-8 border border-outline-variant/30">
                <div className="label-caps mb-2 !text-primary">SOAP Note Extraction:</div>
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 size={14} className="text-action-blue mt-1 shrink-0" />
                    <div className="h-3 bg-action-blue/20 rounded w-full" />
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 size={14} className="text-action-blue mt-1 shrink-0" />
                    <div className="h-3 bg-action-blue/20 rounded w-[80%]" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Background Decorative Element */}
          <div className="absolute -top-10 -right-10 w-64 h-64 bg-action-blue/5 rounded-full blur-3xl -z-10" />
          <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-secondary/5 rounded-full blur-3xl -z-10" />
        </motion.div>
      </div>
    </section>
  );
}
