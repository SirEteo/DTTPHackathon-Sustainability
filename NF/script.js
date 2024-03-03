function allowDrop(event) {
    event.preventDefault();
  }
  
  function drag(event) {
    event.dataTransfer.setData("text", event.target.id);
  }
  
  function drop(event, binType) {
    event.preventDefault();
    var itemId = event.dataTransfer.getData("text");
    var item = document.getElementById(itemId);
    var bin = document.getElementById(binType + "Bin");
    
    bin.appendChild(item);
  }