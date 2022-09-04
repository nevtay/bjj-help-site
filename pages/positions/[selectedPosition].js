import { useRouter } from "next/router"
import Head from "next/head";
import Images from '../../components/UI/Layout/Images';
import Videos from '../../components/UI/Layout/Videos';
import data from "../../utils/POSITIONS.json"
import Button from "../../components/UI/Button"

const SelectedPosition = (props) => {
    const router = useRouter()
    const { selectedPosition } = router.query
    const { positions = [] } = props
    const selectedPositionData = selectedPosition && positions.find(pos => pos.name.toLowerCase() === selectedPosition.toLowerCase())

    const navigateToPositionsPage = () => router.push('/positions')

    if (!selectedPositionData) {
        return (
            <>
                <Head>
                    <title>Position not found</title>
                    <meta name="description" content={`Position data not found!`} />
                </Head>
                <div>
                    <h1 className='w-4/6 text-5xl md:text-6xl leading-normal mb-5 font-bold tracking-wide text-yellow-500'>Positions</h1>
                    <Button onBack={navigateToPositionsPage} hoverStyling="hover:bg-orange-400 hover:text-black mb-7" />
                    <p className='w-12/12 text-small leading-normal text-yellow-300 mb-5 md:w-5/6'>{`No data found for "${selectedPosition}"`}</p>
                </div>
            </>
        )
    }

    if (selectedPositionData) {
        const images = <Images selectedPositionDataImageUrls={selectedPositionData.imagesUrl} />
        const videos = <Videos selectedPositionDataVideoUrls={selectedPositionData.videosUrl} />

        return (
            <>
                <Head>
                    <title>{selectedPositionData.name}</title>
                    <meta name="description" content={`Learn about ${selectedPositionData.name}`} />
                </Head>
                <div>
                    <h1 className='w-4/6 text-5xl md:text-6xl leading-normal mb-5 font-bold tracking-wide text-yellow-500'>Positions</h1>
                    <Button onBack={navigateToPositionsPage} hoverStyling="hover:bg-orange-400 hover:text-black mb-7" />
                    <h2 className='w-4/6 text-3xl md:text-4xl leading-normal text-yellow-300 mb-5'>{selectedPositionData.name}</h2>
                    <p className='w-12/12 text-small leading-normal text-yellow-300 mb-5 md:w-5/6'>{selectedPositionData.description}</p>
                    {images}
                    {videos}
                </div>
            </>
        )
    }
}

export default SelectedPosition

export async function getStaticPaths() {
    const paths = data.positions.map(pos => (
        {
            params: { selectedPosition: pos.name }
        }
    ))
    return {
        paths,
        fallback: "blocking"
    }
}

export async function getStaticProps() {
    return {
        props: {
            positions: data.positions
        }
    }
}