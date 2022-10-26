let controlDown = false;

document.onkeydown = function (e) {
  // Do nothing if the event was already processed
  if (e.defaultPrevented) {
    return;
  }

  if (e.key === "Control") {
    controlDown = true;
  } else if (e.key === "t") {
    if (controlDown) {
      console.log("taggart");
    }
  }
};

document.onkeyup = function (e) {
  // Do nothing if the event was already processed
  if (e.defaultPrevented) {
    return;
  }

  if (e.key === "Control") {
    controlDown = false;
  }
};
