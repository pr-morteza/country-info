import MainLayout from "../../component/mainLayout";
import DyLayout from "../../component/single-layout";
import CountriesData from "../../lib/data";


export async function getStaticPaths() {
  const {CountryId} = await CountriesData()
  const paths = await CountryId
    
  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const {DATA,CountryInfo} = await CountriesData()
  const postData = await CountryInfo(params.id)

  const borders = postData.borders ? postData.borders.map(x=>{
    return DATA.find(k=>k.cca3===x).name.common}) : null
  return {
    props: {
      postData,
      borders,
    },
  };
}
  
export default function Country({postData , borders}){
  const {name, population, region, flags, capital, subregion, tld, currencies, languages}=postData
  return(
    <MainLayout>
      <DyLayout
        name={name.common}
        nativeName={name.nativeName}
        population={population}
        region={region}
        flag={flags.svg}
        capital={capital}
        subregion={subregion}
        tld={tld}
        borders={borders}
        languages={languages}
        currencies={currencies}
      />
    </MainLayout>
  ) 
}