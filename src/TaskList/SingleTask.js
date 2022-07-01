const SingleTask = ({name, state, onDelete, id}) => {
    return(
        <div className="SingleTask__wrapper">
            <div className="SingleTask__title">{name}</div>
            <div className="SingleTask__state">{state}</div>
            <div className="SingleTask__buttons">
                <div className="SingleTask__settings">s</div>
                <div className="SingleTask__delete" onClick={() => onDelete(id)}>d</div>
            </div>
        </div>
    )
}

export default SingleTask;