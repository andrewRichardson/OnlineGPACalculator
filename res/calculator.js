var numberOfClasses = 1;

function addClasses() {
    var html = document.getElementById('table-e').getElementsByTagName('tbody')[0].innerHTML;
    var template = document.getElementById("template").getElementsByTagName('table')[0].getElementsByTagName('tbody')[0].innerHTML;
    numberOfClasses = parseInt(document.getElementById("numClasses").value);
    for(i = 0; i < numberOfClasses-1; i++){
        html += template;
    }
    document.getElementById('table-e').getElementsByTagName('tbody')[0].innerHTML = html;
}

function calculateGPA(){

}