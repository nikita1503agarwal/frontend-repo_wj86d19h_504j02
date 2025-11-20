import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: 'Product', href: '#product' },
    { label: 'How it works', href: '#story' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 rounded-2xl border border-white/10 bg-slate-900/60 backdrop-blur supports-[backdrop-filter]:bg-slate-900/40">
          <div className="flex items-center justify-between px-6 py-4">
            <a href="#" className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-blue-500 via-indigo-500 to-cyan-400 shadow-lg shadow-blue-500/20" />
              <span className="text-white font-semibold tracking-tight">Nimbus</span>
            </a>

            <nav className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} className="text-sm text-slate-300 hover:text-white transition-colors">
                  {item.label}
                </a>
              ))}
            </nav>

            <div className="hidden md:flex items-center gap-3">
              <a href="#pricing" className="text-sm text-slate-300 hover:text-white">Log in</a>
              <a href="#pricing" className="inline-flex items-center rounded-lg bg-gradient-to-tr from-blue-600 to-cyan-500 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-blue-500/30">Get started</a>
            </div>

            <button className="md:hidden inline-flex items-center justify-center rounded-lg border border-white/10 p-2 text-slate-200" onClick={() => setOpen(!open)}>
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>

          {open && (
            <div className="md:hidden border-t border-white/10 px-6 py-4 space-y-3">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} className="block text-slate-300 hover:text-white" onClick={() => setOpen(false)}>
                  {item.label}
                </a>
              ))}
              <div className="pt-2 flex gap-3">
                <a href="#pricing" className="flex-1 text-center rounded-lg border border-white/10 px-4 py-2 text-sm text-slate-200">Log in</a>
                <a href="#pricing" className="flex-1 text-center rounded-lg bg-gradient-to-tr from-blue-600 to-cyan-500 px-4 py-2 text-sm font-semibold text-white">Get started</a>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
