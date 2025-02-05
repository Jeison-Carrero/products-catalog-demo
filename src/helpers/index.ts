export const formatCurrency = (quantity: number) => {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    }).format(quantity)
}

export const verifyInput = (event: React.KeyboardEvent<HTMLInputElement>) => {

    if (
        !/[0-9.]/.test(event.key) ||
        (event.key === '.' && (event.target as HTMLInputElement).value.includes('.'))
    ) {
        event.preventDefault()
    }
}

export const getDiscountPayments = (price: number, discount: number): number => {
    return price - (Math.round((discount / 100) * price))
}

export const getMonthlyPayments = (price: number): number => {
    return Math.round(price / 12)
}

export const getWeeklyPayments = (price: number): number => {
    const monthlyPayments = getMonthlyPayments(price)
    return Math.round(monthlyPayments / 4)
}

