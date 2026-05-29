import Link from 'next/link'

export default function HomePage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white flex flex-col items-center justify-center p-8">
      <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">CodeLab Dev Frontend Test</h1>
      <p className="text-neutral-400 mb-12 text-center max-w-md">
        Two landing pages showcasing different design aesthetics and interactions.
      </p>
      
      <div className="flex flex-col sm:flex-row gap-6">
        <Link 
          href="/task1"
          className="group relative px-8 py-6 bg-[#FAF7F2] text-[#2C1F14] rounded-lg hover:scale-105 transition-transform duration-300 text-center min-w-64"
        >
          <p className="text-xs uppercase tracking-widest text-[#C4B5A5] mb-2">Task 1</p>
          <h2 className="text-2xl font-serif">ORACLE</h2>
          <p className="text-sm text-[#C4B5A5] mt-2">Fashion Lifestyle Landing</p>
        </Link>
        
        <Link 
          href="/task2"
          className="group relative px-8 py-6 rounded-lg hover:scale-105 transition-transform duration-300 text-center min-w-64"
          style={{
            background: 'linear-gradient(135deg, #2D0B0B 0%, #1A0A0A 100%)',
            border: '1px solid rgba(201,168,76,0.3)',
          }}
        >
          <p className="text-xs uppercase tracking-widest text-[#C9A84C]/70 mb-2">Task 2</p>
          <h2 className="text-2xl font-serif text-[#C9A84C]">Fortune Telling</h2>
          <p className="text-sm text-[#C9A84C]/60 mt-2">Mystical Oracle Landing</p>
        </Link>
      </div>
    </main>
  )
}
