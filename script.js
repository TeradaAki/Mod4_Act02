function condition(){
    let valueA = prompt('Enter Value A', '');
    let valueB = prompt('Enter Value B', '');
    if(valueA > valueB){
        alert(`${valueA} is higher than ${valueB} meaning value A is greater`);
    }
    else if(valueA < valueB){ 
        alert(`${valueB} is higher than ${valueA} meaning value B is greater`);
    }
    else if(valueA == valueB){
        alert(`Both Values ${valueA} and ${valueB} are equal`)
    }
    else{
        alert("Value is not numeric")
    }
}