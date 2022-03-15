const fs = require('fs');

let types = fs.readFileSync(__dirname + '/src/Types.cs').toString();

types = types.replace(/List\<SignatureEvidenceProvider\>/g, 'List<object>');
types = types.replace('public interface Document', 'public class Document');

fs.writeFileSync(__dirname + '/src/Types.cs', types);