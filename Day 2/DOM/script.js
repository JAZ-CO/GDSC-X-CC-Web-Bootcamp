// Add functionality
document.getElementById("add").onclick = ()=>{
    value = parseInt(document.getElementById("counter").innerHTML);
    value++;
    document.getElementById("counter").innerHTML = value
}
// Subtract functionality
document.getElementById("sub").onclick = ()=>{
    value = parseInt(document.getElementById("counter").innerHTML);
    value >0 ? value--:value = 0;
    document.getElementById("counter").innerHTML = value
}
// Change functionality
document.getElementById("change").onclick = ()=>{
    value = window.prompt("Enter new image URL","")
}
// Form submit functionality
document.getElementById("form").addEventListener("submit",()=>
{
    name = document.getElementById("name").value
    level = document.getElementById("level").value
    phone = document.getElementById("phone").value
    id = document.getElementById("id").value
    alert(`
    ${name}
    ${level}
    ${phone}
    ${id}
    `)
})