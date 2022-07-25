function main() {
    var increase = parseInt(readLine(), 10);
    var prices = [98.99, 15.2, 20, 1026];
    //your code goes here
    let newPrice = 0;
    let newPrice2 = [];
    for(let i=0; i<prices.length; i++){
        newPrice = prices[i] + increase;
        newPrice2.push(newPrice);
        }
    console.log(newPrice2);
}

main();