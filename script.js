// when checkbox is clicked,
  // save it as last checked;
// if last checked has a value and shift key is held down while selecting a new checkbox,
  // get index of last checked and check all boxes between it and the current checked box

const checkboxes = Array.from(document.querySelectorAll('.inbox input[type=checkbox]'));

function runEvent(e) {
  let firstChecked = this;

  checkboxes.forEach(checkbox => checkbox.addEventListener('keydown', function(e) {
    if (e.shiftKey) {
      let start = getMin(firstChecked, this);
      let end = getMax(firstChecked, this);
      checkTargetBoxes(start, end)
    }
  }))
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

checkboxes.forEach(checkbox => checkbox.addEventListener('change', runEvent))
