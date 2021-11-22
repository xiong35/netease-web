const child_process = require("child_process");

async function exec(command) {
  return new Promise((resolve, reject) => {
    child_process.exec(command, (err, stdout, stderr) => {
      console.log(stdout);
      if (stderr || err) console.log(err, stderr);
      resolve();
    });
  });
}

async function readLineSync(hint) {
  const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  return new Promise((resolve, reject) => {
    readline.question(hint, (res) => {
      resolve(res);
      readline.close();
    });
  });
}

const kebabCase = (string) =>
  string
    .replace(/([a-z])([A-Z])/g, "$1_$2")
    .replace(/\s+/g, "_")
    .toLowerCase();

module.exports = { exec, readLineSync, kebabCase };
