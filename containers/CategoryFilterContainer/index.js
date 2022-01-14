import React, {useCallback} from 'react';
import CategoryFilter from "../../components/CategoryFilter";
import {useAppContext} from "../../context/AppContext";

const CategoryFilterContainer = () => {
    const [state, dispatch] = useAppContext();

    const onFilterRemove = useCallback((category) => {
        dispatch({ type: 'remove_filter', value: category, });
    }, []);

    const onFilterClear = useCallback(() => {
        dispatch({ type: 'clear_filter', });
    }, []);

    return (
        <CategoryFilter categories={state.filter}
                        onRemoveClick={onFilterRemove}
                        onClearClick={onFilterClear}
        />
    );
};

export default CategoryFilterContainer;
