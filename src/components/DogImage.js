const DogImage = ({ imageUrl }) => (
    <div>
        <h1>Random Dog Image</h1>
        <img src={imageUrl} alt="Random Dog" style={{ maxWidth: '100%', height: 'auto', maxHeight: '500px' }} />
    </div>
);

export default DogImage;