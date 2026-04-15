console.log("Ultra Gaming Hub Loaded");
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="bg-black text-white min-h-screen font-sans">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-10 py-6 backdrop-blur-md bg-white/5 sticky top-0 z-50">
        <h1 className="text-2xl font-bold tracking-wide text-cyan-400">UltraGamingHub</h1>
        <div className="space-x-6 text-sm">
          <a href="#" className="hover:text-cyan-400 transition">Home</a>
          <a href="#" className="hover:text-cyan-400 transition">Guides</a>
          <a href="#" className="hover:text-cyan-400 transition">Tips</a>
          <a href="#" className="hover:text-cyan-400 transition">Accessories</a>
          <a href="#" className="hover:text-cyan-400 transition">Updates</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center h-[90vh] px-6">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-7xl font-bold leading-tight"
        >
          Next-Level Gaming Starts Here 🎮
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-6 text-gray-400 max-w-xl"
        >
          Discover pro guides, insane tips, premium accessories and latest gaming updates in one place.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-8"
        >
          <Button className="bg-cyan-400 text-black px-6 py-3 rounded-2xl hover:scale-105 transition">
            Explore Now
          </Button>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="grid md:grid-cols-4 gap-6 px-10 pb-20">
        {["Guides", "Tips", "Accessories", "Updates"].map((item, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            className="p-6 rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 shadow-lg"
          >
            <h3 className="text-xl font-semibold mb-2">{item}</h3>
            <p className="text-gray-400 text-sm">Premium {item.toLowerCase()} content for gamers.</p>
          </motion.div>
        ))}
      </section>

      {/* Parallax Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <motion.div
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2 }}
          className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 blur-3xl"
        />
        <h2 className="text-4xl md:text-6xl font-bold z-10">
          Feel the Power of Gaming
        </h2>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 text-gray-500 border-t border-white/10">
        © 2026 UltraGamingHub. All rights reserved.
      </footer>
    </div>
  );
}
