const SearchBox = (props) => {
	return (
		<div className="col-4 col-sm-6 col-md-4 col-lg-2 searchBar">
			<input
				value={props.value}
				onChange={(event) => props.setSearchValue(event.target.value)}
				className="form-control"
				type="search"
				placeholder="Type to search movies..."
			/>
		</div>
	)
}

export default SearchBox