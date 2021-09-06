export function calculatePrice(price, currency) {
    switch (currency) {
      case 'USD':
        return price * 1.21;
      case 'RUB':
        return price * 89.84;
      default:
        return price;
    }
  }
  
  export function calculateTotal(cart, currency) {
    let totalEUR = 0;
    Object.keys(cart).forEach((itemName) => {
      totalEUR += cart[itemName].price * cart[itemName].quantity;
    });
    return calculatePrice(totalEUR, currency).toFixed(2);
  }
  
  export function getCurrencySymbol(currencyFilter) {
    switch (currencyFilter) {
      case 'USD':
        return '$';
      case 'EUR':
        return '€';
      case 'RUB':
        return <span>&#x20bd;</span>;
      default:
        return '';
    }
  }
  