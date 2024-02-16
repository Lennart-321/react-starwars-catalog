import { useState } from "react";

export let setCharacter = () => {};
export let setPlanet = () => {};

let initialized = false;

export default function Details() {
    const [character, setCharacterInner] = useState(null);
    const [planet, setPlanetInner] = useState(null);
    setCharacter = setCharacterInner;
    setPlanet = setPlanetInner;
    if (character) initialized = true;
    return (
        <article id="details" className="card">
            <p className="card-header">"Details"</p>
            <div id="character-info">
                {character ? (
                    <>
                        <p id="character-name">{character.name}</p>
                        <p className="info">Heigt: {character.height}</p>
                        <p className="info">Mass: {character.mass}</p>
                        <p className="info">Hair color: {character.hair_color}</p>
                        <p className="info">Skin color: {character.skin_color}</p>
                        <p className="info">Eye color: {character.eye_color}</p>
                        <p className="info">Year of birth: {character.birth_year}</p>
                        <p className="info">Gender: {character.gender}</p>
                    </>
                ) : initialized ? (
                    <div className="loader"></div>
                ) : (
                    <span></span>
                )}
            </div>
            <div id="planet-info">
                {planet ? (
                    <>
                        <p id="planet-name">{planet.name}</p>
                        <p className="info">Rotation period: {planet.rotation_period}</p>
                        <p className="info">Orbital period: {planet.orbital_period}</p>
                        <p className="info">Diameter: {planet.diameter}</p>
                        <p className="info">Climate: {planet.climate}</p>
                        <p className="info">Gravity: {planet.gravity}</p>
                        <p className="info">Terrain: {planet.terrain}</p>
                    </>
                ) : initialized ? (
                    <div className="loader"></div>
                ) : (
                    <span></span>
                )}
            </div>
        </article>
    );
}
