const ToggleDarkMode = (themeToggler) => {
    return (
        <div className="col-4 ">
            {/* <div class="form-check form-switch">
                <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
            </div> */}
            <button
                className="btn btn-primary rounded"
                onClick={themeToggler}
            >
                Dark Mode
            </button>
        </div>
    )
}

export default ToggleDarkMode;