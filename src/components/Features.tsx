import { motion } from 'motion/react';
import { Mic2, ShieldCheck, Zap, Globe, FileText, UserCheck } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: <Mic2 />,
      title: 'Ambient Scribing',
      desc: 'Focus on the conversation; let Acuris handle the SOAP notes automatically.',
    },
    {
      icon: <ShieldCheck />,
      title: 'HIPAA-Grade Security',
      desc: 'Zero patient data leaves the device. Military-grade encryption at every layer.',
    },
    {
      icon: <UserCheck />,
      title: 'SME Verified',
      desc: 'Human-in-the-loop accuracy to ensure clinical safety and precision.',
    },
    {
      icon: <Globe />,
      title: 'Local-First Infrastructure',
      desc: 'Reliable performance even with varying internet speeds across the Philippines.',
    },
    {
      icon: <Zap />,
      title: 'EMR-Ready Integration',
      desc: 'Seamlessly export notes to your existing Electronic Medical Record system.',
    },
    {
      icon: <FileText />,
      title: 'Structure & Format',
      desc: 'Automatically formatted SOAP, psychiatric, or specialized clinical notes.',
    }
  ];

  return (
    <section id="services" className="py-32 bg-white">
      <div className="container-max">
        <div className="text-center max-w-3xl mx-auto mb-20 flex flex-col gap-6">
          <div className="inline-flex items-center gap-2 bg-sky-50 text-sky-700 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest w-fit mx-auto border border-sky-100">
            Platform Capabilities
          </div>
          <h2 className="h1 text-slate-900">Built for the Clinical <span className="text-secondary">Workflow.</span></h2>
          <p className="text-xl text-slate-500 leading-relaxed">
            We don't just record audio. We understand medicine. Acuris is designed to integrate into your busy schedule without changing how you interact with patients.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="p-10 rounded-3xl bg-white border border-slate-100 hover:border-sky-200 hover:shadow-2xl hover:shadow-sky-100/50 transition-all group relative overflow-hidden"
            >
              <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center text-primary group-hover:bg-secondary group-hover:text-white transition-all mb-8 shadow-sm">
                {f.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4 tracking-tight">{f.title}</h3>
              <p className="text-slate-500 font-medium leading-relaxed">
                {f.desc}
              </p>
              
              <div className="absolute top-0 right-0 w-32 h-32 bg-sky-50/50 rounded-full blur-3xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
