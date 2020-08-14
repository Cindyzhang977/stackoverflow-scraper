import React from 'react'
import ReactHtmlParser from 'react-html-parser'
import styles from './styles/Result.module.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons'
import SearchResults from './SearchResults'

function Result({ result }) {
    console.log(result)
    return (
        <div className={styles.container}>
            <Container>
                <Row>
                    <Col xs={6} sm={8} lg={9} className={styles.question}>
                        {result.question}
                    </Col>
                    <Col xs={6} sm={4} lg={3} className={styles.toggleArrowsContainer}>
                        <Button className={styles.toggleArrow}>
                            prev
                            <FontAwesomeIcon icon={faAngleUp} />
                        </Button>
                        <Button className={styles.toggleArrow}>
                            next
                            <FontAwesomeIcon icon={faAngleDown} />
                        </Button>
                    </Col>
                </Row>
            </Container>
            <div>
                <div className={styles.label}>Post</div>
                {ReactHtmlParser(result.post)}
            </div>
            <div>
                <div className={styles.label}>Answer</div>
                {ReactHtmlParser(result.answer)}
            </div>
            <div className={styles.urlBtnContainer}>
                <Button href={result.url} target="_blank" rel="noopener noreferrer" className={styles.urlBtn}>
                    View full post
                </Button>
            </div>
        </div>
    )
}

export default Result