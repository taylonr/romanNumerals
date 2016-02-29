import SourceLib from '../../src/index.js';

//Importing library via an npm module will be using this built version
import BuiltLib from '../../lib/library.js';

let sourceLib = new SourceLib();
let innerText = 'Library imported from source is named "' + sourceLib.name + '"\n';

let builtLib = new BuiltLib();
innerText += 'Library imported from built library is named "' + builtLib.name + '"';

document.body.innerText = innerText;
