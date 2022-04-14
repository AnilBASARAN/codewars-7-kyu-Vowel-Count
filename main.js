function getCount(str) {
  let vovels = ['a','e','i','o','u']
  let letters =str.split('')
  let vowelsCount = 0;
  for(let i = 0 ; i < str.length ; i++){
    if( vovels.includes(letters[i]))
      vowelsCount = vowelsCount +1
  }
   return vowelsCount;
}
