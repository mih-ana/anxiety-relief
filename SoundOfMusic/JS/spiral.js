function getNestedMarkup(tag, content, count) {
    tag = "<" + tag + ">"
    var start = ""
    var end = ""
    var closingTag = tag.replace("<", "</")
    while (count-- > 0) {
        start += (tag + content)
        end += closingTag
    }
    return start + end
}

var container = document.getElementById("container")
container.innerHTML = getNestedMarkup("div", "", 15)