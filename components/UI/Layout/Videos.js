import SingleVideo from "./SingleVideo"

const Videos = (props) => {
    const { selectedPositionDataVideoUrls } = props
    return (
        <>
            <h2 className='w-4/6 text-3xl md:text-3xl leading-normal text-yellow-300 mt-20 mb-3'>Videos</h2>
            {!selectedPositionDataVideoUrls.length && <h1 className='text-white m-auto text-2xl'>No videos available</h1>}
            {selectedPositionDataVideoUrls.length
                && <span className="flex flex-col flex-wrap items-center w-12/12 md:items-start md:w-10/12 lg:flex-row lg:items-stretch lg:justify-start">
                    {selectedPositionDataVideoUrls.map(vid => <SingleVideo key={vid} video={vid} />)}
                </span>
            }
        </>
    )
}

export default Videos