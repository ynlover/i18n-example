var fs = require('fs');
var chalk = require('chalk');

module.exports = {
    options: {
        debug: true,
        func: {
            list: ['i18next.t', 'i18n.t']
        },
        lngs: ['en','cn'],
        ns: [
            'locale'
        ],
        defaultNs: 'translation',
        defaultValue: '__STRING_NOT_TRANSLATED__',
        resource: {
            loadPath: 'i18n/{{lng}}/{{ns}}.json',
            savePath: 'i18n/{{lng}}/{{ns}}.json'
        },
        nsSeparator: ':',
        keySeparator: '.',
        pluralSeparator: '_',
        contextSeparator: '_',
        interpolation: {
            prefix: '{{',
            suffix: '}}'
        }
    },
    transform: function customTransform(file, enc, done) {
        "use strict";
        const parser = this.parser;
        const content = fs.readFileSync(file.path, enc);
        let count = 0;
        parser.parseFuncFromString(content, { list: ['i18next._', 'i18next.__'] }, (key, options) => {
            parser.set(key, Object.assign({}, options, {
            nsSeparator: false,
            keySeparator: false
        }));
        ++count;
    });

        if (count > 0) {
            console.log(`i18next-scanner: count=${chalk.cyan(count)}, file=${chalk.yellow(JSON.stringify(file.relative))}`);
        }

        done();
    }
}