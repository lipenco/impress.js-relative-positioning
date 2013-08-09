function relativePositioning() {
    var elements = document.querySelectorAll(".step");

    for (var i = 0; i < elements.length; i++) {
        var x = elements[i].dataset.x;
     if (elements[i].dataset.x == undefined) 
        { x = "0";}
        if (!elements[i].dataset.x) {
        x = 0;
        }
        if (x.substring(0, 1) === '+') {
            var lastStep = elements[i - 1].dataset.x;
            var position = parseInt(lastStep) + parseInt(x);
            elements[i].dataset.x = position;
        } else if (x.substring(0, 1) === '-') {
            var lastStep = elements[i - 1].dataset.x;
            var position = parseInt(lastStep) + parseInt(x);
            elements[i].dataset.x = position;
        } else {
            elements[i].dataset.x = x;
        }
    }
    for (var i = 0; i < elements.length; i++) {
        var y = elements[i].dataset.y;
        if (elements[i].dataset.y == undefined) 
        { y = "0";}
        if (y.substring(0, 1) === '+') {
            var lastStep = elements[i - 1].dataset.y;
            var position = parseInt(lastStep) + parseInt(y);
            elements[i].dataset.y = position;
        } else if (y.substring(0, 1) === '-') {
            var lastStep = elements[i - 1].dataset.y;
            var position = parseInt(lastStep) + parseInt(y);
            elements[i].dataset.y = position;
        } else {
            elements[i].dataset.y = y;
        }
    }
}