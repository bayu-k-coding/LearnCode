function saklar() {
    
    let toggle1 = document.getElementById("default-toggle1");
    let toggle2 = document.getElementById("default-toggle2");
    let toggle3 = document.getElementById("default-toggle3");

    let lampu1 = document.getElementById("lampu1");
    let lampu2 = document.getElementById("lampu2");
    let lampu3 = document.getElementById("lampu3");
    
    if (toggle1.checked) {
        lampu1.src = "asets/images/on.gif";
    } else {
        lampu1.src = "asets/images/off.gif";
    }

    if (toggle2.checked) {
        lampu2.src = "asets/images/on.gif";
    } else {
        lampu2.src = "asets/images/off.gif";
    }

    if (toggle3.checked) {
        lampu3.src = "asets/images/on.gif";
    } else {
        lampu3.src = "asets/images/off.gif";
    }
}
    

//     if (params == "on1") {
//         lampu1.src = "asets/images/on.gif";
//     }
//     if (params == "off1") {
//         lampu1.src = "asets/images/off.gif";
//     }
//     if (params == "on2") {
//         lampu2.src = "asets/images/on.gif";
//     }
//     if (params == "off2") {
//         lampu2.src = "asets/images/off.gif";
//     }
//     if (params == "on3") {
//         lampu3.src = "asets/images/on.gif";
//     }
//     if (params == "off3") {
//         lampu3.src = "asets/images/off.gif";
//     }

//     return lampu1, lampu2, lampu3;
// }   