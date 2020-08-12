import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import queryString from 'query-string';
import styles from './styles/SearchResults.module.css'

function SearchResults() {
    const urlParameters = useLocation().search
    const query = queryString.parse(urlParameters).query
    const [results, setResults] = useState(null)

    useEffect(() => {
        if (!query) {
            console.log("no query")
            return
        }
        fetch('/scrape-query')
            .then(res => res.json())
            .then(json => {
                console.log(json)
                setResults(json.results)
            })
    }, [query])

    return (
        <div className={styles.container}>
            <div className={styles.questionHeader}>
                Search results for <span className={styles.question}>{query}</span>
            </div>
        </div>
    )
}

export default SearchResults