import { Inter } from 'next/font/google'

import '@styles/globals.css'
import Nav from '@components/Nav'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Eco-efficiency Calculator',
  description: 'Compare products based on their economic and environmental impact',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className='w-screen h-screen fixed flex justify-center pointer-events-none -z-10'>
          <div className="
before:absolute 
before:h-[300px] 
before:w-[480px] 
before:top-1/4 
before:-translate-x-1/2 
before:rounded-full 
before:bg-gradient-radial 
before:from-white 
before:to-transparent 
before:blur-2xl 
before:content-[''] 
before:dark:bg-gradient-to-br 
before:dark:from-transparent 
before:dark:to-blue-700 
before:dark:opacity-10  
before:lg:h-[360px]

after:absolute 
after:h-80
after:w-60
after:top-1/4
after:-z-20
after:rotate-12
after:bg-gradient-conic 
after:from-primary-dark
after:via-lime-200
after:opacity-60
after:blur-2xl 
after:content-[''] 
after:dark:from-primary-light
after:dark:via-teal-900
after:dark:opacity-40
"
          />
        </div>
        <main className='h-full w-full flex justify-center'>
          <Nav />
          {children}
        </main>
      </body>
    </html>
  )
}
