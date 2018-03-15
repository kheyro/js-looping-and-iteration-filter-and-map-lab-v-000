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
  return obj.filter(function(driver) { return driver.name.toLowerCase() === search.name.toLowerCase() })
}
