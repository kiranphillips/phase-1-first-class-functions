function callback(){
    return 'helloworld'
}

function receivesAFunction(callback) {
   return (callback())
}
receivesAFunction(callback)

function returnsANamedFunction() {
        return function name() {
          return 'to not deeply equal'
        };
    }
    function returnsAnAnonymousFunction() {
        return function () {
          return
        };
    }