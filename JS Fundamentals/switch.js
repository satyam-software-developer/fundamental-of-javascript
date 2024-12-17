const fruits = prompt("Enter the fruit name");

switch (fruits) {
  case "Apple":
    console.log("Heyi its Apple");
    break;
  case "Kiwi":
    console.log("Wow!, its a Kiwi");
    break;
  default:
    console.log("Oh No its neither Apple not kiwi");
    break;
}
console.log("Outside Switch");
