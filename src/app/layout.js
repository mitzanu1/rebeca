import './globals.css'
import { Dancing_Script } from 'next/font/google'

const font = Dancing_Script({ subsets: ['latin'] })

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
