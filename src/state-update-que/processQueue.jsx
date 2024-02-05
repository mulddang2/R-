export function getFinalState(baseState, queue) {
  let finalState = baseState;

  for (let update of queue) {
    if (typeof update === 'function') {
      // TODO: apply the updater function
      // console.log('update: ' + update);
      finalState = update(finalState);
      
    } else {
      // TODO: replace the state
      // console.log('replace: ' + update);
      finalState = update;
    }
  }

  return finalState;
}
