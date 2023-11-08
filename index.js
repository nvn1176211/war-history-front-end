/**
 * @param  String $name
 */
window.getCookie = (name) => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
}

/**
 * @param  String $formId
 * @param  String $generalMessage
 * @param Object $errors
 */
window.ajaxFormValidateProcessing = (formId, generalMessage, errors) => {
    alert(generalMessage);
    let form = $(`#${formId}`);
    form.find('input').removeClass('is-invalid');
    form.find('div[id$="-err-msg"]').remove();
    for(key in errors){
        let input = $(`#${key}`);
        input.addClass('is-invalid');
        input.parent().append(`<div class="invalid-feedback" id="${key}-err-msg">${errors[key]}</div>`);
    }
}