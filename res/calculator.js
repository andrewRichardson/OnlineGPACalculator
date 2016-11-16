var numberOfClasses = 1;

function addClasses() {
    var html = "";
    var template = document.getElementById('template').getElementsByTagName('table')[0].getElementsByTagName('tbody')[0].innerHTML;
    var template2 = document.getElementById('template2').getElementsByTagName('table')[0].getElementsByTagName('tbody')[0].innerHTML;
    numberOfClasses = parseInt(document.getElementById('numClasses').value);
    html += template2;
    for(var i = 0; i < numberOfClasses; i++){
        html += template;
    }
    document.getElementById('table-content').innerHTML = "";
    document.getElementById('table-content').innerHTML = html;
}

function calculateGPA(){
    var gpa = 0.0;
    var totalGPA = 0.0;
    var totalHours = 0;
    var currentHours = 0;
    var currentGPA = 0.0;
    for(i = 0; i < numberOfClasses; i++){
        currentGPA =  4-parseInt(document.getElementById('table-e').getElementsByTagName('tbody')[0].getElementsByTagName('select')[i*2].selectedIndex);
        currentHours = parseInt(document.getElementById('table-e').getElementsByTagName('tbody')[0].getElementsByTagName('select')[i*2+1].value);
        totalHours += currentHours;
        totalGPA += currentHours * currentGPA;
    }
    gpa = totalGPA / totalHours;
    var s_gpa = (Math.round(gpa*100)/100) + "";
    if(s_gpa.length < 2){
        s_gpa += ".00";
    }else if(s_gpa.length < 4){
        s_gpa += "0"
    }
    document.getElementById('gpa-result').innerText = "GPA: " + s_gpa;
}