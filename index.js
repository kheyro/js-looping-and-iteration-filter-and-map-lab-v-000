// Code your solution here:

function driversWithRevenueOver(obj, rev) {
  return obj.filter(function(driver) { return driver.revenue > rev })
}

function driverNamesWithRevenueOver(obj, rev) {
  let newObj = driversWithRevenueOver(obj, rev)
  return newObj.map(
    function (driver) {
      return driver.name
    }
  )
}

function exactMatch(obj, search) {
  console.log(search[Object.keys(search)[0]])
  return obj.filter(function(driver) { return driver[Object.keys(search)[0]] === search })
}
