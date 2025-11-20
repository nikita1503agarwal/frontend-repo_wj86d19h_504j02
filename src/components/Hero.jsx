import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-28">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-blue-500/20 blur-[100px]" />
        <div className="absolute top-40 right-10 h-40 w-40 rounded-full bg-cyan-400/20 blur-[60px]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-4xl sm:text-6xl font-bold tracking-tight text-white">
              Tell your product story with effortless polish
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.6 }} className="mt-6 text-lg text-slate-300">
              Nimbus helps SaaS teams craft beautiful landing pages that unfold as you scroll — no design degree required.
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.6 }} className="mt-8 flex gap-3">
              <a href="#pricing" className="inline-flex items-center rounded-lg bg-gradient-to-tr from-blue-600 to-cyan-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/30">Start free</a>
              <a href="#story" className="inline-flex items-center rounded-lg border border-white/10 px-5 py-3 text-sm font-semibold text-slate-200">See how it works</a>
            </motion.div>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="mt-10 flex items-center gap-4 text-slate-400">
              <div className="flex -space-x-2">
                {[...Array(5)].map((_, i) => (
                  <img key={i} src={`https://i.pravatar.cc/48?img=${i+3}`} className="h-8 w-8 rounded-full ring-2 ring-slate-900" />
                ))}
              </div>
              <p className="text-sm">Trusted by 2,000+ SaaS teams</p>
            </motion.div>
          </div>

          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15, duration: 0.6 }} className="relative">
            <div className="relative rounded-2xl border border-white/10 bg-slate-900/50 p-2 backdrop-blur">
              <div className="rounded-xl bg-gradient-to-b from-slate-800 to-slate-900 p-6">
                <div className="grid grid-cols-2 gap-4">
                  {[1,2,3,4].map((i) => (
                    <div key={i} className="aspect-video rounded-lg border border-white/10 bg-slate-800/60" />
                  ))}
                </div>
                <div className="mt-4 aspect-[16/7] rounded-lg border border-white/10 bg-slate-800/60" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
