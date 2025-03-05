export const getCoins = (): { amount: number; description: string, date: string }[] => {
    return JSON.parse(localStorage.getItem("coins") || "[]");
};

export const setTotalCoins = () => {
    const coins = JSON.parse(localStorage.getItem("coins") || "[]");
    const total = coins.reduce((sum: number, product: any) => sum + product.amount, 0);
    localStorage.setItem('balance', total)
};
  
export const addProduct = (product: { amount: number; description: string, date: string }) => {
    const coins = getCoins();
    coins.push(product);
    localStorage.setItem("coins", JSON.stringify(coins));
};
  