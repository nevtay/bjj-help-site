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
                <p className='w-12/12 text-small leading-normal text-yellow-300 mb-5'>{`Brazilian Jiu-Jitsu (or simply "BJJ") is a martial art that combines grappling with ground fighting to control and defeat opponents.`}</p>

                <h1 className='text-5xl md:text-6xl leading-normal mt-10 mb-5 font-bold tracking-wide text-yellow-500'>Origins</h1>

                <p className='w-12/12 text-small leading-normal text-yellow-300 mb-5'>Mitsuyo Maeda, one of <a href="https://en.wikipedia.org/wiki/Kan%C5%8D_Jigor%C5%8D" rel='noreferrer' target={'_blank'}><u>Kanō Jigorō&#39;s</u></a> finest students, arrived in Brazil in 1914 after a largely successful career promoting Judo and jiu-jitsu overseas in demonstrations and hundreds of fights against all types of challengers.</p>

                <p className='w-12/12 text-small leading-normal text-yellow-300 mb-5'>He would befriend a local businessman, Gastao Gracie, who helped Maeda settle down while also developing the Japanese community there. In return, Maeda taught Jiu-Jitsu to Gastao&#39;s oldest son, Carlos Gracie. Carlos&#39;s brothers would also end up pursuing jiu-jitsu, including the man who would formulate Brazilian Jiu-Jitsu as we know today: <a href="https://en.wikipedia.org/wiki/Kan%C5%8D_Jigor%C5%8D" rel='noreferrer' target={'_blank'}><u>Helio Gracie</u></a>. </p>

                <p className='w-12/12 text-small leading-normal text-yellow-300 mb-5'>Helio was plagued by ailments early in life meant he could only observe trainings from the sidelines at first. His theoretical understanding of jiu-jitsu was excellent by the time he could finally train, but applying moves like throws remained challenging in light of his physical shortcomings. </p>

                <p className='w-12/12 text-small leading-normal text-yellow-300 mb-5'>Undeterred, Helio adapted his style of jiu-jitsu to prioritise not just leverage and timing over raw power and quickness, but also fighting on the ground. This system of grappling allowed Helio to defeat a number of famous grapplers and go the distance (albeit losing) with the legendary <a href="https://en.wikipedia.org/wiki/Masahiko_Kimura" rel='noreferrer' target={'_blank'}><u>Masahiko Kimura</u></a></p>.

                <h1 className='text-5xl md:text-6xl leading-normal mt-10 mb-5 font-bold tracking-wide text-yellow-500'>BJJ Today</h1>

                <p className='w-12/12 text-small leading-normal text-yellow-300 mb-5'>To be continued.</p>
            </div>
        </>
    )
}

export default About