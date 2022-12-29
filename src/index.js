// parent class
class API { 
    
    constructor(url) {
        this.url = url;
        this.method="GET";
       
    }
    
    isSecure(){
        if(this.url==="https"){
            console.log("true");
            return;
        }
        else{
            console.log("false");
            return;
        }
    }
    updateUrl(url){
        this.url=url;
        console.log(`${this.url}`)
    }
        // let u=console.log(`${this.url}`);
        // const m=console.log(`${this.method}`)
}
let s1= new API('https://dabkadja');
console.log(s1.method);

console.log(s1.isSecure())
s1.updateUrl("ednefjefherf");
console.log(s1.url);


module.exports = { API }
