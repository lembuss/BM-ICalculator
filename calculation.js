
function calculateBMI(){
    var w = document.getElementById("weight").value;
    var h = document.getElementById("height").value;

    if (w == "" || h == ""){
        alert("Please fill out all the required data");
        return false;
    }

    var bmi = w / (h*h);
    document.getElementById("index").innerHTML = "Your BMI is " + bmi.toFixed(2);

    if (bmi<18.5)
        document.getElementById("measure").innerHTML = "You are underweight";
    else if (bmi<24.9)
        document.getElementById("measure").innerHTML = "You have normal weight";
    else if (bmi<29.9)
        document.getElementById("measure").innerHTML = "You are overweight";
    else if (bmi>30)
        document.getElementById("measure").innerHTML = "You are obese";
    else
        document.getElementById("measure").innerHTML = "Error with scale";
    // code block

}

/*These functions are for further development by adding a conversion option to the script

        function massConvert(){
            var m_conv = w/2.205;
            document.getElementById("weight").value = m_conv;
        }
        function heightConvert(){
            var h_conv = w/39.37;
            document.getElementById("height").value = h_conv;
        }

 */

