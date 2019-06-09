function oldwayCopy(textToCopy) {
    console.log('use old way')
    const input = document.createElement('textarea');
    document.body.appendChild(input);

    input.value = textToCopy;
    input.focus();
    input.select();
    const result = document.execCommand('copy');
    if (result === 'unsuccessful') {
        console.error('无法复制此文本：');
    }
    else {
        alert('复制成功！')
    }


}


var copyText = function () {
    var documentClone = document.cloneNode(true);
    var article = new Readability(documentClone).parse();
    console.log(article.textContent)

    var titleText = article.title.trim()
    var contentText = article.textContent.trim()
    var urlText = window.location.href

    var textToCopy = '\t\t\t标题： ' + titleText +
        '\n转帖原地址:  ' + urlText +
        '\n' + contentText

    //https网页使用clipboard api
    if (location.protocol == 'https:') {
        console.log('use clipboard api')
        navigator.clipboard.writeText(textToCopy)
            .then(() => {
                console.log('文本已经成功复制到剪切板');
                alert('复制成功！')
            })
            .catch(err => {
                // 如果用户没有授权，使用oldway尝试
                oldwayCopy(textToCopy)
            });
    }

    //http网页使用execCommand
    else {
        oldwayCopy(textToCopy)
    }





}


copyText();
