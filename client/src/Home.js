import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import styles from './styles/Home.module.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

import search from './imgs/search.svg'
import browse from './imgs/browse.svg'

function Home() {
  const [searchText, setSearchText] = useState('')
  const history = useHistory();

  function handleOnChange(e) {
    setSearchText(e.target.value)
  }

  function handleOnKeyPress(e) {
    if (e.key === 'Enter') {
      console.log(searchText)
      history.push(`/searchResults?query=${encodeURIComponent(searchText)}`)
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.searchContainer}>
        <Container className={styles.searchBarContainer}>
          <Row className={styles.question}>
            Search the <span className={styles.emTxt}>Issue</span><span className={styles.period}>.</span>
          </Row>
          <Row className={styles.searchBar}>
            <FontAwesomeIcon icon={faSearch} className={styles.searchIcon} />
            <Form.Control size="md" type="text" placeholder="Search" onChange={handleOnChange} onKeyPress={handleOnKeyPress}/>
          </Row>
        </Container>
      </div>
      <div className={styles.info}>
        <Container>
          <Row>
            {json.map((card, index) =>
              <GraphicCard img={card.img} title={card.title} description={card.description} key={index} />
            )}
          </Row>
        </Container>
      </div>
    </div>
  )
}

function GraphicCard({img, title, description}) {
  return (
    <Col md={12} lg={6} className={styles.graphicCard}>
      <Container>
        <Row>
          <Col sm={4}>
            <img src={img} alt={`${title} graphic`} className={styles.graphic} />
          </Col>
          <Col sm={8}>
            <div className={styles.graphicTitle}>
              {title}
            </div>
            <div className={styles.graphicDescription}>
              {description}
            </div>
          </Col>
        </Row>
      </Container>
    </Col>
  )
}

const json = [
  {
    "title": "Search",
    "description": "Search Stack Overflow for solutions.",
    "img": search,
  },
  {
    "title": "Browse",
    "description": "Browse through posts and the top response without clicking through links.",
    "img": browse,
  }
]

export default Home;
