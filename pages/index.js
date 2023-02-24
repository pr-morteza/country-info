
import styles from '../styles/Home.module.css';
import Layout from '../component/layout';
import { useEffect, useState } from 'react';
import  CountriesData  from '../lib/data';
import Form from 'react-bootstrap/Form';
import { useContext } from "react";
import ToggleContext from '../context/toggle';
import MainLayout from '../component/mainLayout';
import { Col, Dropdown, DropdownButton, Row } from 'react-bootstrap';


export async function getStaticProps(){
  const {DATA} = await CountriesData()
  
  return {
    props: {
      DATA,
      
    },
  }
}

export default function Home({DATA}) {
  const [data , setData] = useState(DATA)
  const [data2, setData2] = useState(data)
  const [reg, setReg] = useState('Filter By Region')
  const [searchInput, setSearchInput] = useState("");
  const Region = ["All Regions","Africa", "America", "Asia", "Europe", "Oceania"]
  const {mode} = useContext(ToggleContext)
 
  // region search
  const regionFil=(e)=>{
    setReg(e)
    e!=='All Regions' ? setData( DATA.filter(country => 
      country.region.match(e)) )
    : setData(DATA)
  }

 // country name search
  const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value); 
  };

  useEffect(()=>{
  searchInput.length > 0 ?
    setData2( data.filter(x => 
      x.name.common.toLowerCase().match(searchInput.toLowerCase())) )
  : setData2(data)
  },[searchInput,data])

  return (
    <>
      <MainLayout>
       
        <style>
          {`
          .btn-flat {
            background-color: white;
          }
          *{
            font-size:14px
          }
          `}
        </style> 
        <div className='d-sm-flex justify-content-between my-4'>
          <Col md={3} sm={4}>
            <Form >
              <Form.Control size='lg' type="search" className={`border-0 shadow ${!mode && `bg-secondary text-light ${styles.formcontrol}`}`} placeholder="Search By Country" onChange={handleChange} value={searchInput} />
            </Form>
          </Col>    
          <DropdownButton variant={mode ? 'flat' : 'secondary'} className='d-inline-block mt-sm-0 mt-3 shadow rounded' size="lg" title={reg}>
          {Region.map(x=>{
            return(
              <Dropdown.Item key={x} onClick={()=>regionFil(x)}>{x}</Dropdown.Item>
            )
          })}
          </DropdownButton>    
        </div>
        <Row>
          {data2.map((x,index)=>{
            return (
              <Layout 
                key={index} 
                name={x.name.common} 
                region={x.region} 
                population={x.population} 
                flag={x.flags.png} 
                capital={x.capital}
              />
            )
          })}
        </Row>
      </MainLayout>
    </>
  )
}


