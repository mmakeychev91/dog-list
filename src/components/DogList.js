const DogList = ({ breeds }) => (
    <div>
        <h1>List of Dog Breeds</h1>
        <ul>
            {Object.keys(breeds).map(breed => (
                <li key={breed}>
                    {breed}
                    <ul>
                        {breeds[breed].map(subBreed => (
                            <li key={subBreed}>{subBreed}</li>
                        ))}
                    </ul>
                </li>
            ))}
        </ul>
    </div>
);

export default DogList;