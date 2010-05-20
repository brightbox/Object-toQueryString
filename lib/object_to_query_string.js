// Tests if an object is {} or not
// Probably not the best way, but it works
Object.isDict = function(obj) {
  return obj.constructor.toString().indexOf("function Object") != -1;
}

// Turns a (nested) dictionary into a query string
// nested elements get keys in the form foo[bar]
// 
// Replaces the built in Object.toQueryString()
Object.toQueryString = function(dict) {
  var pairs = []

  // Shoves the final string into pairs array
  var process_dict = function(dict, prefix) {
    if (!prefix) { prefix = "" }

    // Loop over the keys in the dict
    for (k in dict) {
      // Grab the value
      var v = dict[k];

      // Setup the key according to whether we have a prefix or not
      if (prefix != "") {
        var key = prefix + "[" + k + "]"
      } else {
        var key = k;
      }

      if (Object.isDict(v)) {
        // recursively process this dict
        process_dict(v, key)
      } else {
        // Add Key and Value to the array, escaped
        pairs.push(escape(key) + "=" + escape(v))
      }
    }
  }

  // Kick the recursion off!
  process_dict(dict)

  // We return a string
  return pairs.join("&")
}
