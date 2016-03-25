module.exports = tagterm
function updateString(input, term, tag) {
    return input.replace(new RegExp('(^|\)('+term+')(\|$)','ig'), '$1<'+tag+'>$2</'+tag+'>$3');
}