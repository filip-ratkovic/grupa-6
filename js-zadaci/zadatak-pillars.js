
function pillars(num_pill, dist, width) {

   if(num_pill<=1) {
      return 0;
   }
   if(dist<10 || dist>30) {
      return;
   }
   if (width<10 || width>50) {
      return;
   }
   
      return (num_pill-1)*(dist*100+width)-width;
   }


  console.log(pillars(2,20,25));