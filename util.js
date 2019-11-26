
var searchKeys = [
  'attention',
  'meditation',
  'delta',
  'theta',
  'lowAlpha',
  'lowBeta',
  'lowGamma',
];

var str = '{"eSense":{"attention":51,"meditation":66}"eegPower":{"delta":76256,"theta":11587,"lowAlpha":8441,"highAlpha":2546,"lowBeta":4662,"highBeta":10323,"lowGamma":2181,"highGamma"{"rawEeg":74}gnalLevel":0}';

const objectMaker = (searchKeys, str) => {
  var output = searchKeys.map((_key) => {
    var expression = _key + '\\b.*?(,|})';
    var regex = new RegExp(expression, 'g');
    var found = str.match(regex);
    found[0] = found[0].replace('}', '');
    found[0] = found[0].replace(',', '');
    debugger
    return found;
  });
  return output;
}

var x = objectMaker(searchKeys, str);
var y = x.concat.apply([], x);



