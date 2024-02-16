import { setCharacter, setPlanet } from "./Details";

export default function CharacterListEntry({ key, url, name }) {
    return (
        <p onClick={() => fetchDetails(url)} key={key} url={url} className="character">
            {name}
        </p>
    );

    async function fetchDetails(url) {
        setCharacter(null);
        setPlanet(null);
        const character = await fetchObj(url);
        setCharacter(character);
        const planet = await fetchObj(character.homeworld);
        setPlanet(planet);
    }
    async function fetchObj(url) {
        const response = await fetch(url);
        const info = await response.json();
        return info;
    }
}
