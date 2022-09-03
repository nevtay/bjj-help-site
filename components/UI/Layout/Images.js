import SingleImage from './SingleImage'


const Images = (props) => {
    const { selectedPositionDataImageUrls } = props
    return (
        <>
            {!selectedPositionDataImageUrls && <h1 className='text-white m-auto text-2xl'>No images available</h1>}
            {selectedPositionDataImageUrls
                && selectedPositionDataImageUrls.length
                && <span className="flex flex-col flex-wrap items-center w-12/12 md:items-start md:w-10/12 lg:flex-row lg:items-stretch lg:justify-start">
                    {selectedPositionDataImageUrls && selectedPositionDataImageUrls.map(img => <SingleImage key={img} image={img} />)}
                </span>
            }
        </>
    )
}

export default Images