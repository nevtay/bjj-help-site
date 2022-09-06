import SingleImage from './SingleImage'


const Images = (props) => {
    const { selectedPositionDataImageUrls } = props
    return (
        <>
            {!selectedPositionDataImageUrls && <h1 className='text-white m-auto text-2xl'>No images available</h1>}
            {selectedPositionDataImageUrls
                && selectedPositionDataImageUrls.length
                && <span className="px-2 flex flex-col flex-wrap justify-start md:flex-row md:w-6/6">
                    {selectedPositionDataImageUrls && selectedPositionDataImageUrls.map(img => <SingleImage key={img} image={img} />)}
                </span>
            }
        </>
    )
}

export default Images