const fs = require('fs')
const sass = require('sass')
function readSassOrScss(sassStr) {
	let res = "";
  try {
    const renderConfig = {
      data: sassStr
    }
		renderConfig.indentedSyntax = false;
    res = sass.renderSync(renderConfig)
  } catch (err) {
    throw new Error(err)
  }

  return res.css.toString('utf-8')
}
console.log(readSassOrScss("body{.text{color:red;}}"))