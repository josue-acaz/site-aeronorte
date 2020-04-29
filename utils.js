const utils = {
  queryString(parameter) {  
    let loc = location.search.substring(1, location.search.length);   
    let param_value = false;   
    let params = loc.split("&");   
    for (let i=0; i<params.length;i++) {   
        let param_name = params[i].substring(0,params[i].indexOf('='));   
        if (param_name == parameter) {                                          
            param_value = params[i].substring(params[i].indexOf('=')+1)   
        }   
    }   
    if (param_value) {   
        return param_value;
    }   
    else {   
        return undefined;
    }
  },

  flightIDGenerator(size) {
    var randomized = Math.ceil(Math.random() * Math.pow(10,size));//Cria um número aleatório do tamanho definido em size.
    var digito = Math.ceil(Math.log(randomized));//Cria o dígito verificador inicial
    while(digito > 10){//Pega o digito inicial e vai refinando até ele ficar menor que dez
        digito = Math.ceil(Math.log(digito));
    }
    var id = randomized + '-' + digito;//Cria a ID
    return id;
  },

  buildQueryString(object) {
    var esc = encodeURIComponent;
    var query = Object.keys(object)
        .map(k => esc(k) + '=' + esc(object[k]))
        .join('&');
    return query;
  },

  parseQueryString() {

    // Use location.search to access query string instead
    const qs = window.location.search.replace('?', '');

    const items = qs.split('&');

    // Consider using reduce to create the data mapping
    return items.reduce((data, item) => {

      const [key, value] = item.split('=');

      // Sometimes a query string can have multiple values 
      // for the same key, so to factor that case in, you
      // could collect an array of values for the same key
      if(data[key] !== undefined) {

        // If the value for this key was not previously an
        // array, update it
        if(!Array.isArray(data[key])) {
          data[key] = [ data[key] ]
        }       

        data[key].push(decodeURIComponent(value))
      }
      else {

        data[key] = decodeURIComponent(value)
      }

      return data

    }, {})
  },

  getRadioVal(name) {
    var value;
    var radios = document.getElementsByName(name);

    for (var i = 0, length = radios.length; i < length; i++) {
      if (radios[i].checked) {
        // do whatever you want with the checked radio
        value = radios[i].value;
    
        // only one radio can be logically checked, don't check the rest
        break;
      }
    }

    return value;
  }
};

export default utils;