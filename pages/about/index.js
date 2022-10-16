import React from 'react'
import Head from 'next/head'
import { useRouter } from "next/router"
import Button from "../../components/UI/Button"

const About = () => {
    const router = useRouter()
    const navigateToHomePageHandler = () => router.push("/")
    return (
        <>
            <Head>
                <title>About Brazilian Jiu-Jitsu</title>
                <meta name="description" content="Learn BJJ moves, maneuvers, and much more" />
            </Head>
            <div>
                <Button hoverStyling="hover:bg-orange-400 mb-7" onBack={navigateToHomePageHandler} />
            </div>
            <div className="w-6/6 mb-20">
                <h1 className='text-5xl md:text-6xl leading-normal mb-5 font-bold tracking-wide text-yellow-500'>What is Brazilian Jiu-Jitsu?</h1>
                <p className='w-12/12 text-small leading-normal text-yellow-300 mb-5'>{`Brazilian Jiu-Jitsu (or simply "BJJ") is a martial art that combines grappling with ground fighting to control and defeat opponents through dominant positioning and submissions.`}</p>

                <h1 className='text-5xl md:text-6xl leading-normal mt-10 mb-5 font-bold tracking-wide text-yellow-500'>Origins</h1>

                <p className='w-12/12 text-small leading-normal text-yellow-300 mb-5'>Mitsuyo Maeda, one of <a href="https://en.wikipedia.org/wiki/Kan%C5%8D_Jigor%C5%8D" rel='noreferrer' target={'_blank'}><u>Kanō Jigorō&#39;s</u></a> finest students, arrived in Brazil in 1914 after a largely successful career promoting Judo and jiu-jitsu overseas in demonstrations and hundreds of fights against all types of challengers.</p>

                <p className='w-12/12 text-small leading-normal text-yellow-300 mb-5'>During his stay in Brazil, he befriended Gastao Gracie, a local businessman who helped Maeda settle into the country and helped develop the local Japanese community. In return, Maeda offered to teach Jiu-Jitsu to Gastao&#39;s oldest son, Carlos Gracie. Carlos&#39;s brothers would also end up pursuing jiu-jitsu, including one <a href="https://en.wikipedia.org/wiki/Kan%C5%8D_Jigor%C5%8D" rel='noreferrer' target={'_blank'}><u>Helio Gracie</u></a>. </p>

                <p className='w-12/12 text-small leading-normal text-yellow-300 mb-5'>To adjust for his supposedly unimpressive physical talents and build, Helio adapted his jiu-jitsu to prioritise leverage and timing over raw power and quickness. A string of victories over several grappling juggernauts understated the viability of his grappling system, and despite losing to <a href="https://en.wikipedia.org/wiki/Masahiko_Kimura" rel='noreferrer' target={'_blank'}><u>Masahiko Kimura</u></a>, Helio&#39;s ability to go the distance with an all-time great Judoka testified to the effectiveness of the Brazilian&#39;s approach to Jiu-Jitsu.</p>

                <h1 className='text-5xl md:text-6xl leading-normal mt-10 mb-5 font-bold tracking-wide text-yellow-500'>BJJ Today</h1>

                <p className='w-12/12 text-small leading-normal text-yellow-300 mb-5'>To be continued.</p>
            </div>
        </>
    )
}

export default About