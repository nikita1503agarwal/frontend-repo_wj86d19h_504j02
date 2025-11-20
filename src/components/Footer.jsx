export default function Footer(){
  return (
    <footer id="contact" className="py-12">
      <div className="mx-auto max-w-6xl px-6">
        <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-6 backdrop-blur">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-blue-500 via-indigo-500 to-cyan-400" />
              <p className="text-slate-300 text-sm">© {new Date().getFullYear()} Nimbus. All rights reserved.</p>
            </div>
            <div className="flex items-center gap-4 text-slate-400 text-sm">
              <a href="#" className="hover:text-white">Privacy</a>
              <a href="#" className="hover:text-white">Terms</a>
              <a href="/test" className="hover:text-white">System check</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
