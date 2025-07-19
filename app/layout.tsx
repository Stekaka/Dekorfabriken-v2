import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Dekorfabriken - Exakt. Elegant. Extremt hållbart.',
  description: 'Foliering & dekor i toppklass – från fordon till fasad. Specialiserad på fordonsdekor, foliering, skyltar och dekaler.',
  keywords: 'foliering, fordonsdekor, skyltar, dekaler, vinyl, bilfoliering',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="sv" className="dark">
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
