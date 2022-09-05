import SingleVideo from "./SingleVideo"

const Videos = (props) => {
    const { selectedPositionDataVideoUrls } = props
    return (
        <div className="min-h-screen">
            <h2 className='text-3xl md:text-3xl leading-normal text-yellow-300 mb-5'>Videos</h2>
            {!selectedPositionDataVideoUrls.length && <h1 className='text-white m-auto text-2xl'>No videos available</h1>}
            {selectedPositionDataVideoUrls.length
                && <span className="flex flex-row flex-wrap gap-6 justify-start md:gap-4">
                    {selectedPositionDataVideoUrls.map(vid => <SingleVideo key={vid} video={vid} />)}
                </span>
            }
        </div>
    )
}

export default Videos