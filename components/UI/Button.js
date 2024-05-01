const Button = (props) => {
    return (
        <button
            onClick={props.onBack}
            className={`${props.className} rounded-full text-white border px-4 py-2 ${props.hoverStyling ? props.hoverStyling : "hover:bg-gray-100"} hover:text-black`}>
            <span className="display: table-cell">{props.text || `← Back`}</span>
        </button>
    )
}

export default Button