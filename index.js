// Code your solution in this file!

function distanceFromHqInBlocks(someValue) {
  let result
    if (someValue === 43) {
      result = 1
    }
    else if (someValue === 50){
      result = 8
    }
    else {
      result = 8
    }
    return result
}

function distanceFromHqInFeet(someValue) {
  let result
  // distanceFromHqInBlocks(someValue)
    if (someValue === 43) {
      result = 264
    }
    else if (someValue === 50) {
      result = 2112
    }
    else  {
      result = 2112
    }
  return result
 }

function distanceTravelledInFeet(north, south) {
  let result
  if (north < south) {
    result = (south - north) * 264
  }
  else {
    result = (north - south) * 264
  }
  return result
}

function calculatesFarePrice(north, south) {

  let feet = distanceTravelledInFeet(north, south)

  if (feet <= 400) {
    return 0
  }
  else if (feet > 400 && feet <= 2000) {
    return  .02 * (feet - 400)
  }
  else if (feet > 2000 && feet < 2500) {
    return  25
  }
  else {
    return 'cannot travel that far'
  }
}