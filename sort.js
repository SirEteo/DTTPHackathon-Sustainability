function sortItem() {
    var selectedItem = document.getElementById("items");
    var selectedValue = selectedItem.options[selectedItem.selectedIndex].value;
  
    var landfillBin = document.getElementById("landfill");
    var compostBin = document.getElementById("compost");
    var recyclingBin = document.getElementById("recycling");
  
    switch (selectedValue) {
      case "plastic":
        landfillBin.innerHTML += "<p>Plastic</p>";
        break;
      case "organic":
        compostBin.innerHTML += "<p>Organic Waste</p>";
        break;
      case "paper":
        recyclingBin.innerHTML += "<p>Paper</p>";
        break;
      // Add more cases for additional items
      default:
        break;
    }
  }