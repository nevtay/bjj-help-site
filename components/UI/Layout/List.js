import ListItem from './ListItem'


const List = (props) => {
    const items = props.data || []
    const type = props.dataType || ""
    return (
        <div className='flex flex-wrap mt-8'>
            {items.map(item => {
                return <ListItem item={item} key={item} type={type} />
            })}
        </div>
    )
}

export default List