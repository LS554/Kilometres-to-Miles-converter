const input_box = document.getElementById('input_box');
const output_box = document.getElementById('output_box');
const KM_TO_M = 1.609344; // km to m

function km_to_m() {
    const km = parseFloat(input_box.value);
    const m = km * KM_TO_M;
    output_box.value = "KM = " + m.toFixed(5);
}

function m_to_km() {
    const km = parseFloat(input_box.value);
    const m = km / KM_TO_M;
    output_box.value = "M = " + m.toFixed(5);
}

function clear_boxes() {
    input_box.value = '';
    output_box.value = '';
}