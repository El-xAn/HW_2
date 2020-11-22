function insert(num) {
    document.form.textview.value =
    document.form.textview.value + num;
}
function cl() {
    document.form.textview.value = '';
}
function del() {
    let data = document.form.textview.value;
    document.form.textview.value = data.substring(0, data.length - 1);
}
function equal() {
    let data = document.form.textview.value;
    if(data) {
        document.form.textview.value = eval(data);
    }
}
function sqrt() {
    let data = document.form.textview.value;
        if(data) {
            document.form.textview.value = math.Sqrt(data);
        }
}
function op() {
    let data = document.form.textview.value;

    if(typeof data[0] !== 'number') {
        document.form.textview.value = '';
    }
}