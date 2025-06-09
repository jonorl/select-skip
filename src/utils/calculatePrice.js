  // Quick formula to calculate price including VAT
  
  const calculatePrice = (priceBeforeVat, vat) => {
    return Math.round(priceBeforeVat * (1 + vat / 100));
  };

  export default  calculatePrice