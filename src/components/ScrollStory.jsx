import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export default function ScrollStory() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] })

  const headlineY = useTransform(scrollYProgress, [0, 1], [0, -120])
  const panel1Opacity = useTransform(scrollYProgress, [0, 0.25], [1, 0])
  const panel2Opacity = useTransform(scrollYProgress, [0.25, 0.55], [0, 1])
  const panel3Opacity = useTransform(scrollYProgress, [0.55, 0.9], [0, 1])

  return (
    <section id="story" ref={ref} className="relative min-h-[250vh]">
      <div className="sticky top-0 h-screen overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(600px_300px_at_20%_20%,rgba(59,130,246,0.15),transparent),radial-gradient(600px_300px_at_80%_80%,rgba(34,211,238,0.12),transparent)]" />

        <motion.h2 style={{ y: headlineY }} className="mx-auto max-w-3xl px-6 text-center text-4xl sm:text-6xl font-bold text-white pt-24">
          Your story unfolds as people scroll
        </motion.h2>

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl px-6">
            <motion.div style={{ opacity: panel1Opacity }} className="rounded-2xl border border-white/10 bg-slate-900/50 p-6 backdrop-blur">
              <h3 className="text-white font-semibold text-lg">Hook</h3>
              <p className="mt-2 text-slate-300 text-sm">Open with a crisp problem and outcome. We frame the narrative for your ideal customer.</p>
              <div className="mt-4 aspect-video rounded-lg bg-slate-800/60 border border-white/10" />
            </motion.div>

            <motion.div style={{ opacity: panel2Opacity }} className="rounded-2xl border border-white/10 bg-slate-900/50 p-6 backdrop-blur">
              <h3 className="text-white font-semibold text-lg">Proof</h3>
              <p className="mt-2 text-slate-300 text-sm">Show social proof, metrics, and quick wins that build trust without fluff.</p>
              <div className="mt-4 aspect-video rounded-lg bg-slate-800/60 border border-white/10" />
            </motion.div>

            <motion.div style={{ opacity: panel3Opacity }} className="rounded-2xl border border-white/10 bg-slate-900/50 p-6 backdrop-blur">
              <h3 className="text-white font-semibold text-lg">Product</h3>
              <p className="mt-2 text-slate-300 text-sm">Reveal product moments at the right time with buttery-smooth transitions.</p>
              <div className="mt-4 aspect-video rounded-lg bg-slate-800/60 border border-white/10" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
