import { useRouter } from "next/router";
import Head from "next/head";
import Images from "../../components/UI/Images";
import SingleVideo from "../../components/UI/SingleVideo"
import guards from "../../utils/GUARDS.json";
import Button from "../../components/UI/Button";

const SelectedGuard = (props) => {
    const router = useRouter()
    const selectedGuard = router.query.selectedGuard || ""
    const selectedGuardData = guards.guards.find( guards => guards.name.toLowerCase() === selectedGuard.toLowerCase());

    const navigateToGuardsPage = () => router.push('/guards')

    if (!selectedGuardData) {
        return (
            <>
                <Head>
                    <title>Guard not found</title>
                    <meta name="description" content={`Guard data not found!`} />
                </Head>
                <div>
                    <h1 className='w-4/6 text-5xl md:text-6xl leading-normal mb-5 font-bold tracking-wide text-blue-500'>Guard</h1>
                    <Button onBack={navigateToGuardsPage} hoverStyling="hover:bg-blue-400 hover:text-black mb-7" />
                    <p className='w-12/12 text-small leading-normal text-blue-300 mb-5 md:w-5/6 '>{`No data found for "${selectedGuard}"`}</p>
                </div>
            </>
        )
    }

    if (selectedGuardData) {
        let images = 
            <span className="flex flex-col flex-wrap items-start items-center w-12/12 md:items-start lg:flex-row lg:w-12/12 lg:items-stretch lg:justify-start">
                {selectedGuardData.imagesUrl && selectedGuardData.imagesUrl.map(img => {
                    return (
                        <img src={`${img}`} key={img} className="rounded-lg object-fill mb-3 w-12/12 md:w-5/6 lg:w-5/12 lg:mt-0 lg:mr-3 last-of-type:lg:mr-0" />
                    )
                })}
            </span>
        
        let videos = 
            <span className="flex flex-col flex-wrap items-start items-center w-12/12 md:items-start lg:flex-row lg:w-12/12 lg:items-stretch lg:justify-start">
                {selectedGuardData.videosUrl && selectedGuardData.videosUrl.map(vid => <SingleVideo key={vid} video={vid} />)}
            </span>

        return (
            <>
                <Head>
                    <title>{selectedGuardData.name}</title>
                    <meta name="description" content={`Learn about ${selectedGuardData.name}`} />
                </Head>
                <div>
                    <h1 className='w-4/6 text-5xl md:text-6xl leading-normal mb-5 font-bold tracking-wide text-blue-500'>Guards</h1>
                    <Button onBack={navigateToGuardsPage} hoverStyling="hover:bg-blue-400 hover:text-black mb-7" />
                    <h2 className='w-4/6 text-3xl md:text-4xl leading-normal text-blue-300 mb-5'>{selectedGuardData.name}</h2>
                    <p className='w-12/12 text-small leading-normal text-blue-300 mb-5 md:w-5/6 '>{selectedGuardData.description}</p>
                    {images}
                    <h2 className='w-4/6 text-3xl md:text-4xl leading-normal text-blue-300 mb-6'>Videos</h2>
                    {selectedGuardData?.videosUrl.length ? videos : <p className='text-2xl md:text-3xl leading-normal text-blue-200 mb-5'>Coming Soon</p>}
                </div>
            </>
        )
    }

}

export default SelectedGuard