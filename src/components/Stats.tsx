import { motion } from 'motion/react';
import { Clock, TrendingDown, ShieldCheck } from 'lucide-react';

export default function Stats() {
  const stats = [
    {
      icon: <Clock size={32} className="text-secondary" />,
      value: '30-40%',
      label: 'Clinical time recovered from documentation.',
    },
    {
      icon: <TrendingDown size={32} className="text-secondary" />,
      value: '80%',
      label: 'Lower inference costs via Med-Signal™ architecture.',
    },
    {
      icon: <ShieldCheck size={32} className="text-secondary" />,
      value: '37 Years',
      label: 'SME-validated authority on the founding team.',
    },
  ];

  return (
    <section className="bg-slate-50 border-y border-slate-200 py-20">
      <div className="container-max grid grid-cols-1 md:grid-cols-3 gap-10">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            className="flex flex-col gap-5 p-10 bg-white border border-slate-200 rounded-3xl shadow-sm hover:shadow-xl hover:shadow-slate-200/50 transition-all group"
          >
            <div className="bg-slate-50 w-16 h-16 rounded-2xl flex items-center justify-center group-hover:bg-sky-50 transition-colors">
              {stat.icon}
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="text-5xl font-black text-primary tracking-tight">{stat.value}</h3>
              <p className="text-sm font-bold text-slate-500 uppercase tracking-widest leading-relaxed mt-2">{stat.label}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
