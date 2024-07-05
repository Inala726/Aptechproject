
import React from 'react';
import styles from './PlanetCard.module.css';

interface PlanetCardProps {
    image: string;
    title: string;
    description: string;
    link: string;
}

const PlanetCard: React.FC<PlanetCardProps> = ({ image, title, description, link }) => {
    return (
        <div className={styles.card}>
            <div className={styles.imageContainer}>
                <img src={image} alt={title} className={styles.image} />
            </div>
            <div className={styles.content}>
                <h2 className={styles.title}>{title}</h2>
                <p className={styles.description}>{description}</p>
                <a href={link} className={styles.link}>{title} facts →</a>
            </div>
        </div>
    );
}

export default PlanetCard;
