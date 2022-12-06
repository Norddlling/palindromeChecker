function palindrome(str) {
  let validStr = str.toLowerCase().replace(/\W+/g, "").replace(/_/g, "");
  const reversedArr = validStr.split("").reverse();
  for (let i = 0; i < reversedArr.length; i++) {
    if(reversedArr[i] !== validStr[i]) {
      return false;
    }
  }
  return true;
}

palindrome("eye");
