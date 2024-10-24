const errorData = {
  // replace this
};

const jsonStr = JSON.stringify(errorData);

if (localStorage["ofa-errors"] !== jsonStr) {
  localStorage["ofa-errors"] = jsonStr;
}

localStorage["ofa-errors-time"] = Date.now();
