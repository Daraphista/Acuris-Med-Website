import { useState } from 'react';
import { motion } from 'motion/react';
import { Calculator as CalcIcon, Clock, Landmark } from 'lucide-react';

export default function Calculator() {
  const [patientsPerDay, setPatientsPerDay] = useState(15);
  const [minutesPerPatient, setMinutesPerPatient] = useState(10);

  const WORKING_DAYS = 22; // Average per month
  const REVENUE_PER_CONSULT = 800; // Estimated PHP recovery

  const totalHoursSaved = (patientsPerDay * minutesPerPatient * WORKING_DAYS) / 60;
  const revenueRecovery = totalHoursSaved * (REVENUE_PER_CONSULT / (minutesPerPatient / 60)); 
  // Simplified recovery calculation: time saved could be spent on more consultations
  const recoveredConsults = (totalHoursSaved * 60) / minutesPerPatient;
  const totalRevenueRecovery = recoveredConsults * REVENUE_PER_CONSULT;

  return (
    <section id="calculator" className="py-24 bg-slate-50 overflow-hidden relative">
      <div className="container-max grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="flex flex-col gap-6">
          <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider w-fit">
            <span className="flex h-2 w-2 rounded-full bg-emerald-600"></span> 
            Efficiency Analysis
          </div>
          <h2 className="h1 text-slate-900 leading-[1.1]">Quantify your <span className="text-secondary">recovery.</span></h2>
          <p className="text-xl text-slate-500 leading-relaxed">
            Calculate exactly how much time and potential revenue you're losing to clinical documentation. See the impact of switching to Acuris.
          </p>

          <div className="mt-8 space-y-10">
            <div className="space-y-4">
              <div className="flex justify-between items-center text-xs font-bold text-slate-400 uppercase tracking-widest">
                <label>Average Patients / Day</label>
                <span className="text-secondary text-lg">{patientsPerDay} Patients</span>
              </div>
              <input
                type="range"
                min="5"
                max="50"
                value={patientsPerDay}
                onChange={(e) => setPatientsPerDay(parseInt(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-secondary"
              />
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-center text-xs font-bold text-slate-400 uppercase tracking-widest">
                <label>Minutes spent on notes per patient</label>
                <span className="text-secondary text-lg">{minutesPerPatient}m</span>
              </div>
              <div className="grid grid-cols-4 gap-3">
                {[5, 10, 15, 20].map((val) => (
                  <button
                    key={val}
                    onClick={() => setMinutesPerPatient(val)}
                    className={`py-3 rounded-xl text-sm font-bold transition-all border ${
                      minutesPerPatient === val 
                        ? 'bg-secondary text-white border-secondary shadow-lg shadow-sky-200' 
                        : 'bg-white text-slate-600 border-slate-200 hover:border-secondary/50'
                    }`}
                  >
                    {val}m
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="bg-white text-primary rounded-[2.5rem] p-10 shadow-2xl shadow-slate-200/60 border border-slate-100 relative z-10">
             <h3 className="text-xl font-bold text-slate-900 mb-8 flex items-center gap-3">
                <div className="bg-emerald-100 p-2 rounded-lg text-emerald-600">
                  <CalcIcon size={20} />
                </div>
                Monthly Savings Projection
             </h3>

            <div className="grid grid-cols-1 gap-6">
              <div className="bg-emerald-50 rounded-3xl p-8 border border-emerald-100 text-center">
                <p className="text-emerald-700 font-bold text-xs mb-3 uppercase tracking-[0.2em]">Potential Monthly Savings</p>
                <div className="text-6xl font-black text-emerald-800 tracking-tighter">
                  {Math.round(totalHoursSaved)} <span className="text-2xl uppercase tracking-normal">hours</span>
                </div>
                <div className="mt-4 pt-4 border-t border-emerald-100/50">
                   <p className="text-emerald-600 font-semibold">
                     Equivalent to ~₱{totalRevenueRecovery.toLocaleString('en-PH')} in recovered value
                   </p>
                </div>
              </div>

              <div className="p-6 bg-slate-50 rounded-2xl flex items-center gap-5 border border-slate-100 opacity-60 grayscale scale-95 origin-center">
                 <div className="bg-slate-200 p-3 rounded-lg text-slate-400">
                  <Landmark size={24} />
                 </div>
                 <div>
                   <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Clinic Admin Overhead</div>
                   <div className="text-xl font-bold text-slate-400">Reduced by 65%</div>
                 </div>
              </div>
            </div>

            <button className="w-full bg-slate-900 text-white py-4 rounded-full font-bold hover:bg-slate-800 transition-colors mt-8 shadow-sm">
                Request Optimization Report
            </button>
          </div>
          
          {/* Decorative accents */}
          <div className="absolute -top-6 -right-6 w-32 h-32 bg-secondary/5 rounded-full blur-2xl" />
          <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-emerald-100/20 rounded-full blur-2xl" />
        </div>
      </div>
    </section>
  );
}
