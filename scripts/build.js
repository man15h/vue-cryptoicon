const fs = require('fs');
const glob = require('glob');
const path = require('path');
const { capitalize, removeSvg, fixName } = require('./helpers');

const rootDir = path.join(__dirname, '..');

const indexFile = path.join(rootDir, 'src', 'icons', 'index.js');
const allIcons = [];
glob(
  `${rootDir}/node_modules/cryptocurrency-icons/svg/color/*.svg`,
  (_, icons) => {
    fs.writeFileSync(indexFile, '', 'utf-8');

    icons.forEach(icon => {
      const colorSvg = fs.readFileSync(icon, 'utf-8');
      const blackSvg = fs.readFileSync(icon.replace('color', 'black'), 'utf-8');

      const [name] = path.basename(icon).split('.');
      const capitalizedName = capitalize(fixName(name));
      const colorSvgContent = removeSvg(colorSvg);
      const blackSvgContent = removeSvg(blackSvg);
      const template =
        `const ${capitalizedName} = {
        symbol: '${fixName(name)}',
        color: '#000', \ncolorIcon() { return ` +
        '`' +
        colorSvgContent +
        '`' +
        ` }, \nplainIcon: c => {
            return` +
        '`' +
        blackSvgContent.replace(
          '<path',
          '<path fill-rule="evenodd" fill="${c ? c : this.color}"'
        ) +
        '`\n' +
        `} }\n export default ${capitalizedName}; `;
      //   console.log(prettier.format(template, { semi: false, parser: 'babel' }));
      fs.writeFileSync(
        `${rootDir}/src/icons/${fixName(name).toLowerCase()}.js`,
        template,
        'utf-8'
      );
      const importString = `import ${fixName(
        capitalizedName
      )} from './${fixName(name).toLowerCase()}';\r\n`;
      fs.appendFileSync(indexFile, importString, 'utf-8');
      allIcons.push(capitalizedName);
    });
    const exportString = `export {${fixName(
      allIcons.join(', ')
    )}} \r\nexport default [${allIcons.join(', ')}]`;
    fs.appendFileSync(indexFile, exportString, 'utf-8');
  }
);
