var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

var companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];

var output = {};

function calculateSalesTax(salesData, taxRates) {
  // Implement your code here
  var tax = salesTaxRates[taxRates];
  var totalTax = salesData * tax;
  return totalTax;
}

function sumArray(arr){
  var total = 0;
  arr.forEach(function(i){
    total += i;
  });
  return total;
}


function salesTaxReport(salesData, taxRates) {
  var companyName;
  var province;
  for(var i = 0; i < salesData.length; i++){
    companyName = salesData[i].name;
    province = salesData[i].province;
    var sumSales = sumArray(salesData[i].sales);
    var sumTaxes = calculateSalesTax(sumSales, province);

    if(!output.hasOwnProperty(companyName)){
      output[companyName] = { totalSales: sumSales };
      output[companyName].totalTaxes =  sumTaxes;
    }else{
      output[companyName].totalSales += sumSales;
      output[companyName].totalTaxes += sumTaxes;
    }
  }
  return output;
}

var results = salesTaxReport(companySalesData, salesTaxRates);
console.log(results);
//calculateSalesTax(companySalesData, salesTaxRates)

//console.log(output)
/* Expected Results:
{
  Telus: {
    totalSales: 1300
    totalTaxes: 144
  },
  Bombardier: {
    totalSales: 800,
    totalTaxes: 40
  }
}
*/