import '../styles/globals.css'
import 'tailwindcss/tailwind.css';
import Container from '../components/UI/Layout/Container';

function MyApp({ Component, pageProps }) {
  return (
    <div className='flex flex-col justify-between h-screen'>
      <Container classes={"pt-16"}>
        <Component {...pageProps} />
      </Container>
      <footer className='bg-gradient-to-r from-black via-black to-black text-center text-white bottom-0 left-0 mt-10 w-full py-8'>
        <Container>
          <div className='flex flex-col items-center flex-wrap justify-center'>
            <h1 className='text-sm mb-2'>A Simple Brazilian Jit-Jitsu Resource Site</h1>
            <h1 className='text-sm mb-1'>nevintay@hotmail.com | {new Date().toLocaleString('default', { year: "numeric" })}</h1>
          </div>
        </Container>
      </footer>
    </div>
  )
}

export default MyApp
