import SingleVideo from "./SingleVideo"

const Videos = (props) => {
    const { selectedPositionDataVideoUrls } = props
    return (
        <div>
            <h2 className='text-3xl leading-normal text-yellow-300 mb-5 md:text-3xl'>Videos</h2>
            {!selectedPositionDataVideoUrls.length && <h1 className='text-white m-auto text-2xl'>No videos available</h1>}
            {selectedPositionDataVideoUrls.length
                && <span className="mx-auto flex flex-col lg:flex-row flex-wrap">
                    {selectedPositionDataVideoUrls.map(vid => <SingleVideo key={vid} video={vid} />)}
                </span>
            }
        </div>
    )
}

export default Videos