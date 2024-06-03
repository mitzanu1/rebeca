import './globals.css'
import { Cormorant_Garamond } from 'next/font/google'

const font = Cormorant_Garamond({ 
  subsets: ['latin'],
  weight:'700'
})

export const metadata = {
  title: 'Rebecca Andreescu',
  description: 'Pagina de profil Rebecca Andreescu',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  )
}
