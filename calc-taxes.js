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
  //var totalTaxes

}
var sales;
var totalSales = 0;
var totalTaxes = 'totalSales';
var companyName;
function salesTaxReport(salesData, taxRates) {
  for(var i = 0; i < salesData.length; i++){

    // output[i] = salesData[i].name;
    //console.log(salesData[i].value())
     companyName = salesData[i].name
     sales = salesData[i].sales
    //console.log(companyName)
  if(!output.hasOwnProperty(companyName)){
    output[companyName] = { totalSales: salesData[i].sales }
  }else{
      //salesData[i];
      //var arr3 = output[companyName].concat(salesData[i]);
      var combineSales = output[companyName].totalSales.concat(sales)
      output[companyName] = { totalSales: combineSales }
      //output[companyName] = output[companyName].totalSales.concat(sales)
      //console.log(output[companyName].totalSales.concat(sales))
      //console.log(companyName, combineSales)
    }
    //console.log(salesData[i].sales)
    //console.log(salesData[i].name === 'Telus')
    //console.log(output)
  }
console.log(output)


}

var results = salesTaxReport(companySalesData, salesTaxRates);
 //console.log(results)

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