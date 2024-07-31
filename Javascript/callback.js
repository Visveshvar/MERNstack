function formValidation(fvc){
    console.log("Form validating");
    setTimeout(()=>{
        fvc();
    },5000)
}
function formValidationCompleted(){
    console.log("Form validation completed");
}
formValidation(formValidationCompleted);