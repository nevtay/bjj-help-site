const BackButton = (props) => {
    return (
        <button
            onClick={props.onBack}
            className={`rounded-full text-white border px-4 py-1 ${props.hoverStyling ? props.hoverStyling : "hover:bg-gray-100"} hover:text-black`}>
            <span>↺&nbsp;</span>Back
        </button>
    )
}

export default BackButton