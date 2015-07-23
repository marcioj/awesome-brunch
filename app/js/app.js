module.exports.getMessage = getMessage;

module.exports.init = function () {
  document.writeln(getMessage());
}

function getMessage() {
  return 'Hello world';
}
