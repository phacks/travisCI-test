var kata = {};

kata.add = function(numbers) {

  if(numbers === '') {
    return 0;
  }

  var delimiters = findDelimiter(numbers);

  if (delimiters.length > 2) {
    numbers = numbers.substring(numbers.indexOf('\n') + 1, 
                                numbers.length);
  }

  var delimitersEscaped = '[' + delimiters.join('') + ']+';
  var regex = new RegExp(delimitersEscaped);

  var delimiterSplit = numbers.split(regex);

  var sum = 0;
  var newLineSplit = [];

  var errorMessage = "Negatives not allowed: ";
  var negatives = false;

  for (var i = 0; i < delimiterSplit.length; i++) {

      // Negative numbers are not allowed
      if (delimiterSplit[i][0] === '-'){
        errorMessage += delimiterSplit[j] + " ";
        negatives = true;
      }

      // Numbers bigger than 1000 are ignored
      if (parseInt(delimiterSplit[i]) <= 1000) {
        sum += parseInt(delimiterSplit[i]);
      }
    
  }

  if (negatives)
    throw new Error(errorMessage);

  return sum;
}

function findDelimiter(numbers) {
  var delimiters = ['\\n', ','];

  if (numbers.indexOf('//') === 0) {
    // There is a non-standard delimiter

    var arrayComplexDelimiters = numbers.match(/\[[^\[\]]*\]/g);

    if(arrayComplexDelimiters === null) {
      // there is only one delimiter with one char
      delimiters[1] = numbers[2];
    }
    else {
      for (var i = 0; i < arrayComplexDelimiters.length; i++) {
      delimiters[i+1] = arrayComplexDelimiters[i]
                  .substring(1, arrayComplexDelimiters[i].length - 1);
      }
    }

  }

  return delimiters;
}

module.exports = kata;
