import React, {useMemo} from "react";
import styles from './style.module.scss';
import cn from 'classnames';

const JobCard = ({
                     logo, company, position, postedAt,
                     new: isNew, featured: isFeatured,
                     contract, location, role, level,
                     languages, tools }) => {
    const categories = useMemo(() => {
        return [
            role, level,
            ...languages, ...tools,
        ];
    }, [role, level, languages, tools]);

    return (
        <div className={cn(styles.card, {
            [styles.featured]: isFeatured,
        })}>
            <img className={styles.logo}
                 src={logo}
                 alt={`${company} logo`}
            />
            <div>
                <div className={styles.header}>
                    <span className={styles.company}>
                        {company}
                    </span>
                    {isNew && (
                        <span className={styles.newBadge}>
                            new!
                        </span>
                    )}
                    {isFeatured && (
                        <span className={styles.featuredBadge}>
                            featured
                        </span>
                    )}
                </div>
                <div className={styles.position}>
                    <a href={'#'}>
                        {position}
                    </a>
                </div>
                <div className={styles.summary}>
                    <span>
                        {postedAt}
                    </span>
                    <span>
                        {contract}
                    </span>
                    <span>
                        {location}
                    </span>
                </div>
            </div>
            <div className={styles.categoryContainer}>
                {categories.map((category) => (
                    <button className={styles.categoryLabelButton}>
                        {category}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default JobCard;
