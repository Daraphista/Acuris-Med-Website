/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Calculator from './components/Calculator';
import Team from './components/Team';
import Features from './components/Features';
import LeadForm from './components/LeadForm';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Features />
        <Calculator />
        <Team />
        <LeadForm />
      </main>
      <Footer />
    </div>
  );
}
