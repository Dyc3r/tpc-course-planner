import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Container, Row, Col } from 'react-bootstrap'
import styles from '../styles/Home.module.scss'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>TPC Course Planner</title>
        <meta name="description" content="A fan-made utility for planning campus room requirements" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className={styles.header}>
        <span className={styles.title}>Two Point Campus</span>
        <span className={styles.subtitle}>Room Requirement Planner</span>
      </h1>
      <Container className={styles.container}>
        <Row>
          <Col
            xs={12}
            md={6}
            lg={{ span: 4, offset: 1 }}
          >
            Select your campus type
          </Col>

          <Col
            xs={12}
            md={6}
            lg={{ span: 4, offset: 2 }}
          >
            Beds Per Dorm
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Home
