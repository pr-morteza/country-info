import Link from "next/link";
import { Card, Col } from "react-bootstrap";
import { useContext } from "react";
import ToggleContext from "../context/toggle";
import style from './layout.module.css';


export default function Layout({name, population, region, flag, capital}){

  const {mode} = useContext(ToggleContext)
  return(
 
    <Col lg={3} md={4} sm={6} className={`p-4 px-md-4 px-5`}>
      <Link href={`/country/${name}`} className="text-decoration-none text-dark">
        <Card className={`shadow  border-0 ${!mode && 'bg-secondary'}`}>
          <Card.Img variant="top" src={flag} style={{height:'23vh',objectFit:'cover'}} />
          <Card.Body className={`p-4 pe-0 ${mode ? 'text-dark' : 'text-light'}`}>
            <Card.Title as='h5' className={style.h}>{name}</Card.Title>
            <Card.Text as="div">
              <p className={style.p}>population: <span className={style.span}>{population}</span></p> 
              <p className={style.p}>Region: <span className={style.span}>{region}</span></p> 
              <p className={style.p}>Capital: <span className={style.span}>{capital}</span></p> 
            </Card.Text>
          </Card.Body>
        </Card>
      </Link>
    </Col>
  )
}

