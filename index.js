
function superbowlWin(array) {
    const found = array.find(function(object) {
   return object.result === "W"
    })
    if (found) {
      return found.year
    }
    else {
    return found
    }
}