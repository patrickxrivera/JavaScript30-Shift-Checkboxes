const checkboxes = Array.from(document.querySelectorAll('.inbox input[type=checkbox]'));

let lastChecked;

function runEvent(e) {
  if (e.shiftKey) {
    getTargetBoxes(lastChecked, this);
  }
  lastChecked = this;
}

function getTargetBoxes(lastChecked, secondChecked) {
  let start = getMin(lastChecked, secondChecked);
  let end = getMax(lastChecked, secondChecked);
  checkTargetBoxes(start, end)
}

function checkTargetBoxes(start, end) {
  let targetBoxes = checkboxes.slice(start, end + 1)
  targetBoxes.forEach(checkbox => checkbox.checked = true);
}

function getMin(val1, val2) {
  [val1Index, val2Index] = [getIndex(val1), getIndex(val2)]
  return Math.min(val1Index, val2Index);
}

function getMax(val1, val2) {
  [val1Index, val2Index] = [getIndex(val1), getIndex(val2)]
  return Math.max(val1Index, val2Index);
}

function getIndex(val) {
  return checkboxes.indexOf(val);
}

checkboxes.forEach(checkbox => checkbox.addEventListener('click', runEvent))
