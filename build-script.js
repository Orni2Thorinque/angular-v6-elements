const fs = require('fs-extra');
const concat = require('concat');    

(async function build() {

    const jsFiles = [
        './dist/runtime.js',
        './dist/polyfills.js',
        './dist/scripts.js',
        './dist/main.js'
    ];

    const cssFile = './dist/styles.css';
    
    await fs.ensureDir('elements')
    
    await concat(jsFiles, 'elements/pass-str.js')
    await fs.copy(cssFile, 'elements/styles.css')

    console.info('Elements created successfully!')

})()

