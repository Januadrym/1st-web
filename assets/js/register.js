
var inputs = document.forms["form_register"].getElementsByTagName('input');
var run_onchange = false;

function valid_register() {
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
                var email = value;
            }
            if (id == 'password') {
                if (value.length < 6) { span.innerHTML = "At least 6 characters"; }
                var pass = value;
            }
            if (id == 'phonenumb') {
                if (isNaN(value) == true)
                { span.innerHTML = "Must be number"; }
                var phoneN = value;
            }
            if (id == 'name') { var name_alert = value; }
            if (id == 'accountname') { var accountname_alert = value; }
        }

        if (span.innerHTML != '') {
            inputs[i].parentNode.appendChild(span);
            errors = true;
            run_onchange = true;
            inputs[i].style.border = '1px solid #c6807b';
        }
    } //end for

    if (errors == false) {
        alert('REGISTER SUCCESSFUL!'
            + '\n\n'
            + 'Name:  ' + name_alert + '\n'
            + 'Email:  ' + email + '\n'
            + 'Account name:  ' + accountname_alert + '\n'
            + 'Password:  ' + pass + '\n'
            + 'Phone number:  ' + phoneN);
    }
    return !errors;
} // end function

var register = document.getElementById('submit');
register.onclick = function () {
    return valid_register();
}

for (var i = 0; i < inputs.length; i++) {
    var id = inputs[i].getAttribute('id');
    inputs[i].onchange = function () {
        if (run_onchange == true) {
            this.style.border = '1px solid #999';
            this.style.background = '#fff';
            valid_register();
        }
    }
}

