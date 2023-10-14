import { Search, SearchForm, SearchFormButton, SearchFormInput } from "./Searchbar.styled"
import { FaSearch } from 'react-icons/fa';

export const Searchbar = ({ getValue }) => {

    const onSubmit = (evt) => {
        evt.preventDefault();
        const value = evt.currentTarget.elements.input.value;
        getValue(value);
    }
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


