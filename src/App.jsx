import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ScrollStory from './components/ScrollStory'
import Pricing from './components/Pricing'
import Footer from './components/Footer'

function App() {
  return (
    <div className="relative min-h-screen bg-slate-950 text-slate-100">
      {/* background decoration */}
      <div aria-hidden className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(800px_400px_at_10%_10%,rgba(59,130,246,0.12),transparent),radial-gradient(700px_350px_at_90%_20%,rgba(34,211,238,0.1),transparent)]" />
      </div>

      <Navbar />

      <main>
        <Hero />
        <ScrollStory />

        {/* Product section */}
        <section id="product" className="py-24">
          <div className="mx-auto max-w-6xl px-6">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-6 backdrop-blur">
                <div className="aspect-[16/10] rounded-xl bg-slate-800/60 border border-white/10" />
              </div>
              <div>
                <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">Build a narrative, not just a page</h2>
                <p className="mt-4 text-slate-300">Compose sections like scenes. As visitors scroll, content fades, slides, and reveals in a sequence that makes sense and sells the outcome.</p>
                <ul className="mt-6 space-y-3 text-slate-300">
                  {['Scene-based editor','Timing controls for reveals','Prebuilt proof & product blocks','Works with any marketing stack'].map((f)=> (
                    <li key={f} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-tr from-blue-600 to-cyan-500" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <Pricing />
        <Footer />
      </main>
    </div>
  )
}

export default App
