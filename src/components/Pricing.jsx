export default function Pricing(){
  const tiers = [
    { name: 'Starter', price: '$0', features: ['1 project', 'Basic blocks', 'Community support'] },
    { name: 'Pro', price: '$29', popular: true, features: ['Unlimited projects', 'Advanced story blocks', 'Priority support'] },
    { name: 'Team', price: '$79', features: ['Everything in Pro', 'Collaboration tools', 'Role permissions'] },
  ]

  return (
    <section id="pricing" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <h2 className="text-3xl sm:text-5xl font-bold text-white">Simple pricing</h2>
          <p className="mt-4 text-slate-300">Pick the plan that fits your stage</p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {tiers.map((t) => (
            <div key={t.name} className={`rounded-2xl border ${t.popular ? 'border-blue-500/40' : 'border-white/10'} bg-slate-900/60 p-6 backdrop-blur`}>
              <div className="flex items-center justify-between">
                <h3 className="text-white font-semibold">{t.name}</h3>
                {t.popular && <span className="text-xs rounded-full bg-blue-500/20 text-blue-300 px-2 py-1">Popular</span>}
              </div>
              <p className="mt-4 text-3xl font-bold text-white">{t.price}<span className="text-sm text-slate-400">/mo</span></p>
              <ul className="mt-6 space-y-2 text-sm text-slate-300">
                {t.features.map((f) => (
                  <li key={f} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-tr from-blue-600 to-cyan-500" />
                    {f}
                  </li>
                ))}
              </ul>
              <a href="#" className={`mt-6 block text-center rounded-lg px-4 py-2 text-sm font-semibold ${t.popular ? 'bg-gradient-to-tr from-blue-600 to-cyan-500 text-white' : 'border border-white/10 text-slate-200'}`}>Choose plan</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
