const search = async() =>{
    console.log(countryName.value);
    const response = await fetch(`https://restcountries.com/v3.1/name/${countryName.value}?fullText=true`)

    response.json().then((data)=>{
        console.log(data[0]);
    
        // common
    let common = data[0].name.common
    console.log(common);
        
        // official
    let official = data[0].name.official
    console.log(official);
    
    // currency
    for(var curr in data[0].currencies){
        var currencyname = data[0].currencies[curr].name
        var symbol = data[0].currencies[curr].symbol
    }
    console.log(currencyname, symbol);
    
        // capital
    let capital = data[0].capital 
    console.log(capital);


    let nationalLang = []
    for( var lang in data[0].languages){
        nationalLang.push(data[0].languages[lang])
    }
    console.log(nationalLang);
    
    

    let borders = data[0].borders
    console.log(borders);

    let area = data[0].area
    console.log(area);
    
    let maps = data[0].maps.googleMaps
    console.log(maps);
    
    let population = data[0].population
    console.log(population);
    
    let timeZone = data[0].timezones
    console.log(timeZone);
    
    let continents = data[0].continents
    console.log(continents);

    let flags = data[0].flags.png
    console.log(flags);
    
    
    result.innerHTML = `
    <div class="card mx-3" style="width: 100%;">
    <img src=${flags} class="card-img-top" alt="no-image">
    <div class="card-body">
      <h5 class="card-title">${official}</h5>
      
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">common : ${common}</li>
      <li class="list-group-item">Capital : ${capital}</li>
      <li class="list-group-item">currency : ${nationalLang}</li>
      <li class="list-group-item">borders : ${borders}</li>
      <li class="list-group-item">area : ${area}</li>
      <li class="list-group-item">population : ${population}</li>
      <li class="list-group-item">timezone : ${timeZone}</li>
      <li class="list-group-item">continents : ${continents}</li>
    </ul>
    <div class="card-body">
      <a href="${maps}" class="card-link">map link</a>
      
    </div>
  </div>`


    })

    
    
    
}