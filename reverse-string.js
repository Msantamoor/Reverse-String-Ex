//
// This is only a SKELETON file for the 'Reverse String' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const reverseString = (string) => {
  const str = string.split("")
  const rev = []
  for(let i = str.length; i >= 0; i--){
    rev.push(str[i])
  }
  return rev.join("")
};
