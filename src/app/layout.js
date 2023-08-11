import './globals.css'
import { Inter } from 'next/font/google'
import { StateProvider } from './stateContext'
import Provider from './components/Provider'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Netflix-By Sushant',
  description: 'Netflix Clone created by Sushant',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>
          <StateProvider>
            {children}
          </StateProvider>
        </Provider>
        </body>
    </html>
  )
}
