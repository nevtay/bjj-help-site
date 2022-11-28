import ListItem from './ListItem'


const List = (props) => {
    const items = props.data || []
    const type = props.dataType || ""
    const hoverStyling = props.hoverStyling || ""

    return (
        <div className='flex flex-wrap'>
            {items.map(item => {
                return <ListItem
                    item={item}
                    key={item.name}
                    type={type}
                    hoverStyling={hoverStyling}
                />
            })}
        </div>
    )
}

export default List