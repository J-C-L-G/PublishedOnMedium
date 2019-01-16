function creandoScope(){
    var carlos = 'carlos';
    carlos += ' ledezma';
    console.log(carlos)
}


function creandoUnClosure(){
    var soyVariableLibre = 0;
    return function cerrandoEnLaVariableLibre(){
        return ++soyVariableLibre;
    }
}

var pruebaDeClosure = creandoUnClosure();
console.log(pruebaDeClosure()); // 1
console.log(pruebaDeClosure()); // 2
console.log(pruebaDeClosure()); // 3
console.log(pruebaDeClosure()); // 4
console.log(pruebaDeClosure()); // 5


