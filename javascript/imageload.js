var _img = document.getElementById('id1');
var newImg = new Image;
newImg.onload = function() {
    _img.src = this.src;
}
newImg.src = 'file:///home/prasanna/Documents/git/CSR/images/Transfer.png';