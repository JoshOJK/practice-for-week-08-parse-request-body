function firstStep(input) {
  return input.split('&')
}

function secondStep(input) {
  return input.map((string) => string.split('='))
}

function thirdStep(input) {
  input.map((pair) => pair[1] = pair[1].replace(/\+/g, " "))
  return input;
}

function fourthStep(input) {
input.map((pair) => pair[1] = decodeURIComponent(pair[1]))
return input
}

function fifthStep(input) {
  const obj = {}
  for (let i = 0; i < input.length; i++) {
    let keyVal = input[i]
    let key = input[i][0]
    let val = input[i][1]
    obj[key] = val;
  }
  return obj
}

function parseBody(str) {
  let input = firstStep(str)
  let input1 = secondStep(input)
  let input2 = thirdStep(input1)
  let input3 = fourthStep(input2)
  let input4 = fifthStep(input3)
  return input4;
}

/******************************************************************************/
/******************* DO NOT CHANGE THE CODE BELOW THIS LINE *******************/

module.exports = {
  firstStep,
  secondStep,
  thirdStep,
  fourthStep,
  fifthStep,
  parseBody
};
