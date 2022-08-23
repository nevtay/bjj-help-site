import Link from 'next/link'

const ListItem = (props) => {
    const item = props.item || ""
    const type = props.type || ""
    return (
        <div className='text-white first-of-type:ml-0 last-of-type:mr-0 mr-3 mt-7 md-5 px-5 py-1 text-center border rounded-full'>
            <Link href={`/${type}/${item}`}>{item}</Link>
        </div>
    )
}

export default ListItem