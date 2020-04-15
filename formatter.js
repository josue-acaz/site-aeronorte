
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
  }
};

export default formatter;