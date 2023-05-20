const input_box = document.getElementById('input_box');
const output_box = document.getElementById('output_box');
const KM_TO_M = 1.609344; // km to m

function m_to_km() {
    const km = parseFloat(input_box.value);
    const m = km * KM_TO_M;
    if (input_box.value != '') {
        output_box.value = input_box.value + " miles = " + m.toFixed(5) + " kilometres";
    } else {
        output_box.value = '';
    }
}

function km_to_m() {
    const km = parseFloat(input_box.value);
    const m = km / KM_TO_M;
    if (input_box.value != '') {
        output_box.value = input_box.value + " kilometres = " + m.toFixed(5) + " miles";
    } else {
        output_box.value = '';
    }
}

function clear_boxes() {
    input_box.value = '';
    output_box.value = '';
}

function help() {
    alert("Do not include 'km', 'm' or any non-digits in the input box.");
}