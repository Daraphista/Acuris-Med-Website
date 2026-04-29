import { useState, type FormEvent } from 'react';
import { motion } from 'motion/react';
import { Send, CheckCircle } from 'lucide-react';

export default function LeadForm() {
  const [formState, setFormState] = useState<'idle' | 'loading' | 'success'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    hospital: '',
    specialty: ''
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setFormState('loading');
    
    // Simulate API call
    setTimeout(() => {
      setFormState('success');
      // Placeholder for Webhook URL logic: fetch('MY_WEBHOOK_URL', { method: 'POST', body: JSON.stringify(formData) })
    }, 1500);
  };

  if (formState === 'success') {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white p-12 rounded-xl text-center shadow-xl border border-green-100"
      >
        <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle size={40} />
        </div>
        <h3 className="h2 text-primary mb-2">Request Received</h3>
        <p className="body-lg text-on-surface-variant max-w-sm mx-auto">
          Our clinical onboarding team will contact you within 24 hours to schedule your Acuris Med AI demonstration.
        </p>
      </motion.div>
    );
  }

  return (
    <section id="demo" className="py-32 bg-white">
      <div className="container-max grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 bg-sky-50 text-sky-700 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest w-fit border border-sky-100">
            Professional Onboarding
          </div>
          <h2 className="h1 text-slate-900">Ready to regain <br />your <span className="text-secondary">schedule?</span></h2>
          <p className="text-xl text-slate-500 leading-relaxed">
            Join the initial cohort of Filipino physicians using Acuris. We provide end-to-end setup and EMR integration support for your clinic or hospital department.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              'EMR Integration support',
              'On-site clinical training',
              'Compliance certification',
              '24/7 Premium Support'
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="bg-emerald-50 text-emerald-600 p-1 rounded-full">
                  <CheckCircle size={14} />
                </div>
                <span className="text-sm font-bold text-slate-700">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white p-10 md:p-12 rounded-[2.5rem] shadow-[0_20px_50px_rgba(15,23,42,0.08)] border border-slate-100">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block px-1">Full Name</label>
              <input
                required
                type="text"
                placeholder="Dr. Juan Dela Cruz"
                className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:bg-white focus:border-secondary focus:ring-4 focus:ring-sky-100 outline-none transition-all font-medium"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block px-1">Professional Email</label>
              <input
                required
                type="email"
                placeholder="doctor@hospital.com.ph"
                className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:bg-white focus:border-secondary focus:ring-4 focus:ring-sky-100 outline-none transition-all font-medium"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block px-1">Hospital/Clinic</label>
                <input
                  required
                  type="text"
                  placeholder="SLMC"
                  className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:bg-white focus:border-secondary focus:ring-4 focus:ring-sky-100 outline-none transition-all font-medium"
                  value={formData.hospital}
                  onChange={(e) => setFormData({...formData, hospital: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block px-1">Specialty</label>
                <input
                  required
                  type="text"
                  placeholder="Cardiology"
                  className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:bg-white focus:border-secondary focus:ring-4 focus:ring-sky-100 outline-none transition-all font-medium"
                  value={formData.specialty}
                  onChange={(e) => setFormData({...formData, specialty: e.target.value})}
                />
              </div>
            </div>
            
            <button
              disabled={formState === 'loading'}
              type="submit"
              className="w-full bg-slate-900 hover:bg-slate-800 text-white py-5 rounded-full font-bold transition-all flex items-center justify-center gap-3 mt-6 shadow-xl shadow-slate-200"
            >
              {formState === 'loading' ? (
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                <>
                  <Send size={18} />
                  Claim My Demo
                </>
              )}
            </button>
            <p className="text-[10px] font-bold text-slate-400 text-center mt-6 uppercase tracking-widest leading-loose">
              Data protected under DPA 2012 by Acuris Med AI Security.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
