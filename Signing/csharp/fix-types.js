const fs = require('fs');

let types = fs.readFileSync(__dirname + '/src/Types.cs').toString();

let compositionTypes = [...types.matchAll(/public interface (.+) \{/g)].map(result => result[1]);

for (const compositionType of compositionTypes) {
  const listRegex = new RegExp(`^(.*?)List<${compositionType}>(.*?)$`, 'gm');
  types = types.replace(listRegex, function (match) {
    var indent = match.match(/^\s+/);
    return indent[0] + '[JsonConverter(typeof(CompositionTypeListConverter))]\n' + match;
  });

  const typeRegex = new RegExp(`^(.*?)(public|private|protected) ${compositionType} (.*?)$`, 'gm');
  types = types.replace(typeRegex, function (match) {
    if (match.includes('class') || match.includes('interface')) return match;
    var indent = match.match(/^\s+/);
    return (indent ? indent[0] : '') + '[JsonConverter(typeof(CompositionTypeConverter))]\n' + match;
  });
}
types = types.replace(/List\<SignatureEvidenceProvider\>/g, 'List<object>');
types = types.replace(/public SignatureEvidenceProvider/g, 'public object');

fs.writeFileSync(__dirname + '/src/Types.cs', types);