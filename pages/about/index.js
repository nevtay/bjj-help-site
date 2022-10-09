import React from 'react'
import Head from 'next/head'

const index = () => {
    return (
        <>
            <Head>
                <title>About Brazilian Jiu-Jitsu</title>
                <meta name="description" content="Learn BJJ moves, maneuvers, and much more" />
            </Head>
            <div className="w-6/6 mb-20">
                <h1 className='text-5xl md:text-6xl leading-normal mb-5 font-bold tracking-wide text-yellow-500'>What is Brazilian Jiu-Jitsu?</h1>
                <p className='w-12/12 text-small leading-normal text-yellow-300 mb-5'>{`Brazilian Jiu-Jitsu (or simply "BJJ") is a martial art. Specifically, it's a predominantly ground-based grappling combat system with defensive and offensive applications that maximises survival.`}</p>

                <h1 className='text-5xl md:text-6xl leading-normal mt-10 mb-5 font-bold tracking-wide text-yellow-500'>Origins</h1>
                <p className='w-12/12 text-small leading-normal text-yellow-300 mb-5'>"Modern" BJJ could be said to have originated in the late 1800s, when Mitsuyo Maeda took his lessons from <a href="https://en.wikipedia.org/wiki/Kan%C5%8D_Jigor%C5%8D"><u>Kanō Jigorō</u></a>, the founder of Judo, and tested them against challengers overseas before arriving in Brazil in 1914. There, he would enter a working relationship with Gastao Gracie, a businessman who was pivotal in helping Maeda establish a local Japanese community. In return Maeda offered to teach Jiu-Jitsu to Gastao's oldest son, Carlos, and Carlos would eventually proceed pass on those teachings to his brothers, including one Helios Gracie.</p>
            </div>
        </>
    )
}

export default index