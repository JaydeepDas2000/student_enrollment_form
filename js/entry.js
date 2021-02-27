
function onFormSubmit() {

    //validation
    var errormessage = "";

    if (document.getElementById('name').value == "") {
        errormessage += "Enter your Name \n";
    }
    if (document.getElementById('email').value == "") {
        errormessage += "Enter your Email \n";
    }
    if (document.getElementById('website').value == "") {
        errormessage += "Enter your Website \n";
    }
    if (document.getElementById('img').value == "") {
        errormessage += "Enter your Image Link \n";
    }
    if (errormessage != "") {
        alert(errormessage);
        return false;
    }

    //Enrolled
    var formData = readFormData();
    insertNewRecord(formData);
}

function readFormData() {
    var formData = {};
    var enrollmentForm = document.getElementById("enrollmentForm")
    formData["name"] = enrollmentForm.elements['name'].value
    formData["email"] = enrollmentForm.elements['email'].value
    formData["website"] = enrollmentForm.elements['website'].value
    formData["img"] = enrollmentForm.elements['img'].value
    formData['gender'] = enrollmentForm.elements['gender'].value
    formData['skills'] = Array.from(
        enrollmentForm
            .querySelectorAll('input[type="checkbox"]')
    )
        .filter((c) => c.checked)
        .map((checkbox) => checkbox.value)
        .join(', ')
    return formData;
}


function makeTrTd1(s) {
    var tr = document.createElement("tr")
    tr.innerHTML = '<td><div>' + s + '</div></td>'
    return tr
}

function insertNewRecord(data) {
    console.log(data)
    var placeholder = document.getElementById("dtl-placeholder")

    var tr = document.createElement("tr")
    var td1 = document.createElement("td")

    var div1 = document.createElement("div")
    div1.innerHTML = '<strong>' + data.name + '</strong></br>'
    td1.appendChild(div1)

    var div2 = document.createElement("div")
    div2.innerHTML = data.gender
    td1.appendChild(div2)

    var div3 = document.createElement("div")
    div3.innerHTML = data.email
    td1.appendChild(div3)

    var div4 = document.createElement("div")
    div4.innerHTML = '<a href="' + data.website + '">Website Link</a>'
    td1.appendChild(div4)

    var div5 = document.createElement("div")
    div5.innerHTML = data.skills
    td1.appendChild(div5)

    tr.appendChild(td1)

    td2 = document.createElement("td")
    td2.innerHTML = '<center><img src="' + data.img + '" ' + ' style="max-width: 128px; max-height: 128px"' + ' /></center>'

    tr.appendChild(td2)
    placeholder.appendChild(tr)
}

