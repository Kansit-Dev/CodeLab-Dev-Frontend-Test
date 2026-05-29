import Link from 'next/link'

export default function HomePage() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-8">
      <div className="relative z-10 flex flex-col items-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center tracking-tight">CodeLab Dev Frontend Test</h1>
        <p className="text-neutral-400 mb-12 text-center max-w-md">
          Two landing pages showcasing different design aesthetics and interactions.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-8 w-full max-w-3xl justify-center">
          {/* Task 1 Card: Fashion */}
          <Link 
            href="/task1"
            className="group relative px-8 py-8 bg-[#FAF7F2] text-[#2C1F14] rounded-xl hover:scale-105 transition-all duration-300 text-center min-w-72 shadow-lg hover:shadow-2xl hover:shadow-[#FAF7F2]/20"
          >
            <div className="absolute inset-0 rounded-xl bg-white/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 mix-blend-overlay" />
            <p className="text-xs uppercase tracking-widest text-[#C4B5A5] mb-3">Task 1</p>
            <h2 className="text-3xl font-serif mb-2">ORACLE</h2>
            <p className="text-sm text-[#8B7355] mt-2 font-medium">Fashion Lifestyle Landing</p>
          </Link>
          
          {/* Task 2 Card: Fortune Telling */}
          <Link 
            href="/task2"
            className="group relative px-8 py-8 rounded-xl hover:scale-105 transition-all duration-300 text-center min-w-72 shadow-lg hover:shadow-2xl hover:shadow-[#C9A84C]/30"
            style={{
              background: 'linear-gradient(135deg, #2D0B0B 0%, #1A0A0A 100%)',
              border: '1px solid rgba(201,168,76,0.3)',
            }}
          >
            <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-[#C9A84C]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            <p className="text-xs uppercase tracking-widest text-[#C9A84C]/80 mb-3">Task 2</p>
            <h2 className="text-3xl font-serif text-[#C9A84C] mb-2 drop-shadow-sm">Fortune Telling</h2>
            <p className="text-sm text-[#C9A84C]/70 mt-2 font-medium">Mystical Oracle Landing</p>
          </Link>
        </div>
      </div>
    </main>
  )
}
