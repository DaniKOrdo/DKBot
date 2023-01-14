const FtpDeploy = require("ftp-deploy");
const ftpDeploy = new FtpDeploy();

const config = {
  user: "www-data",
  // Password optional, prompted if none given
  password: "adsfzcxv?",
  host: "10.10.10.10",
  port: 21,
  localRoot: "./" ,
  remoteRoot: "./DKBot",
  // include: ["*", "**/*"],      // this would upload everything except dot files
  include: ["*", "**/*"],
  // e.g. exclude sourcemaps, and ALL files in node_modules (including dot files)
  exclude: [
    ".vscode/**",
    ".git/**",
    "node_modules/**",
    "node_modules/**/.*",
    "./node_modules/**",
    "./node_modules/*",
    "package-lock.json",
  ],
  // delete ALL existing files at destination before uploading, if true
  deleteRemote: false,
  // Passive mode is forced (EPSV command is not sent)
  forcePasv: true,
  // use sftp or ftp
  sftp: false,
};

ftpDeploy
  .deploy(config)
  .then((res) => console.log("finished:", res))
  .catch((err) => console.log(err));
