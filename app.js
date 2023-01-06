let arr = [
    {
        brand: "Samsung",
        model: "A30",
        price: "40000",
        camera: "40px",
        ram: "8gb",
        rom : "128gb"
    },
    {
        brand: "Samsung",
        model: "A10",
        price: "40000",
        camera: "40px",
        ram: "4gb",
        rom : "128gb"
    },
    {
        brand: "Samsung",
        model: "A20",
        price: "40000",
        camera: "40px",
        ram: "4gb",
        rom : "128gb"
    },
    {
        brand: "Vivo",
        model: "Y20",
        price: "20000",
        camera: "40px",
        ram: "2gb",
        rom : "32gb"
    },
    {
        brand: "Vivo",
        model: "Y11",
        price: "20000",
        camera: "40px",
        ram: "3gb",
        rom : "32gb"
    },
    {
        brand: "Vivo",
        model: "Y15",
        price: "30000",
        camera: "40px",
        ram: "4gb",
        rom : "64gb"
    },
    {
        brand: "Motorola",
        model: "123",
        price: "5000",
        camera: "2px",
        ram: "2gb",
        rom : "32gb"
    },
    {
        brand: "Iphone",
        model: "12",
        price: "300000",
        camera: "40px",
        ram: "8gb",
        rom : "128gb"
    },
    {
        brand: "Iphone",
        model: "13",
        price: "300000",
        camera: "40px",
        ram: "8gb",
        rom : "128gb"
    },
    {
        brand: "Iphone",
        model: "X",
        price: "300000",
        camera: "40px",
        ram: "8gb",
        rom : "128gb"
    },
]
let type = document.getElementById("ram")
let mobile = document.getElementById("mobile")
let dropdown = document.getElementById("dropdown")
let category;
function init() {
    category = Object.keys(arr[0])
    // console.log(category)
    // for(i=0; i < category.length;i++){
    //     dropdown.innerHTML += `<option value= "brandD">${category[i]}</option>` 
    // }
    category.forEach((x)=>{ dropdown.innerHTML += `<option value= "${x}">${x}</option>`} )
}
init()
let userSelect;
function selected(dp){
    userSelect = dp.value
    console.log(userSelect)
    type.value = ""
    
}
function abc(){
    let obj = arr.filter((x)=>{

    if(userSelect == "brand"){
   return x.brand.toUpperCase() == type.value.toUpperCase()
} 
if(userSelect == "model"){
   return x.model.toUpperCase() == type.value.toUpperCase()
} 
 
if(userSelect == "camera"){
    return x.camera.toUpperCase() == type.value.toUpperCase()
} 
 
if(userSelect == "price"){
   return x.price.toUpperCase() == type.value.toUpperCase()
} 
 
if(userSelect == "ram"){
   return   x.ram.toUpperCase() == type.value.toUpperCase()
} 
if(userSelect == "rom"){
   return x.rom.toUpperCase() == type.value.toUpperCase()
} 
        // if (x.ram.toUpperCase() == type.value.toUpperCase() ||x.brand.toUpperCase() == type.value.toUpperCase() || x.price.toUpperCase() == type.value.toUpperCase() || x.model.toUpperCase() == type.value.toUpperCase()|| x.camera.toUpperCase() == type.value.toUpperCase()){
        //     return x
        // }
    })
    console.log(obj)
    mobile.innerHTML =""
    obj.forEach((x)=>{
        mobile.innerHTML += 
        `<ul>
        <li> Company:  ${x.brand.toUpperCase()} </li>
        <li> Model: ${x.model.toUpperCase()} </li>
        <li> Camera: ${x.camera.toUpperCase()} </li>
        <li> Price: ${x.price.toUpperCase()} </li>
        <li> RAM: ${x.ram.toUpperCase()} </li>
        <li> ROM: ${x.rom.toUpperCase()} </li>
        </ul>`
    })
}