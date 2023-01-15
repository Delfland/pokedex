const NameForm = ({handleNameSubmit, handleNameChange, userName}) => {

    return (
        <form onSubmit={handleNameSubmit}>
            <input
            type="text"
            placeholder="Enter Name"
            value={userName}
            onChange={handleNameChange}
            />
            <input
            type="submit"
            value="Submit"
            />
        </form>
    )
}

export default NameForm;