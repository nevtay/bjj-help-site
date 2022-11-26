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

                <h1 className='text-5xl md:text-6xl leading-normal mt-10 mb-5 font-bold tracking-wide text-yellow-500'>A Brief History of BJJ</h1>

                <p className='w-12/12 text-small leading-normal text-yellow-300 mb-5'>Given the absurd number of online resources regarding the history of BJJ, there's not much left to add to the history of this decorated martial art.</p>

                <p className='w-12/12 text-small leading-normal text-yellow-300'>When Mitsuyo Maeda (one of Kano Jigoro's finest students) arrived in Brazil in 1914, it set the stage for him to nurture one of the greatest martial art families in modern history, although none of the parties involved were completely unaware at this time.</p>.

                <p className='w-12/12 text-small leading-normal text-yellow-300 mb-5'>Prior to Brazil, Maeda led a lengthy career promoting Kodokan Judo around the world through demonstrations and style-on-style clashes with other martial artists. Several years after his arrival, he would meet and accept Carlos Gracie as a student after the latter watched one of Maeda's demonstration. The rest of the Gracie brothers would eventually join the pursuit, but it was Helio Gracie who properly laid the groundwork (pun intended) for the jiu-jitsu that we know today thanks to his emphasis and development of ground fighting over throws to compensate for his unimpressive physicality.</p>

                <p className='w-12/12 text-small leading-normal text-yellow-300 mb-5'>Over the following decades the Gracies would carry on Maeda's tradition of calling out and accepting challenges from other martial artists and disciplines to prove that Brazilian Jiu-Jitsu was the superior art. All doubt about its effectiveness were truly erased when the first UFC (Ultimate Fighting Championship) swung around in 1993, where Royce Gracie took less than a minute to submit a larger and much stronger opponent in Ken Shamrock during the final match.</p>
            </div>
        </>
    )
}

export default About