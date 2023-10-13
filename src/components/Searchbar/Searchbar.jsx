import { Search, SearchForm, SearchFormButton, SearchFormInput } from "./Searchbar.styled"
import { FaSearch } from 'react-icons/fa';

export const Searchbar = ({ onSubmit }) => {
    return (
        <Search className="searchbar">
            <SearchForm onSubmit={onSubmit} className="form">
                <SearchFormButton type="submit" className="button">
                    <span className="button-label"> <FaSearch /></span>
                </SearchFormButton>

                <SearchFormInput
                className="input"
                name="input"
                type="text"
                autoComplete="off"
                autoFocus
                placeholder="Search images and photos"
                />
            </SearchForm>
        </Search>

    )
}


