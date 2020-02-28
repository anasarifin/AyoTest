function wait() {
  setTimeout(() => {
    return 'xxx';
  }, 3000);
}

async function example() {
  console.log(await wait());
}

console.log(example());
