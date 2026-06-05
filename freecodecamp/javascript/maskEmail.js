let email = "ninialhsdv@email.com";

function maskEmail(email) {
  let indexOfEmailPart = email.indexOf("@");
  let emailPartSliced = email.slice(indexOfEmailPart);
  let personalDataSliced = email.slice(0, indexOfEmailPart);
  let astheriscsSlice = personalDataSliced.slice(1, -1);
  let astheriscsReplace = astheriscsSlice.replace(/./g, "*");
  let firstLetter = personalDataSliced[0]; 
  let lastLetter = personalDataSliced[personalDataSliced.length - 1]; 
  let finalEmail = firstLetter + astheriscsReplace + lastLetter + emailPartSliced;
  
  return finalEmail;
}
console.log(maskEmail("ninialhsdv@email.com")); 

