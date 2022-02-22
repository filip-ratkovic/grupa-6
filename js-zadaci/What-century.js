function whatCentury(year)
{
  var century = Math.ceil(year/100);
 if (century===1) {
    return century + "st"
} else if (century===2) {
    return century + "nd"
} else if (century===3) {
    return century + "rd"
}
  else {
    return century + (century < 20 ? 'th' : ['th', 'st', 'nd', 'rd'][century % 10] || 'th');

  }
}

console.log(whatCentury(2022));

