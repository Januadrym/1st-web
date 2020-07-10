
var inputs = document.forms["form_input"].getElementsByTagName('input');
var run_onchange = false;

function valid_input() {
    var errors = false;
    var valid_mail = /^[A-Za-z0-9]+([_\.\-]?[A-Za-z0-9])*@[A-Za-z0-9]+([\.\-]?[A-Za-z0-9]+)*(\.[A-Za-z]+)+$/;

    for (var i = 0; i < inputs.length; i++) {
        var value = inputs[i].value;
        var id = inputs[i].getAttribute('id');

        var span = document.createElement('span');
        var p = inputs[i].parentNode;
        if (p.lastChild.nodeName == 'SPAN') { p.removeChild(p.lastChild); }

        if (value == '') {
            span.innerHTML = "Empty";
        } else {
            if (id == 'email') {
                if (valid_mail.test(value) == false) { span.innerHTML = "Invalid Email"; }
                var email_alert = value;
            }
            if (id == 'name') { var name_alert = value; }
        }

        if (span.innerHTML != '') {
            inputs[i].parentNode.appendChild(span);
            errors = true;
            run_onchange = true;
            inputs[i].style.border = '1px solid #c6807b';
        }
    } //end for

    console.log("ngoài for" + $("#message").val())
    if (errors == false) {
        alert('I got your message!'
            + '\n\n'
            + 'Name:  ' + name_alert + '\n'
            + 'Email:  ' + email_alert + '\n'
            + 'Message:  ' + $("#message").val());
    }
    return !errors;
} // end function

var submitForm = document.getElementById('submit');
submitForm.onclick = function () {
    return valid_input();
}

for (var i = 0; i < inputs.length; i++) {
    var id = inputs[i].getAttribute('id');
    inputs[i].onchange = function () {
        if (run_onchange == true) {
            this.style.border = '1px solid #999';
            this.style.background = '#fff';
            valid_input();
        }
    }
}

