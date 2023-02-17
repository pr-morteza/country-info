import Head from "next/head";
import Image from "next/image";
import { useContext } from "react"
import ToggleContext from "../context/toggle"
import style from './layout.module.css';
import moon from '../public/design/moon-outline.svg'
import { Container } from "react-bootstrap";


export default function MainLayout({children}){
    const {mode , setMode} = useContext(ToggleContext)
    return(
        <>
            <Head>
                <title>Country info</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/design/favicon-32x32.png" />
            </Head>
            <div className='p-0 m-0' style={{minHeight:'100vh'}}>
                <div className={`${mode ? 'bg-light' : 'bg-dark'} ${style.background}`}></div>
                <div className={`w-100 py-1 shadow-sm ${mode ? 'bg-white' : 'bg-secondary text-light'}`}>
                    <div className={`d-flex py-3 container justify-content-between `}>
                        <h5 className={`${style.h} m-0`}>Where in the world ?</h5>
                        <div className={`btn border-0 p-0 ${style.p} ${!mode&&'text-light'}`} onClick={()=>setMode(!mode)}>
                            <Image className="me-2" style={!mode && {filter:'invert(100%)'}} src={moon} width={17} height={17} alt=''/>{mode ? 'Light Mode' : 'Dark Mode'}
                        </div>
                    </div>  
                </div>
                 
                <Container fluid='lg' className="mb-3">
                    {children} 
                </Container>
            </div>
        </>
    )
}