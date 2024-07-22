import { fetchRandomDogImage } from '../services/dogService';
import DogImage from '../components/DogImage';

const HomePage = async () => {
  const { message: imageUrl } = await fetchRandomDogImage();

  return (
    <main>
      <DogImage imageUrl={imageUrl} />
      <nav>
        <a href="/breeds">Go to List of Breeds</a>
      </nav>
    </main>
  );
};

export default HomePage;