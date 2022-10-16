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
                <p className='w-12/12 text-small leading-normal text-yellow-300 mb-5'>{`Brazilian Jiu-Jitsu (or simply "BJJ") is a martial art that combines grappling with ground fighting to control and defeat opponents through dominant positioning and submissions.`}</p>

                <h1 className='text-5xl md:text-6xl leading-normal mt-10 mb-5 font-bold tracking-wide text-yellow-500'>Origins</h1>

                <p className='w-12/12 text-small leading-normal text-yellow-300 mb-5'>Mitsuyo Maeda, one of <a href="https://en.wikipedia.org/wiki/Kan%C5%8D_Jigor%C5%8D" rel='noreferrer' target={'_blank'}><u>Kanō Jigorō's</u></a> finest students, arrived in Brazil in 1914 after a hugely successful career promoting Judo and jiu-jitsu overseas in demonstrations and hundreds of fights against all types of challengers.</p>

                <p className='w-12/12 text-small leading-normal text-yellow-300 mb-5'>During his stay in Brazil, he befriended Gastao Gracie, a local businessman who assisted Maeda with settling into the country and helped develop the local Japanese community. In return, Maeda offered to teach Jiu-Jitsu to Gastao's oldest son, Carlos Gracie. His four brothers would eventually join him on the mats, of which one would become the most important character in modern BJJ: <a href="https://en.wikipedia.org/wiki/Kan%C5%8D_Jigor%C5%8D" rel='noreferrer' target={'_blank'}><u>Helio Gracie</u></a>.</p>
            </div>
        </>
    )
}

export default index