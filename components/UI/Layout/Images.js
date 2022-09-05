import SingleImage from './SingleImage'


const Images = (props) => {
    const { selectedPositionDataImageUrls } = props
    return (
        <>
            {!selectedPositionDataImageUrls && <h1 className='text-white m-auto text-2xl'>No images available</h1>}
            {selectedPositionDataImageUrls
                && selectedPositionDataImageUrls.length
                && <span className="flex items-center flex-col flex-wrap gap-2 md:gap-4 md:flex-row md:w-5/6 md:justify-around">
                    {selectedPositionDataImageUrls && selectedPositionDataImageUrls.map(img => <SingleImage key={img} image={img} />)}
                </span>
            }
        </>
    )
}

export default Images