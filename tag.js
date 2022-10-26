document.onkeydown = function (e) {
  if (e.defaultPrevented) {
    return; // Do nothing if the event was already processed
  }

  switch (e.key) {
    case "ArrowDown":
      console.log("test");
      break;
  }
};
