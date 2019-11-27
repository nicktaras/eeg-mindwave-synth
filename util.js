// Example of the problem we're trying to correct
// '{"eSense":{"attention":51,"meditation":66}"eegPower":{"delta":76256,"theta":11587,"lowAlpha":8441,"highAlpha":2546,"lowBeta":4662,"highBeta":10323,"lowGamma":2181,"highGamma"{"rawEeg":74}gnalLevel":0}';

module.exports.objectMaker = function (str) {
  var searchKeys = [
    "attention",
    "meditation",
    "delta",
    "theta",
    "lowAlpha",
    "lowBeta",
    "lowGamma"
  ];
  var input = searchKeys.map(_key => {
    var expression = _key + "\\b.*?(,|})";
    var regex = new RegExp(expression, "g");
    var found = str.match(regex);
    found[0] = found[0].replace("}", "");
    found[0] = found[0].replace(",", "");
    found[0] = found[0].replace('"', "");
    found[0] = found[0].substring(found[0].indexOf(":") + 1, found[0].length);
    return found[0];
  });

  var output = {};

  input.map((val, i) => {
    output[searchKeys[i]] = val;
  });

  return output;
};




