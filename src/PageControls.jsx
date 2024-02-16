import { useState } from "react";

let fetchAdjacentPageCount = 0;
export default function PageControls({ fetchPage }) {
    const [currentPageNr, setCurrentPageNr] = useState(0);
    const [totalNrPages, setTotalNrPages] = useState(0);

    fetchAdjacentPage(0);

    return (
        <p>
            <span onClick={() => fetchAdjacentPage(-1)} id="prev">
                &nbsp;&lt;&nbsp;
            </span>
            &nbsp;
            <span>
                {currentPageNr} / {totalNrPages}
            </span>
            &nbsp;
            <span onClick={() => fetchAdjacentPage(1)} id="next">
                &nbsp;&gt;&nbsp;
            </span>
        </p>
    );

    async function fetchAdjacentPage(direction) {
        const page = await fetchPage(direction);
        const totPg = getTotalPages(page);
        const pgNr = getCurrentPageNr(page);
        console.log(`fetchAdjacentPage ${++fetchAdjacentPageCount}`, pgNr, totPg, page);
        setTotalNrPages(totPg);
        setCurrentPageNr(pgNr);
    }
}

function getCurrentPageNr(page) {
    let pageNr = 0;
    if (page) {
        if (page.next) {
            pageNr = Number(page.next.charAt(page.next.length - 1)) - 1;
            console.log("Next page:", page.next);
        } else if (page.previous) {
            pageNr = Number(page.previous.charAt(page.previous.length - 1)) + 1;
            console.log("Previous page:", page.previous);
        }
        console.log("pageNr:", pageNr);
    }
    return pageNr;
}

function getTotalPages(page) {
    return page?.results.length ? Math.ceil(page.count / page.results.length) : 0;
}
