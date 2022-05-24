const SearchBox = (props) => {
    return (
        <div className="col-6 col-sm-6 col-md-4 col-lg-2">
            <input
                className="form-control"
                type="text"
                placeholder="Type to search movies..."
            />
        </div>
    )
}

export default SearchBox