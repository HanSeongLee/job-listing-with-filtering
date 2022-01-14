import React, {useCallback, useMemo} from "react";
import JobCard from "../../components/JobCard";
import data from '/data/data.json';
import {useAppContext} from "../../context/AppContext";

const JobCardContainer = () => {
    const [state, dispatch] = useAppContext();

    const onFilterAdd = useCallback((category) => {
        dispatch({ type: 'add_filter', value: category, });
    }, []);

    const jobList = useMemo(() => {
        if (state.filter.length === 0) {
            return data;
        }

        return data?.filter(({role, level, languages, tools}) => {
            const categories = [role, level, ...languages, ...tools];
            let flag = true;
            state.filter.forEach((category) => {
                flag = flag & categories.includes(category);
            });
            return flag;
        });
    }, [state]);

    return (
        <>
            {jobList.map((item) => (
                <JobCard {...item}
                         onCategoryClick={onFilterAdd}
                />
            ))}
        </>
    );
};

export default JobCardContainer;
