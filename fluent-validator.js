const fluent = {
  isEmail(email) {
    var match = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;
    
    if(!email) { return false; }

    if(match.test(email)) {
      return true;
    } else { return false; }
  },
  passwordStrength(password) {
    var strength = 0;

    if((password.length >= 4) && (password.length <= 7)){
      strength += 10;
    }else if(password.length > 7){
      strength += 25;
    }

    if((password.length >= 5) && (password.match(/[a-z]+/))){
      strength += 10;
    }

    if((password.length >= 6) && (password.match(/[A-Z]+/))){
      strength += 20;
    }

    if((password.length >= 7) && (password.match(/[@#$%&;*]/))){
      strength += 25;
    }

    if(password.match(/([1-9]+)\1{1,}/)){
      strength += -25;
    }

    return strength;
  },
  isCPNJ(value) {
    value = value.replace(/[^\d]+/g,'');

    if(value == '') return false;

    if (value.length != 14)
        return false;

    // Elimina CNPJs invalidos conhecidos
    if (value == "00000000000000" ||
        value == "11111111111111" ||
        value == "22222222222222" ||
        value == "33333333333333" ||
        value == "44444444444444" ||
        value == "55555555555555" ||
        value == "66666666666666" ||
        value == "77777777777777" ||
        value == "88888888888888" ||
        value == "99999999999999")
        return false;

    // Valida DVs
    let size = value.length - 2
    let numbers = value.substring(0, size);
    let digits = value.substring(size);
    let sum = 0;
    let pos = size - 7;
    for (let i = size; i >= 1; i--) {
      sum += numbers.charAt(size - i) * pos--;
      if (pos < 2)
            pos = 9;
    }
    let result = sum % 11 < 2 ? 0 : 11 - sum % 11;
    if (result != digits.charAt(0))
        return false;

    size = size + 1;
    numbers = value.substring(0, size);
    sum = 0;
    pos = size - 7;
    for (let i = size; i >= 1; i--) {
      sum += numbers.charAt(size - i) * pos--;
      if (pos < 2)
            pos = 9;
    }
    result = sum % 11 < 2 ? 0 : 11 - sum % 11;
    if (result != digits.charAt(1))
          return false;

    return true;
  },
  isCEP(value) {
    var reg = new RegExp(/^\d{5}\d{3}$/);

    if(value.length > 0) {
      return (reg.test(value));
    } else {
      return false;
    }
  },
};

export default fluent;