var blue = 2000;
var green = 3000;
var red = 5000;
var total = red + green + blue;//total of all three alien colors

if (total == 10000) {
  if (green > 5000){//check if more than 5000 aliens
    console.log ("hi");
  } else if (green + red > 8000){//check if green plus red is more than 8000
    console.log ("bye");
  } else if (red + blue <= 3000){//check if red plus blue is NOT more than 3000
    console.log ("ok");
  }
}  