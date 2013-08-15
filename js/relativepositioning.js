function relativePositioning() {
    var elements = document.querySelectorAll(".step");

    for (var i = 0; i < elements.length; i++) {
        var x = elements[i].dataset.x;
        var y = elements[i].dataset.y;
        var z = elements[i].dataset.z;
        if (elements[i].dataset.x == undefined) {
            x = "0";
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

        if (elements[i].dataset.y == undefined) {
            y = "0";
        }

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

        if (elements[i].dataset.z == undefined) {
            z = "0";
        }

        if (z.substring(0, 1) === '+') {
            var lastStep = elements[i - 1].dataset.z;
            var position = parseInt(lastStep) + parseInt(z);
            elements[i].dataset.z = position;
        } else if (z.substring(0, 1) === '-') {
            var lastStep = elements[i - 1].dataset.z;
            var position = parseInt(lastStep) + parseInt(z);
            elements[i].dataset.z = position;
        } else {
            elements[i].dataset.z = z;
        }
    }
}