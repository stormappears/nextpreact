import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '@/components/navbar';
import Script from 'next/script'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Stage ',
  description: 'News about everything',
}




export default function RootLayout({ children }) {

  function opentech(){
    console.log("clicked")
  }
  return (<>
    
    <html lang="en">
    <Script src="/bundle.js" />
    <Script src='hotjar.js'/>
      <body className={inter.className}>
        <Navbar></Navbar>
        <div className='wrapper' id='wrapper'>
        {children}
        </div>
        </body>
    </html>
    </>
  )
}
