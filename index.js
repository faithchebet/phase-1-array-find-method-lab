// code your solution here
function superbowlWin(arrayOfObjects) {
    const winningYearObject = arrayOfObjects.find(obj => obj.result === "W");
  
    if (winningYearObject) {
      return winningYearObject.year;
    } else {
      return undefined;
    }
  }
  
  const superbowls = [
    { year: 2012, result: "L" },
    { year: 2011, result: "W" },
    { year: 2010, result: "L" },

  ];
  
  const winningYear = superbowlWin(superbowls);
  console.log(winningYear); 