let globalVariable = 'Global Value';

function outerFunction() {
  let scopedVariable = 'Scoped Value';

  function innerFunction() {
    let innerVariable = 'Inner Value';
    console.log(scopedVariable);
  }

  innerFunction();
}

outerFunction();