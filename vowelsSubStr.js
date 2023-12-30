function findVowelaSubString(givenString) {
  //heelloivu
  let vowelsArray = ["a", "e", "i", "o", "u"];
  let temporaryHolder = "";
  let result = [];
  for (let i = 0; i < givenString.length; i++) {
    if (!vowelsArray.includes(givenString[i])) {
      temporaryHolder = temporaryHolder.concat(givenString[i]);
    } else if (temporaryHolder) {
      if (temporaryHolder.length > 1) {
        result.push(temporaryHolder);
      }
      temporaryHolder = "";
    }
  }
  return result;
}

console.log(findVowelaSubString("chennaiRommai"));

function checkString(str) {
  let v = 0;
  let c = 0;

  //code here

  let vowelsArray = ["a", "e", "i", "o", "u"];
  for (let i = 0; i < str.length; i++) {
    console.log(str[i], typeof str[i]);
    if (str[i].trim()) {
      if (vowelsArray.includes(str[i])) {
        v++;
      } else {
        c++;
      }
    }
  }

  if (v > c) console.log("Yes");
  else if (c > v) console.log("No");
  else console.log("Same");
}

checkString("a i u e o t m n s w");
