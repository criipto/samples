const fs = require('fs');

let types = fs.readFileSync(__dirname + '/src/Types.cs').toString();

types = types.replace(/List\<SignatureEvidenceProvider\>/g, 'List<object>');
types = types.replace(/List\<Document\>/g, 'List<PdfDocument>');

fs.writeFileSync(__dirname + '/src/Types.cs', types);