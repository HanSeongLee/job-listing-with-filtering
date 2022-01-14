import React from 'react';
import styles from './style.module.scss';

const CategoryFilter = ({ categories, onRemoveClick, onClearClick }) => {
    return (
        <div className={styles.card}>
            <div className={styles.categoryContainer}>
                {categories?.map((category) => (
                    <span className={styles.categoryLabel}>
                        {category}
                        <button className={styles.removeButton}
                                onClick={_ => onRemoveClick(category)}
                        >
                            <img src={'/icons/icon-remove.svg'}
                                 alt={'remove'}
                            />
                        </button>
                    </span>
                ))}
            </div>
            <button className={styles.clearButton}
                    onClick={onClearClick}
            >
                Clear
            </button>
        </div>
    );
};

export default CategoryFilter;
