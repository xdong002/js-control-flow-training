console.log("sing.js loaded");

var i = window.prompt("how many verses you want to hear?");

for (; i >=2; i--) {
  console.log(i + " bottles of beer on the wall,")
  console.log(i + " bottles of beer!")
  console.log("Take one down and pass it around,")
  console.log(i-1 + " bottles of beer on the wall!")
}

for (;i === 1; i--) {
      console.log(i +" bottle of beer on the wall,")
      console.log(i +" bottle of beer!")
      console.log("Take one down and pass it around,")
      console.log("No more bottles...")
}
