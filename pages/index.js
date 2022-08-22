import Head from 'next/head'
import 'tailwindcss/tailwind.css';

import Hero from "../components/Hero"

export default function Home() {
  return (
    <>
      <Head>
        <title>A BJJ Help Site</title>
        <meta name="description" content="Learn BJJ moves, maneuvers, and much more" />
      </Head>
      <Hero />
    </>
  )
}
