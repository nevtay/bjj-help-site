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

                <p className='w-12/12 text-small leading-normal text-yellow-300 mb-5'>{`There's not much left to add to the history of this decorated martial art, but here's an attempt at a quick summary.`}</p>

                <p className='w-12/12 text-small leading-normal text-yellow-300 mb-5'>{`When Mitsuyo Maeda's (one of Kano Jigoro's finest students) arrived in Brazil in 1914, it set in motion for a revolutionary style of grappling to emerge.`}</p>

                <p className='w-12/12 text-small leading-normal text-yellow-300 mb-5'>{`Maeda would meet and agree to train Carlos Gracie after the latter attended one of Maeda's demonstrations. Carlos's brothers would join him in his pursuit, but it was Helio Gracie who properly laid the groundwork (pun intended) for the "Brazilian" style of jiu-jitsu. Recognising that the throws he was learning required a fair amount of strength (and therefore ill-suited for his physical attributes), he focused on ground fighting and submissions instead to level the playing field by making strength less important than aspects such as positioning and proper technique.`}</p>

                <p className='w-12/12 text-small leading-normal text-yellow-300 mb-5'>{`The Gracies would carry on Maeda's tradition of calling out and accepting challenges from other martial artists and disciplines over the decades, believing that Brazilian Jiu-Jitsu was superior to all other martial arts. However, it wasn't until the 90's that BJJ finally established itself as an effective fighting style to the public at large, starting with Royce Gracie submitting a larger and much stronger opponent in Ken Shamrock in less than a minute during the finals of the first UFC (Ultimate Fighting Championship) in 1993.`}</p>

                <p className='w-12/12 text-small leading-normal text-yellow-300 mb-5'>
                    {`It's been all uphill for BJJ since. Today it's viewed as one of the four "pillars" of MMA alongside boxing, muay thai, and wrestling. Its emphasis on technique and positioning over raw athleticism and strength continues to produce results not just in the octagon but also across the board - fitness, self-confidence, and so forth. Who knows what it'll do for you?`}
                </p>
            </div>
        </>
    )
}

export default About