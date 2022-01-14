import React from 'react';
import styles from './style.module.scss';

const CategoryFilter = () => {
    const categories = ['Frontend', 'CSS', 'JavaScript'];

    return (
        <div className={styles.card}>
            <div className={styles.categoryContainer}>
                {categories?.map((category) => (
                    <span className={styles.categoryLabel}>
                        {category}
                        <button className={styles.removeButton}>
                            <img src={'/icons/icon-remove.svg'}
                                 alt={'remove'}
                            />
                        </button>
                    </span>
                ))}
            </div>
            <button className={styles.clearButton}>
                Clear
            </button>
        </div>
    );
};

export default CategoryFilter;
