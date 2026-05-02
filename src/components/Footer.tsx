import { Linkedin, Facebook, Instagram } from 'lucide-react';

export default function Footer() {
  const socials = [
    { name: 'LinkedIn', icon: <Linkedin size={18} />, href: 'https://www.linkedin.com/company/acurismed-ai' },
    { name: 'Facebook', icon: <Facebook size={18} />, href: 'https://web.facebook.com/profile.php?id=61588965596387' },
    { name: 'Instagram', icon: <Instagram size={18} />, href: 'https://www.instagram.com/acurismed.ai' },
  ];

  return (
    <footer className="bg-slate-900 text-white pt-24 pb-12">
      <div className="container-max">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          <div className="flex flex-col gap-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 flex items-center justify-center bg-white rounded-lg shadow-sm overflow-hidden border border-slate-800">
                <img 
                  src="/logo.png" 
                  alt="Acuris Logo" 
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-xl font-black tracking-tighter uppercase whitespace-nowrap text-white">ACURIS MED AI</span>
            </div>
            <p className="text-sm font-medium text-slate-400 leading-relaxed">
              Solving physician burnout through intelligent, medical-grade ambient scribing. Optimized for the Philippine healthcare landscape.
            </p>
            <div className="flex gap-4">
              {socials.map((social) => (
                <a 
                  key={social.name}
                  href={social.href} 
                  target="_blank" 
                  rel="noreferrer"
                  className="w-10 h-10 rounded-full border border-slate-800 flex items-center justify-center text-slate-400 hover:bg-white hover:text-primary transition-all"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-[10px] font-bold text-white uppercase tracking-[0.25em] mb-8">Compliance</h4>
            <ul className="flex flex-col gap-4 text-sm font-bold text-slate-400">
              <li><a href="#" className="hover:text-secondary transition-colors">HIPAA Compliance</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">DPA 2012 Guidelines</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Security Whitepaper</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-bold text-white uppercase tracking-[0.25em] mb-8">Company</h4>
            <ul className="flex flex-col gap-4 text-sm font-bold text-slate-400">
              <li><a href="#" className="hover:text-secondary transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Clinical SME Team</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Media Kit</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-bold text-white uppercase tracking-[0.25em] mb-8">Location</h4>
            <p className="text-sm font-bold text-slate-400 leading-loose mb-6">
              Bonifacio Global City,<br />
              Taguig, Metro Manila,<br />
              Philippines 1634
            </p>
            <div className="flex gap-4 items-center">
               <div className="px-3 py-1.5 border border-slate-700 rounded text-[10px] text-white font-bold uppercase tracking-[0.15em]">HIPAA Compliant</div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-12 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-[11px] font-bold text-slate-500 uppercase tracking-widest">
            © 2024 Acuris Med AI. Zero patient data leaves the device.
          </p>
          <div className="flex items-center gap-10 grayscale opacity-40">
             <img src="https://img.icons8.com/color/48/000000/google-cloud.png" alt="Google Cloud" className="h-6" />
             <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-emerald-500 rounded-full" />
                <span className="text-[10px] font-bold uppercase tracking-widest">Systems Active</span>
             </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
