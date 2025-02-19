import React from 'react';
import Select from 'react-dropdown-select';
import PropTypes from 'prop-types';

const getByPath = (object, path) => {
    if (!path) {
        return;
    }

    return path.split('.').reduce((acc, value) => acc[value], object);
};

const SearchableDropdown = ({ options, title, searchBy, valueField, onChange, clearable }) => {
    const onSearch = ({ props, state, methods }) => {
        const regexp = new RegExp(methods.safeString(state.search), 'i');
        return methods
            .sortBy()
            .filter((item) =>
                regexp.test(getByPath(item, props.searchBy) || getByPath(item, props.valueField))
            );
    };

    return (
        <div className="searchable-dropdown">
            {title && <h3>{title}</h3>}
            <Select
                options={options}
                searchFn={onSearch}
                searchBy={searchBy}
                valueField={valueField}
                onChange={onChange}
                clearable={clearable}
                color="#000" // Set text color to black
                style={{
                    color: '#000', // Ensure text color is black
                    backgroundColor: '#fff', // Background color
                    border: '1px solid #ddd', // Border color
                    borderRadius: '0.5rem', // Rounded corners
                }}
                dropdownHandleRenderer={({ state }) => (
                    <div className="dropdown-handle">
                        {/* Arrow icon (up/down based on dropdown state) */}
                        <span className={`arrow-icon ${state.dropdown ? 'up' : 'down'}`}>
                            {state.dropdown ? '▲' : '▼'}
                        </span>
                    </div>
                )}
            />
        </div>
    );
};

SearchableDropdown.propTypes = {
    options: PropTypes.array.isRequired,
    title: PropTypes.string,
    searchBy: PropTypes.string.isRequired,
    valueField: PropTypes.string.isRequired,
    onChange: PropTypes.func,
    clearable: PropTypes.bool,
};

export default SearchableDropdown;