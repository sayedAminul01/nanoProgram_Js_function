
function remove(text)
{
const removeNumberAndCharacter = text.replace(/["-->",0-9,::]/gi, "");
const removeNewLine = removeNumberAndCharacter.replace(/[\r\n]/g, "");
const finalStep = removeNewLine;
console.log(finalStep);
}

let word = `
00:00:04,07 --> 00:00:07,05
so that they could go back through history and document it.

4
00:00:07,05 --> 00:00:09,09
The problem with giving everyone a time machine

5
00:00:09,09 --> 00:00:13,02
is that it would be too tempting to not just document,

6
00:00:13,02 --> 00:00:15,00
but also change history.
`
remove(word);