import { fetchDogBreeds } from '../../services/dogService';
import Link from 'next/link';
import styles from './breeds.module.css';

export const revalidate = 60; // Опционально, задает частоту обновления страницы

async function getBreeds() {
    const breedsResponse = await fetchDogBreeds();
    const breeds = Object.keys(breedsResponse.message);
    return breeds;
}

export default async function BreedsPage() {
    const breeds = await getBreeds();

    return (
        <div className={styles.container}>
            <h1>List of Dog Breeds</h1>
            <ul className={styles.breedList}>
                {breeds.map((breed) => (
                    <li key={breed} className={styles.breedItem}>
                        {breed}
                    </li>
                ))}
            </ul>
        </div>
    );
}