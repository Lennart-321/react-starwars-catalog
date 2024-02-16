import { useState } from "react";
import CharacterListEntry from "./CharacterListEntry";

export let setCharacterPage = () => {};

export default function CharacterList() {
    const [page, setPage] = useState(null);
    setCharacterPage = setPage;
    return (
        <>
            {page ? (
                page.results.map(c => <CharacterListEntry key={c.name} url={c.url} name={c.name} />)
            ) : (
                <div className="loader"></div>
            )}
        </>
    );
}
