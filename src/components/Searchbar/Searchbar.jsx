

export const Searchbar = ({ onSubmit }) => {
    return (
        <header className="searchbar">
            <form onSubmit={onSubmit} className="form">
                <button type="submit" className="button">
                <span className="button-label">Search</span>
                </button>

                <input
                className="input"
                name="input"
                type="text"
                autoComplete="off"
                autoFocus
                placeholder="Search images and photos"
                />
            </form>
        </header>

    )
}

