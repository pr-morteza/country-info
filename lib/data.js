
export default async function CountriesData(){
  const res = await fetch('https://restcountries.com/v3.1/all')
  const post = await res.json()

  // needed keys
  const keys=['name', 'cca3' , 'population', 'region', 'flags', 'capital', 'subregion', 'tld', 'currencies', 'languages' , 'borders']

  // filtered data
  const DATA = await post.map(x=>{
    return Object.keys(x)
      .filter(k => keys.includes(k))
      .reduce((obj, key) => {
        return Object.assign(obj, {
          [key]: x[key]
        })
      }, {})
  })

  const CountryId = await DATA.map((x)=>{
    return {
      params: {
        id: x.name.common,
      },
    };
  })

 async function CountryInfo(id){
     return await DATA.find(x=>x.name.common===id)
  }  

  return {DATA , CountryId, CountryInfo}
}

