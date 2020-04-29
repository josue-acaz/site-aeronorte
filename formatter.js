
const formatter = {
  formatCpf(cpf) {
    cpf = cpf.replace(/[^\d]/g, "");
    return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
  },
  formatPhoneNumber(phoneNumber) {
    return phoneNumber.replace(/(\(?\d{2}\)?\s)?(\d{4,5}\-\d{4})/, "");
  },
  removeSpecialCharacteres(value) {
    return value.replace(/[^\d]+/g,'');
  },
  formatCurrency(currency) {
    var v = currency.replace(/\D/g,'');
    v = (v/100).toFixed(2) + '';
    v = v.replace(".", ",");
    v = v.replace(/(\d)(\d{3})(\d{3}),/g, "$1.$2.$3,");
    v = v.replace(/(\d)(\d{3}),/g, "$1.$2,");
    
    return v;
  },
};

export default formatter;