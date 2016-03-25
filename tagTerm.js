module.exports = tagterm
function tagterm(input, term, tag) {
    return input.replace(new RegExp('(^|\)('+term+')(\|$)','ig'), '$1<'+tag+'>$2</'+tag+'>$3');
}