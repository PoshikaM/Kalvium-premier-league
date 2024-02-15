//Progression 1 - create a Manager array and return it
let managerName = "Alex Ferguson";
let managerAge = 78;
let currentTeam = "Manchester FC";
let trophiesWon = 27;

//Write your function here
function createManager(managerName, managerAge, currentTeam, trophiesWon){
  return [managerName, managerAge, currentTeam, trophiesWon]
}

// Don't edit the following code
try {
  var manager = createManager(
    managerName,
    managerAge,
    currentTeam,
    trophiesWon
  );
} catch (e) {
  // do nothing - expected error
}

//Progression 2 - create a formation object and return it
var formation = [4, 4, 3];

//write your function here
function createFormation(forming){
  if(forming.length != 0){
    return {
      defender: forming[0],
      midfield: forming[1],
      forward : forming[2]
    }
  }else{
    return null
  }
}


// Dont edit the following code

try {
  var formationObject = createFormation(formation);
} catch (e) {
  //do nothing
}

//Progression 3 - Filter players that debuted in ___ year
function filterByDebut(year){
  return players.filter((d) => {
    return d.debut == year
  })
}

//Progression 4 - Filter players that play at the position _______
function filterByPosition(position){
  const p = []
  for(let i=0; i<players.length; i++){
    if(players[i].position == position){
      p.push(players[i])
    }
  }
  return p;
}

//Progression 5 - Filter players that have won ______ award
function filterByAward(awardName){
  const award = []
  for(let i=0; i<players.length; i++){
    players[i].awards.forEach(function(a){
      if (a.name == awardName){
        award.push(players[i])
      }
    })
  }
  return award
}

//Progression 6 - Filter players that won ______ award ____ times
function filterByAwardxTimes(awardName, noOfTimes){
  if (!awardName || !noOfTimes) return [];

  let c = [];
  for (let i = 0; i < players.length; i++) {
    let count = 0;
    let awards = players[i].awards;

    awards?.forEach(function (award) {
      if (award.name == awardName) {
        count += 1;
        if (count == noOfTimes) {
          c.push(players[i]);
        }
      }
    });
  }
  return c;
}

//Progression 7 - Filter players that won ______ award and belong to ______ country
 function filterByAwardxCountry(awardName, country){
  cont = []
  for (let i=0; i<players.length; i++){
    for(let j=0; j<players[i].awards.length; j++){
      if(players[i].awards[j].name == awardName && players[i].country == country){
        cont.push(players[i])
      }
    }
  }
  return cont;
 }

//Progression 8 - Filter players that won atleast ______ awards, belong to ______ team and are younger than ____
function filterByNoOfAwardsxTeamxAge(noOfAwards, team, age) {
  let num = [];
  for (let i = 0; i < players.length; i++) {
    let award = players[i].awards;
    let awardsLength = award.length;
    if (
      awardsLength >= noOfAwards &&
      players[i].team == team &&
      players[i].age < age
    )
      num.push(players[i]);
  }
  return num;
}

//Progression 9 - Sort players in descending order of their age
function SortByAge(){
  let b = []
  for(let i=0; i<players.length; i++){
    let age = players[i].age
    b.push(age)
    b.sort((x,y) => {
      return y-x
    })
  }
  return b;
}

//Progression 10 - Sort players beloging to _____ team in descending order of awards won
function FilterByTeamxSortByNoOfAwards(team) {
  l = [];
  for (let i = 0; i < players.length; i++) {
    let c = players[i].team;
    if (c == team) {
      let r = players[i].awards;
      l.push(r.length);
      l.sort(function (a, b) {
        return b - a;
      });
    }
  }
  return l;
}

//Challenge 1 - Sort players that have won _______ award _____ times and belong to _______ country in alphabetical order of their names

//Challenge 2 - Sort players that are older than _____ years in alphabetical order
//Sort the awards won by them in reverse chronological order
