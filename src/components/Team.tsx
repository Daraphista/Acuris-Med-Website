import { motion } from 'motion/react';
import { Linkedin, Mail, Facebook, Instagram } from 'lucide-react';

export default function Team() {
  const team = [
    {
      name: 'Efren Karl D. Atienza',
      role: 'Chief Executive Officer & Founder',
      desc: 'Leading the vision to revolutionize healthcare documentation in the Philippines through accessible AI technology.',
      image: '/efren_atienza.jpg',
      fallbackImage: 'https://images.unsplash.com/photo-1618077360395-f3068be8e001?w=400&h=400&fit=crop',
      socials: [
        { name: 'LinkedIn', icon: <Linkedin size={14} />, href: 'https://www.linkedin.com/company/acurismed-ai' },
        { name: 'Facebook', icon: <Facebook size={14} />, href: 'https://web.facebook.com/profile.php?id=61588965596387' },
        { name: 'Instagram', icon: <Instagram size={14} />, href: 'https://www.instagram.com/acurismed.ai' },
      ]
    },
    {
      name: 'Hannah Arlene V. Juan',
      role: 'Chief Operating Officer / SME',
      desc: 'Bridging clinical excellence with operational efficiency, ensuring our solutions meet real-world medical needs.',
      image: '/Hannah_Juan.jpg',
      fallbackImage: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop',
      socials: [
        { name: 'LinkedIn', icon: <Linkedin size={14} />, href: 'https://www.linkedin.com/company/acurismed-ai' },
        { name: 'Facebook', icon: <Facebook size={14} />, href: 'https://web.facebook.com/profile.php?id=61588965596387' },
        { name: 'Instagram', icon: <Instagram size={14} />, href: 'https://www.instagram.com/acurismed.ai' },
      ]
    },
    {
      name: 'Angelo Raphael G. Mendoza',
      role: 'Chief Technology Officer',
      desc: 'Architecting high-performance, medical-grade AI systems with a focus on security and low-latency performance.',
      image: '/Angelo_Mendoza.jpg',
      fallbackImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop',
      socials: [
        { name: 'LinkedIn', icon: <Linkedin size={14} />, href: 'https://www.linkedin.com/company/acurismed-ai' },
        { name: 'Facebook', icon: <Facebook size={14} />, href: 'https://web.facebook.com/profile.php?id=61588965596387' },
        { name: 'Instagram', icon: <Instagram size={14} />, href: 'https://www.instagram.com/acurismed.ai' },
      ]
    },
    {
      name: 'David Genesis C. Pedeglorio',
      role: 'Chief Business Officer',
      desc: 'Driving strategic partnerships and market expansion to bring Acuris to every clinic and hospital nationwide.',
      image: '/David_Pedeglorio.jpg',
      fallbackImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
      socials: [
        { name: 'LinkedIn', icon: <Linkedin size={14} />, href: 'https://www.linkedin.com/company/acurismed-ai' },
        { name: 'Facebook', icon: <Facebook size={14} />, href: 'https://web.facebook.com/profile.php?id=61588965596387' },
        { name: 'Instagram', icon: <Instagram size={14} />, href: 'https://www.instagram.com/acurismed.ai' },
      ]
    },
    {
      name: 'Majrahani A. Perez',
      role: 'Chief Strategic Officer',
      desc: 'Shaping long-term growth and innovative strategies to navigate the evolving health-tech landscape.',
      image: '/Majrahani_Perez.jpeg',
      fallbackImage: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop',
      position: 'top',
      socials: [
        { name: 'LinkedIn', icon: <Linkedin size={14} />, href: 'https://www.linkedin.com/company/acurismed-ai' },
        { name: 'Facebook', icon: <Facebook size={14} />, href: 'https://web.facebook.com/profile.php?id=61588965596387' },
        { name: 'Instagram', icon: <Instagram size={14} />, href: 'https://www.instagram.com/acurismed.ai' },
      ]
    },
    {
      name: 'Clode Vincent A. Bias',
      role: 'Chief Marketing Officer',
      desc: 'Leading our brand story and digital presence to connect deeply with the medical community.',
      image: '/Clode_Bias.jpg',
      fallbackImage: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop',
      socials: [
        { name: 'LinkedIn', icon: <Linkedin size={14} />, href: 'https://www.linkedin.com/company/acurismed-ai' },
        { name: 'Facebook', icon: <Facebook size={14} />, href: 'https://web.facebook.com/profile.php?id=61588965596387' },
        { name: 'Instagram', icon: <Instagram size={14} />, href: 'https://www.instagram.com/acurismed.ai' },
      ]
    },
    {
      name: 'Anthony Calpe',
      role: 'Chief Sales Officer',
      desc: 'Empowering physicians with the right tools through client-focused solutions and relationship management.',
      image: '/Anthony_Calpe2.jpg.png',
      fallbackImage: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop',
      position: 'top',
      socials: [
        { name: 'LinkedIn', icon: <Linkedin size={14} />, href: 'https://www.linkedin.com/company/acurismed-ai' },
        { name: 'Facebook', icon: <Facebook size={14} />, href: 'https://web.facebook.com/profile.php?id=61588965596387' },
        { name: 'Instagram', icon: <Instagram size={14} />, href: 'https://www.instagram.com/acurismed.ai' },
      ]
    },
    {
      name: 'Reymian Joshua A. Cuico',
      role: 'Head of HR & Admin',
      desc: 'Fostering a culture of innovation and excellence while managing our growing human capital and infrastructure.',
      image: '/Reymian_Cuico.jpg',
      fallbackImage: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&h=400&fit=crop',
      socials: [
        { name: 'LinkedIn', icon: <Linkedin size={14} />, href: 'https://www.linkedin.com/company/acurismed-ai' },
        { name: 'Facebook', icon: <Facebook size={14} />, href: 'https://web.facebook.com/profile.php?id=61588965596387' },
        { name: 'Instagram', icon: <Instagram size={14} />, href: 'https://www.instagram.com/acurismed.ai' },
      ]
    },
  ];

  return (
    <section id="about" className="py-32 bg-white">
      <div className="container-max">
        <div className="text-center max-w-3xl mx-auto mb-20 flex flex-col gap-6">
          <div className="inline-flex items-center gap-2 bg-sky-50 text-sky-700 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest w-fit mx-auto border border-sky-100">
            Our Leadership
          </div>
          <h2 className="h1 text-slate-900">The Minds Behind <span className="text-secondary">Acuris.</span></h2>
          <p className="text-xl text-slate-500 leading-relaxed">
            A combination of veteran clinical expertise and cutting-edge engineering focused on one mission: returning time to doctors.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {team.map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group p-2 rounded-[2rem] bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-2xl hover:shadow-slate-200/50 transition-all"
            >
              <div className="aspect-[4/5] overflow-hidden rounded-[1.8rem] mb-6 relative">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  onError={(e) => {
                    const img = e.currentTarget;
                    if (member.fallbackImage && img.src !== member.fallbackImage) {
                      img.src = member.fallbackImage;
                    }
                  }}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  style={{ objectPosition: (member as any).position || 'center' }}
                />
              </div>
              <div className="px-6 pb-8">
                <div className="label-caps !text-secondary mb-2">{member.role}</div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3 tracking-tight">{member.name}</h3>
                <p className="text-sm font-medium text-slate-500 leading-relaxed mb-6">
                  {member.desc}
                </p>
                <div className="flex gap-2">
                  {member.socials.map((social) => (
                    <a 
                      key={social.name}
                      href={social.href} 
                      target="_blank" 
                      rel="noreferrer"
                      className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:bg-primary hover:text-white hover:border-primary transition-all"
                    >
                      {social.icon}
                    </a>
                  ))}
                  <button className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:bg-primary hover:text-white hover:border-primary transition-all ml-auto">
                    <Mail size={14} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
