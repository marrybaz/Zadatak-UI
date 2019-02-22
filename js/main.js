let d = id => document.getElementById(id);
let c = id => document.getElementsByClassName(id);


let b = cs => {
    bar.animate(cs);
    let pt = c('progressbar-text')[0];
    if (cs == 1) {
        pt.classList.add('fullbar')
    } else {
        pt.classList.remove('fullbar')
    }

};

let currentStatus = 0;
let emailEntered = false;
let firstEntered = false;
let lastEntered = false;
let radioEntered = false;
let checkAnimHtml = '<div class="spinner"><div class="double-bounce1"></div><div class="double-bounce2"></div></div>';

let bar = new ProgressBar.Circle('#progress-bar', {
    color: '#fff',

    strokeWidth: 6,
    trailWidth: 1,
    easing: 'easeInOut',
    duration: 1400,
    text: {
        autoStyleContainer: false
    },
    from: { color: '#fff', width: 1 },
    to: { color: '#fff', width: 6 },

    step: function (state, circle) {
        circle.path.setAttribute('stroke', state.color);
        circle.path.setAttribute('stroke-width', state.width);

        var value = Math.round(circle.value() * 100);
        circle.setText(value + '%');

    }
});
bar.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
bar.text.style.fontSize = '1rem';

d('email').addEventListener('focus', function () {
    d('email').removeAttribute('placeholder');
    d('visible').style.visibility="visible";
});


d('email').addEventListener('focusout', function () {
    let e = d('email').value;
    if (e.length === 0 || (emailEntered && !d('email').checkValidity())) {
        emailEntered = false;
        d('email-num').innerHTML = 3;
        if (currentStatus > 0) {
            currentStatus -= 0.25;
        }
    } else {
        if (emailEntered === false && d('email').checkValidity()) {
            currentStatus += 0.25;
            emailEntered = true;
            d('email-num').innerHTML = checkAnimHtml;
            setTimeout(function () { d('email-num').innerHTML = '<i class="fas fa-check"></i>'; }, 2000);

        }

    }
    b(currentStatus);
});

d('first').addEventListener('focusout', function () {
    let e = d('first').value;
    if (e.length === 0 || (firstEntered && !d('first').checkValidity())) {
        d('first-num').innerHTML = 1;
        firstEntered = false;
        if (currentStatus > 0) {
            currentStatus -= 0.25;
        }
    } else {
        if (firstEntered === false && d('first').checkValidity()) {
            currentStatus += 0.25;
            firstEntered = true;
            d('first-num').innerHTML = checkAnimHtml;
            setTimeout(function () { d('first-num').innerHTML = '<i class="fas fa-check"></i>'; }, 2000);

        }

    }
    b(currentStatus);
});

d('last').addEventListener('focusout', function () {
    let e = d('last').value;
    if (e.length === 0 || (lastEntered && !d('last').checkValidity())) {
        d('last-num').innerHTML = 2;
        lastEntered = false;
        if (currentStatus > 0) {
            currentStatus -= 0.25;
        }
    } else {
        if (lastEntered === false && d('last').checkValidity()) {
            currentStatus += 0.25;
            lastEntered = true;
            d('last-num').innerHTML = checkAnimHtml;
            setTimeout(function () { d('last-num').innerHTML = '<i class="fas fa-check"></i>'; }, 2000);

        }

    }
    b(currentStatus);
});

d('mon').addEventListener('change', function () {
    if (radioEntered === false) {
        currentStatus += 0.25;
        radioEntered = true;
        d('radio-num').innerHTML = checkAnimHtml;
        setTimeout(function () { d('radio-num').innerHTML = '<i class="fas fa-check"></i>'; }, 2000);
    }


    b(currentStatus);
})

d('tue').addEventListener('change', function () {
    if (radioEntered === false) {
        currentStatus += 0.25;
        radioEntered = true;
        d('radio-num').innerHTML = checkAnimHtml;
        setTimeout(function () { d('radio-num').innerHTML = '<i class="fas fa-check"></i>'; }, 2000);
    }

    b(currentStatus);

})


