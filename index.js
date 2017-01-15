const app = "I don't do much."

function destructivelyAppendKitten(name){
  kittens.push(name);
}

function destructivelyPrependKitten(name){
  kittens.unshift(name);
}

function destructivelyRemoveLastKitten(){
  kittens.pop();
}

function destructivelyRemoveFirstKitten(){
  kittens.shift();
}

function appendKitten(name){
  const answer = [...kittens, name];
  return answer;
}

function prependKitten(name){
  const answer = [name, ...kittens];
  return answer;
}

function removeLastKitten(){
  const answer = kittens.slice(0, kittens.length - 1);
  return answer;
}

function removeFirstKitten(){
  const answer = kittens.slice(1);
  return answer;
}
