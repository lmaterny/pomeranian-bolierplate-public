import './styles.css';

export function JsNumbersTraining() {
  let age = 18;
  let hasDriverLicense = true;
  let hasCar = true;
  

  function canDrive(age, hasDriverLicense, hasCar) {
    if (age && hasDriverLicense && hasCar) {
      return 'You can drive your car!';
    }
    else if (age && hasDriverLicense && !hasCar) {
      return 'You can drive a rental car.';
        }
    else if (age && !hasDriverLicense && hasCar) {
      return "You can't drive without a driver's license.";
      }
    else if (age <=18) {
      return  'You are too young to drive.';
    }
  }
  function hasEnough(hasEnough) 
  { if (hasEnough) { 
    return true; 
  } else { 
    return false; } } 
    canDrive(18, true, true); 
    hasEnough(true);

  // function isStringShort (string) {
  //   let string = 10;
  //   if (string.lenght < 10)
  //     return true
  //   else
  //     return false
  // }   

  function circleArea() {
    let x = prompt('wprowadź promień koła');
    let r = Math.PI * x ** 2;
    return {

    }
  }
  
  function sumFloat() {
    let suma = 11 + 12;
    return suma.toFixed(4);
  }


return(
<>
      {canDrive(18, true. true)}<br></br>
      {/* {isStringShort('isStringShort')}<br></br> */}
      {/* {circleArea(6)}<br></br> */}
      {sumFloat(51.12341, 34.3421245)}<br></br>

        </>
        )
  }