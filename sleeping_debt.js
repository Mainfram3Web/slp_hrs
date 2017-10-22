const getSleepHours = (day) => {
  switch (day) {
    case 'Monday':
      return 8
      break;
    case 'Tuesday':
      return 6
      break;
    case 'Wednesday':
      return 7
      break;
    case 'Thursday':
      return 8
      break;
    case 'Friday':
      return 4
      break;
    case 'Saturday':
      return 5
      break;
    case 'Sunday':
      return 7
      break;
    default:
     NaN;    
};
  
const getActualSleepHours = () => {
 getSleepHours('Monday') +
 getSleepHours('Tuesday') +   
 getSleepHours('Wednesday') +
 getSleepHours('Thursday') + 
 getSleepHours('Friday') +
 getSleepHours('Saturday') +
 getSleepHours('Sunday') +  
   return;
 };

const getIdealSleepHours = () => {
  let idealHours = 8;
  return idealHours * 7;
};

function calculateSleepDebt() {;
  let actualSleepHours = getActualSleepHours();
  let idealSleepHours = getIdealSleepHours();
  
 if (actualSleepHours === idealSleepHours) {
   console.log('You got the perfect amount');
 }
 if (actualSleepHours < idealSleepHours) {
   console.log('You got ' + (idealSleepHours - actualSleepHours) + 'hours less sleep than you needed' );
 }
 if (actualSleepHours > idealSleepHours) {
   console.log('You got' + (actualSleepHours - idealSleepHours) + 'more hours of sleep than you needed');
   };
 };
 
 calculateSleepDebt();