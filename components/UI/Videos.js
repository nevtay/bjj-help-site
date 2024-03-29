import SingleVideo from "./SingleVideo"

const Videos = (props) => {
    const { selectedPositionDataVideoUrls } = props
    return (
        <div>
            <h2 className='text-3xl leading-normal text-yellow-300 mb-5 md:text-3xl'>Videos</h2>
            {!selectedPositionDataVideoUrls.length && <h1 className='text-white m-auto text-2xl'>No videos available</h1>}
            {selectedPositionDataVideoUrls.length
                && <span className="flex lg:flex-row md:flex-col sm:flex-col flex-wrap justify-around mx-auto lg:w-12/12">
                    {selectedPositionDataVideoUrls.map(vid => <SingleVideo key={vid} video={vid} />)}
                </span>
            }
        </div>
    )
}

export default Videos