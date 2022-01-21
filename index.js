const { exec } = require("child_process");

exec("yarn test", (err, stdout, stderr) => {
  console.log({
    err,
    stdout,
    stderr,
  });
  if (err || stderr) {
    throw new Error("Tests failed");
  } else if (stdout) {
    console.log("Tests passed");
  }
});
