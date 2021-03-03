const presidents = [
  { name: "Donald Trump", terms: 1, party: "R" },
  { name: "Barack Obama", terms: 2, party: "D" },
  { name: "George W. Bush", terms: 2, party: "R" },
  { name: "Bill Clinton", terms: 2, party: "D" },
  { name: "George H.W. Bush", terms: 1, party: "R" },
  { name: "Ronald Reagan", terms: 2, party: "R" },
  { name: "Jimmy Carter", terms: 1, party: "D" },
  { name: "Gerlad Ford", terms: 1, party: "R" },
  { name: "Richard Nixon", terms: 2, party: "R" },
  { name: "John F. Kennedy", terms: 1, party: "D" },
  { name: "Lyndon Johnson", terms: 2, party: "D" },
  { name: "Dwight Eisenhower", terms: 2, party: "R" }
];

//Challenge Questions
//1) Filter all presidents, leaving only the Democratic ones
const democratic = presidents.filter(function(president){
  if (president.party === 'D'){
    return true;
  };
});
console.log(democratic);

//2)Filter all presidents to leave only one term Republican presidents HINT use If statement
const oneRepublican = presidents.filter(function(president){
    if(president.terms === 1){
    return true;
      if (president.party === 'R'){
    return true;
  };
  };
});
console.log(oneRepublican);

const republican = presidents.filter((el) => el.party === "R" && el.terms === 1);
console.log(republican);

//3) return only the last three presidents
//const lastThree = (function(10, 11, 12){
//  console.log(presidents.slice(10, 11, 12));
console.log(president.slice(-3));
 const index = presidents.length - 3;
 const lastThree = [...presidents.slice(index)];
 console.log(lastThree);
//4) log all dems who served 2 terms. HINT use chain filter, filter and slice
const twoDemocrat = democratic.filter ((president) => president.terms === 2);
console.log(twoDemocrat);
//BONUS write a script to check if LBJ was a 2 term president. IF he was then alert("LBJ served two terms") else alert "LBJ was one and done"
