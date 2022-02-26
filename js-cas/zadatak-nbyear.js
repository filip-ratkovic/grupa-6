
function nbYear(p0, percent, aug, p) {
  percent=percent/100;
  count=0;
    while (p0<p) {

p0=p0+p0*percent+aug;
count=count+1;

   }
   return count;
}

console.log(nbYear(1000,2,50,1800));
