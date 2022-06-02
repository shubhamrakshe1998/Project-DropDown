
/*document.getElementById("demo").innerHTML = x.options[i].text;*/


var laptop = function(name,col,mod,proc,ram,hdd,display){
    this.name = name
    this.color = col,
    this.model = mod,
    this.processor = proc,
    this.ram = ram,
    this.harddisk = hdd,
    this.display = display

    this.details = function(){
        return this.color+this.model;
    }

}
//defiing all company models here
var apl = new laptop('apple','silver','21 Pro','Apple M1','64GB','1024GB','4k Ultra')
var del = new laptop('Dell','black','vestro','Intel i7 11-gen','8GB','1024GB','4k Ultra')
var hp = new laptop('HP','light Blue','pavlian','AMD Ryzen 3500','16GB','4k Ultra')
var len = new laptop('Lenovo','orange','yoga','Intel i9 11-gen','8GB','Full HD')

function select_fun(){
//js is selecting js
var x = document.getElementById("laptops");

var i = x.selectedIndex;
console.log(x.options[i].text)

if(x.options[i].text == 'Select a Laptop'){

    document.getElementById('show_content').innerHTML = 'Please Select From DropDown'


}
if(x.options[i].text == 'Apple'){

    document.getElementById('show_content').innerHTML = 'Name : '+apl.name+'<br>'+
                                                        'Color : '+apl.color+'<br>'+
                                                        'Model : '+apl.model+'<br>'+
                                                        'Processor : '+apl.processor+'<br>'+
                                                        'RAM : '+apl.ram+'<br>'+
                                                        'SSD : '+apl.harddisk+'<br>'+
                                                        'Display : '+apl.display+'<br>'


}
if(x.options[i].text == 'Dell'){

    document.getElementById('show_content').innerHTML = 'Name : '+del.name+'<br>'+
                                                        'Color : '+del.color+'<br>'+
                                                        'Model : '+del.model+'<br>'+
                                                        'Processor : '+del.processor+'<br>'+
                                                        'RAM : '+del.ram+'<br>'+
                                                        'SSD : '+del.harddisk+'<br>'+
                                                        'Display : '+del.display+'<br>'


}
if(x.options[i].text == 'Lenovo'){

    document.getElementById('show_content').innerHTML = 'Name : '+len.name+'<br>'+
                                                        'Color : '+len.color+'<br>'+
                                                        'Model : '+len.model+'<br>'+
                                                        'Processor : '+len.processor+'<br>'+
                                                        'RAM : '+len.ram+'<br>'+
                                                        'SSD : '+len.harddisk+'<br>'+
                                                        'Display : '+len.display+'<br>'


}
if(x.options[i].text == 'Hp'){

    document.getElementById('show_content').innerHTML = 'Name : '+hp.name+'<br>'+
                                                        'Color : '+hp.color+'<br>'+
                                                        'Model : '+hp.model+'<br>'+
                                                        'Processor : '+hp.processor+'<br>'+
                                                        'RAM : '+hp.ram+'<br>'+
                                                        'SSD : '+hp.harddisk+'<br>'+
                                                        'Display : '+hp.display+'<br>'


}








}

