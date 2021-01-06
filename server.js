const instructor = process.env.FAVORITE_INSTRUCTOR;

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
  while (true) {
    console.log(`${instructor} rocks!`);
    await sleep(5000);
  }
}

main();
