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
  ];

  return (
    <section id="about" className="">
      
    </section>
  );
}
