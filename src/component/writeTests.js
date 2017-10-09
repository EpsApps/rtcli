var fs = require('fs');

function writeTests(filePath, fileName) {
    
    let data = "";
    data += "import { expect } from 'chai';\n";
    data += "import { mount, shallow, ReactWrapper, ShallowWrapper } from 'enzyme';\n";
    data += "import { Template, ITemplateProps, ITemplateState } from './Template';\n";
    data += "import * as styles from './Template.css';\n";
    data += "\n";
    data += "function getProps(): ITemplateProps {\n";
    data += "    return {\n";
    data += "    }\n";
    data += "}\n";
    data += "\n";
    data += "function setup() {\n";
    data += "    let props = getProps();\n";
    data += "    return mount(<Template {...props} />)\n";
    data += "}\n";
    data += "\n";
    data += "describe('Template:', () => {\n";
    data += "\n";
    data += "    it('it does something', () => {\n";
    data += "    });\n";
    data += "\n";
    data += "});\n";
    

    fs.writeFile(filePath + '.test.tsx', data, 'utf8', function (err) {
        if (err) return console.log(err);
    });

}

module.exports = {
    writeTests
};