import { useRouter } from 'next/router'

const Hero = () => {
    const router = useRouter()
    const navigateToPositionsPage = () => router.push('/positions')
    const navigateToSubmissionsPage = () => router.push('/submissions')
    const textStyleClasses = 'text-white text-6xl leading-normal mb-5'
    const desktopTextWidth = 'xl:w-3/6'
    const mobileTextWidth = 'md:w-5/6'
    return (
        <>
            <h1 className={`${textStyleClasses} ${desktopTextWidth} ${mobileTextWidth}`}>A Brazilian Jiu-Jitsu Resource Page</h1>
            <span>
                <button onClick={navigateToPositionsPage} type="button" className="rounded-m inline-flex items-center justify-center text-yellow-500 font-bold w-auto mr-7 hover:underline" aria-expanded="false">
                    Positions
                </button>
                <button onClick={navigateToSubmissionsPage} type="button" className="rounded-md inline-flex items-center justify-center text-purple-500 font-bold w-auto hover:underline" aria-expanded="false">
                    Submissions
                </button>
            </span>
        </>
    )
}

export default Hero