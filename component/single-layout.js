import Link from "next/link";
import Image from "next/image";
import { useContext } from "react";
import ToggleContext from "../context/toggle";
import style from './layout.module.css';
import { Col } from "react-bootstrap";


export default function DyLayout({name, nativeName, population, region, flag, capital, subregion, tld, currencies, languages, borders}){

    const curPrpt = (o)=>{
        let text=''
        for (let x in o) {  
            text += o[x].name +' ';
        }
        return text
    }
    
    
    const {mode} = useContext(ToggleContext)
    return(
        <>    
        <Link href={'/'} className={`btn my-md-5 my-4 shadow ${mode ? 'btn-outline-dark' : 'btn-outline-light'} decoration-none`}>Back</Link>
        <div className="d-md-flex justify-content-between ">
            <Col md={5} style={{position:'relative'}}>
                <Image 
                    className="d-block"
                    src={flag}
                    width={1}
                    height={1}
                    style={{width:'100%', height:'auto'}}
                    alt="flag"
                />
            </Col>
            <Col md={6} className={`${!mode && 'text-light'} d-flex flex-column justify-content-around`}>
                <div className="d-flex flex-column">
                    <h3 className={`${style.h} mt-md-0 my-3`}>{name}</h3>
                    <div className="d-md-flex">
                        <Col md={6}>
                            { nativeName && <div className={style.p}>Native Name: {Object.values(nativeName).map((x)=>{
                            return <span key={x.common} className={style.span}> {x.common}, </span>
                            }) }</div>}
                            <div className={style.p}>Population: <span className={style.span}>{population}</span></div>
                            <div className={style.p}>Region: <span className={style.span}>{region}</span></div>
                            <div className={style.p}>Sub Region: <span className={style.span}>{subregion}</span></div>
                            <div className={style.p}>Capital: <span className={style.span}>{capital}</span></div>
                        </Col>
                        <Col md={6} className="my-md-0 my-4">
                        {tld && <div className={style.p}>Top Level Domain: <span className={style.span}>{tld.join(' , ')}</span></div>}    
                            <div className={style.p}>Currencies: <span className={style.span}>{curPrpt(currencies)}</span></div>
                        {languages && <div className={style.p}>Languages: <span className={style.span}>{Object.values(languages).join('  ,  ')}</span></div>}    
                        </Col>
                    </div>
                </div>
                {borders && <div className={`${style.p} d-flex flex-wrap`}>Border Countries: {borders.map((x)=>{
                    return <span key={x} className={`${style.span} border rounded shadow-sm px-3 mx-1`}> {x} </span>
                })}</div>} 
            </Col>
        </div>
        </> 
    )
}

