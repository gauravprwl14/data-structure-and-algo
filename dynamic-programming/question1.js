// Max Profit with K transaction



function maxProfitWithKTransactions(prices, k) {
    // Write your code here.
      let sortedPrices = {}
      let newPricesArr = [];
    //   for(let i in prices) {
    //       newPricesArr.push({
    //           value: prices[i],
    //           position: i,
    //           marked: false
    //       })
    //   }
      prices.forEach((item, index) => {
        newPricesArr.push({
            value: item,
            position: index,
            marked: false
        })
      })
      newPricesArr.sort((a, b) => {
          return a.value - b.value
      })
      let maxProfit =0
      let i = 0;
      let j = newPricesArr.length - 1
      console.log('newPricesArr', newPricesArr)
      for(let p = 0; p<k; p++) {
        j = newPricesArr.length - 1
        while(i<j) {
            if (newPricesArr[i].position < newPricesArr[j].position) {
                if (!newPricesArr[j].marked) {
                    console.log('%c i,j,maxProfit ', 'background: lime; color: black', i, j, maxProfit);
                    maxProfit = maxProfit +  (newPricesArr[j].value - newPricesArr[i].value)
                    newPricesArr[i].marked = true
                    newPricesArr[j].marked = true
                    i = i+1
                    j = j--
                    break
                }
            }
            j--
        }
        console.log('%c p ', 'background: lime; color: black', p);
      }
      console.log('maxProfit', maxProfit)
  }
  