import './globals.css'
import { Inter } from 'next/font/google'
import { AiOutlineSearch } from 'react-icons/ai';


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Stage ',
  description: 'News about everything',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className='navbar'>
          <a href='/'>Home</a>
          <a href='/home'>Entertainment</a>
          <a href='/tech'>Technology</a>
          <a href='/home'>Buisness</a>
          <a href='/home'>Lifestyle</a>
          <a href='/home'>social Media</a>
          <a href='/home'>Science</a>
          <a href='/home'>Politics</a>
          <a href='/home'>Health</a>
          <a><AiOutlineSearch color='rgb(211, 207, 207)' size='18'/></a> 
        </div>
        {children}</body>
    </html>
  )
}
