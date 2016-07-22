var child_process = require('child_process');

exports.handler = function(event, context) {
  var proc = spawn('./main', [ JSON.stringify(event) ], { stdio: 'inherit' });

  proc.on('close', function(code){
    if(code !== 0) {
      return context.done(new Error("Error"));
    }

    context.done(null);
  });
}
