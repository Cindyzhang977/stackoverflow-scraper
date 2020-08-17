import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import queryString from 'query-string'
import styles from './styles/SearchResults.module.css'
import Spinner from 'react-bootstrap/Spinner'

import Result from './Result.js'

function SearchResults() {
    const urlParameters = useLocation().search
    const query = decodeURIComponent(queryString.parse(urlParameters).query)
    const [results, setResults] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch(`/scrape-query/${query}`)
            .then(res => res.json())
            .then(json => {
                setResults(json.results)
            })
            .then(() => {
                setLoading(false)
            })
    }, [query])

    return (
        <div className={styles.container}>
            <div className={styles.questionHeader}>
                Search results for <span className={styles.question}>{query}</span>
            </div>
            {
                loading &&
                    <div className={styles.loadingContainer}>
                        <Spinner animation="border" role="status" className={styles.spinner}>
                            <span className="sr-only">Loading...</span>
                        </Spinner>
                        <div className={styles.loadingText}>
                            Scraping... Please wait. 
                        </div>
                    </div>
            }
            <div className={styles.resultsContainer}>
                {
                    results && results.length > 0 ?
                        results.map((result, index) =>
                            <Result result={result} index={index} hasPrev={index !== 0} hasNext={index < results.length - 1} key={index} />
                        ) 
                    :
                    !loading ?
                    <div className={styles.noResults}>
                        No Results Found.
                    </div>
                    :
                    <></>
                }
            </div>
        </div>
    )
}

export default SearchResults