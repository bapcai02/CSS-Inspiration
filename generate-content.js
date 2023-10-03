const fs = require('fs');
const path = require("path");
const filePath = path.resolve(__dirname, './');

const FILE_NAME = './_sidebar.md';
const FILE_NAME_README = './README.md';
const FILE_NAME_HASHMAP = './hashmap.js';
const FILE_NAME_ARR = [];
const HASHMAP = {};
const regExp = /([^\u4E00-\u9FA50-9a-zA-Z_])/g;

const contentName = {
  'layout': 'Layout',
  'shadow': 'Shadow (box-shadow, drop-shadow)',
  'pesudo': 'pseudo-class/pseudo-element',
  'filter': 'filter',
  'border': 'border',
  'background': 'Background/Gradient (linear-gradient/radial-gradient/conic-gradient)',
  'blendmode': 'mix-blend-mode/background-blend-mode)',
  '3d': '3D',
  'animation': 'animation/transition (transition/animation)',
  'clippath': 'clip-path',
  'text': 'Text class',
  'others': 'comprehensive',
  'cssdoodle': 'CSS-Doodle',
  'svg': 'svg',
}

async function readFile(filePath) {
  await initWrite();

  Object.keys(contentName).forEach(async item => {
    const curPath = path.resolve(filePath, item);
    const newContent = `\n## ${contentName[item]} \n\n`;
    writeFile(FILE_NAME, newContent);
    writeFile(FILE_NAME_README, newContent);

    const files =  fs.readdirSync(curPath)

    files.forEach(async name => {
      const contentData = fs.readFileSync(`${curPath}/${name}`,'utf-8');
      const title = contentData.split('\n')[0].split('## ')[1].replace(/[\r\n]/g,"");
      const appendContent = `+ [${title}](./${item}/${name}) \n`;
      const appendContentReadme = `+ [${title}]) \n`;
      const id = name.split('.')[0];

      FILE_NAME_ARR.push({
        id,
        name: title.replace(regExp, '')
      });
      HASHMAP[id] = true;

      writeFile(FILE_NAME, appendContent);
      writeFile(FILE_NAME_README, appendContentReadme);
    });

    console.log('HASHMAP', HASHMAP);

    writeFileHashMap();
  });
}

async function writeFile(name, data) {
  fs.appendFileSync(name, data,  function(err) {
    if (err) {
        return console.error(err);
    }

    console.log("Data writing successful!");
 });
}

async function initWrite() {
  const initData = `# CSS-Inspiration \n\n + [introduction](./init.md) \n\n`;
  const initDataReadme = `![logo.png](./images/logo.png)\n\nHere you can find inspiration for using or learning CSS, displaying different CSS properties or different topics in the form of categories Various ways to solve using CSS. \n\n## Online preview\n\n`;

  fs.writeFileSync(FILE_NAME, initData, function(err) {

    if (err) {
        return console.error(err);
    }

    console.log("Initialization data written successfully!");
  });

  fs.writeFileSync(FILE_NAME_README, initDataReadme, function(err) {

    if (err) {
        return console.error(err);
    }

    console.log("Initialization data written successfully!");
  });
}

async function writeFileHashMap() {
  const data = `module.exports = ${JSON.stringify(HASHMAP)}`;

  fs.writeFileSync(FILE_NAME_HASHMAP, data, function(err) {

    if (err) {
        return console.error(err);
    }

    console.log("HASHMAP writing successful!");
  });
}

readFile(filePath);
