import { useRouter } from 'next/router'

const Hero = () => {
    const router = useRouter()
    const navigateToPositionsPage = () => router.push('/positions')
    const navigateToSubmissionsPage = () => router.push('/submissions')
    const textStyleClasses = 'w-5/6 text-5xl leading-normal text-white lg:text-7xl lg:leading-relaxed mb-5'
    const desktopTextWidth = 'lg:w-4/6'
    return (
        <div className='h-screen'>
            <p className={`${textStyleClasses} ${desktopTextWidth}`}>A Brazilian Jiu-Jitsu Resource Page</p>
            <span>
                <button onClick={navigateToPositionsPage} type="button" className="tracking-wide text-xl rounded-m inline-flex items-center justify-center text-yellow-500 font-bold w-auto mr-7 hover:underline" aria-expanded="false">
                    Positions
                </button>
                <button onClick={navigateToSubmissionsPage} type="button" className="tracking-wide text-xl rounded-md inline-flex items-center justify-center text-purple-500 font-bold w-auto hover:underline" aria-expanded="false">
                    Submissions
                </button>
            </span>
        </div>
    )
}

export default Hero