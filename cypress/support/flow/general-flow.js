export default class GeneralFlow {
  
  /**
  * Get exchange rate via api
  */
  static exchangerates() {
      return cy
      .request({
        method: 'GET',
        url: 'https://flip.id/it-api/v2/globe/exchange-rates',
      })
      .then((response) => {
        return {
          transferFee: response.body[56].flip_transfer_fee,
          exchangeRate: response.body[56].flip_exchange_rate,
          currencyCode: response.body[56].currency_code
        };
    });
  }
    /**
  * Calculate exchange amount via api
  */
  static calculateExchange(amount) {
    const body = {
        amount: amount,
        destination_country_iso_code: 'GBR',
        source_country_iso_code: 'IDN'
      };

      return cy
      .request({
        method: 'POST',
        url: 'https://flip.id/it-api/v2/globe/exchange-rates/calculate',
        body
      })
      .then((response) => {
        return {
          result: response.body.exchange_amount
        };
    });
  }

  static formatCurrency(value) {
    // Format the number as currency (USD in this example, replace with your currency)
    const formattedCurrency = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(value);
  
    return formattedCurrency.replace(/(\$|\.00$)/g, '');
  }
}