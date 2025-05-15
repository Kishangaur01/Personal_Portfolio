import { Routes, Route } from 'react-router-dom'
import Header from './sections/Header'
import Hero from './sections/Hero'
import About from './sections/About'
import Projects from './sections/Projects'
import Contact from './sections/Contact'
import Footer from './sections/Footer'

function App() {
  
  return (
    <div className="relative min-h-screen text-white">
      {/* Background Layer */}
      <div className="fixed inset-0 -z-10 bg-gradient-to-br from-indigo-800 via-purple-900 to-black backdrop-blur-md opacity-80" />

      <Header />
      <section id="home">
      <Hero />
      </section>
      <section id="about">
      <About />
      </section>
      <section id="projects">
      <Projects />
      </section>
      <section id="contact">
      <Contact />
      </section>
      <section id="footer">
      <Footer />
      </section>
    </div>
  );
}

export default App
