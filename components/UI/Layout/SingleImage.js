import Image from 'next/image'

const SingleImage = (props) => {
    const myLoader = () => {
        return `${image}`
    }
    const { image } = props
    return (
        <div className={`relative h-60 md:h-50 w-full lg:w-5/12`}>
            <Image
                loader={myLoader}
                unoptimized={true}
                src={image}
                objectFit='cover'
                objectPosition='center'
                layout='fill'
                placeholder="blur"
                blurDataURL={`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8f6atHgAHtQLCdE5fpwAAAABJRU5ErkJggg=="`}
            />
        </div>
    )
}

export default SingleImage