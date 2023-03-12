var currencyFormatter = require('currency-formatter');

/**
 * Get all currencies in this system
 *
 * @since 1.0.0
 *
 * @return array currencies as array
 */
export const currencies = [
    {
        'name': 'US Dollar',
        'slug': 'en',
        'code': 'USD',
        'lang': 'EN',
        'sign': '$',
        'flag_link': '/images/languages/usa.png',
        'active': false
    },
    {
        'name': 'Saudi Arab Riyals',
        'slug': 'en',
        'code': 'SAR',
        'lang': 'SA',
        'sign': 'ر.س',
        'flag_link': '/images/languages/sar.png',
        'active': true,
    }
];

/**
 * Get active currency
 *
 * @since 1.0.0
 *
 * @param string printableLabel the params of currencies array
 *
 * @return string|null|object active currency data
 */
export function activeCurrency(printableLabel = '') {
    if (process.browser) {
        let activeLang = localStorage.getItem('lang') || 'en';

        if (typeof activeLang === 'undefined' || (activeLang !== 'en' && activeLang !== 'sa')) {
            activeLang = 'en';
        }

        let activeCurrency = null;
        const activeCurrencies = currencies.filter(cur => cur.slug === activeLang);

        if (typeof activeCurrencies !== 'undefined' && activeCurrencies !== null && activeCurrencies.length > 0) {
            activeCurrency = activeCurrencies[0];
        }

        if (printableLabel === '' || printableLabel === null || activeCurrency === null) return activeCurrency;

        return activeCurrency[printableLabel] || '';
    }

    return '';
}

export function activeLang(printableLabel = '') {
    return 'en';
}

/**
 * Format Currency amount to nice formatting
 *
 * @since 1.0.0
 *
 * @param float amount
 * @param string thousandSeparator
 * @param string prefix by default it would be the sign of taka
 *
 * @return string Currency format component with data
 */
export function formatCurrency(amount: number, thousandSeparator = true, prefix = activeCurrency('sign')) {
    amount = isNumeric(amount) ? parseFloat(amount) : 0;

    return currencyFormatter.format(amount, { code: 'USD' });
}

/**
 * Check if given value is numeric or not
 *
 * @param string|int|undefined|null value
 *
 * @return boolean
 */
function isNumeric(value) {
    return !isNaN(parseFloat(value)) && !isNaN(value - 0);
}