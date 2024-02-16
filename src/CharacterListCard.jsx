//import { useState } from "react";
import PageControls from "./PageControls";
import CharacterList from "./CharacterList";
//import CharacterListEntry from "./CharacterListEntry";
import { setCharacterPage } from "./CharacterList";

let currentPage = null;
let fetchingUrl;
let fetchCallCount = 0;
let counter = 0;
export default function CharacterListCard() {
    //const [currentPageUrl, setCurrentPageUrl] = useState(null);
    //console.log("CharacterList called:", ++counter, currentPageUrl, currentPage);
    //const [currentPage, setCurrentPage] = useState(null);
    //console.log("CharacterList called:", ++counter, currentPage);
    console.log("CharacterList called", ++counter);

    //Movet to PageControls: fetchPage(0);

    //if (!currentPage) loadPage(currentPage, 0, setCurrentPage);
    //let listContainer;
    //ref={listContainer}
    // let cs = [
    //     { name: "luke", url: "https://swapi.dev/api/people/1/" },
    //     { name: "C-3PO", url: "https://swapi.dev/api/people/2/" },
    // ];

    //{currentPage ? currentPage.count : "null"}

    return (
        <article id="character-list" className="card">
            <p className="card-header">Characters</p>
            <div id="characters">
                <CharacterList />
            </div>
            <PageControls fetchPage={fetchPage} />
        </article>
    );

    async function fetchPage(direction) {
        let fcc = ++fetchCallCount;
        console.log(`fetchPage ${fcc} (${direction})`);

        let url = null;
        if (!currentPage) {
            url = "https://swapi.dev/api/people";
        } else if (direction > 0) {
            url = currentPage.next;
        } else if (direction < 0) {
            url = currentPage.previous;
        }

        if (!url || url === fetchingUrl) {
            return currentPage;
        }
        fetchingUrl = url;

        console.log(`fetchPage ${fcc}: API called: fetch(${url})`);

        //setCurrentPage(null);
        setCharacterPage(null);

        const response = await fetch(url);
        //currentPage = await response.json();
        let page = await response.json();

        //console.log(`fetchPage ${fcc}: Result:`, currentPageUrl, url, currentPage);
        console.log(`fetchPage ${fcc}: Result:`, url, page, currentPage);

        fetchingUrl = null;
        //setCurrentPage(page);
        //setCurrentPageUrl(url);
        setCharacterPage(page);
        currentPage = page;
        return page;
    }

    // async function loadPage(page, direction, setPage) {
    //     page = await fetchPage(page, direction);
    //     setPage(page);

    //     //pageElem.innerText = `${getCurrentPageNr()} / ${getTotalPages()}`;
    // }
}

// {currentPage ? (
//     currentPage.results.forEach(c => (
//         <p url={c.url} className="character">
//             {c.name}
//         </p>
//     ))
// ) : (
//     <div className="loader"></div>
// )}

// {currentPage?.results.forEach(c => (
//     <p url={c.url} className="character">
//         {c.name}
//     </p>
// ))}
