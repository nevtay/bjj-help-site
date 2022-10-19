import { useRouter } from 'next/router'

const Hero = () => {
    const router = useRouter()
    const navigateToPositionsPage = () => router.push('/positions')
    const navigateToSubmissionsPage = () => router.push('/submissions')
    const navigateToAboutPage = () => router.push('/about')
    const textStyleClasses = 'w-6/6 mb-5 text-6xl leading-normal text-white md:text-7xl md:leading-relaxed md:w-5/6 xl:w-4/6 '
    // const desktopTextWidth = ':w-5/6'
    return (
        <div className='min-h-screen'>
            <h1 className={`${textStyleClasses}`}>A Brazilian Jiu-Jitsu Resource Page</h1>
            <span className='flex flex-col items-start justify-start flex-wrap md:flex-row'>
                <button onClick={navigateToPositionsPage} type="button" className="tracking-wide text-xl rounded-m inline-flex items-center justify-center border rounded-full px-5 py-3 border-yellow-500 text-yellow-500 font-bold w-auto hover:underline hover:bg-yellow-50 mt-0 md:mr-7 sm:mt-0" aria-expanded="false">
                    Positions
                </button>
                <button onClick={navigateToSubmissionsPage} type="button" className="tracking-wide text-xl inline-flex items-center justify-center border rounded-full px-5 py-3 border-purple-500 text-purple-500 font-bold w-auto hover:underline hover:bg-purple-50 mt-3 md:mr-7 md:mt-0" aria-expanded="false">
                    Submissions
                </button>
                <button onClick={navigateToAboutPage} type="button" className="tracking-wide text-xl inline-flex items-center justify-center border rounded-full px-5 py-3 border-blue-500 text-blue-500 font-bold w-auto mt-3 hover:underline hover:bg-blue-50 sm:mr-0 md:mt-0" aria-expanded="false">
                    About BJJ
                </button>
            </span>
        </div>
    )
}

export default Hero