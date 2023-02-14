import { Component } from "@angular/core";
import { User } from "src/app/user";
import { arr } from "src/app/user";
@Component(
{
   selector :"info-root",
   templateUrl : "./info.component.html",
   styleUrls : ["./info.component.css"]
})

export class INFOComponent 
{


   technology = ["Angular" , "React" , "IOS", "Nodejs" ];

   userModel = new User('','',91,'default');
   array :any[]=[]
   a : any;
   techhasError = true;
   showData()
   {
      alert("Hey");
      alert(JSON.stringify(this.userModel));
      console.log(this.userModel);
      arr.push(JSON.parse( JSON.stringify(this.userModel)));
     console.log(arr);
     alert(JSON.stringify(arr));
      //this.fill()
   }


   // fill()
   // {
   //   for (let a in this.key )
   //   {
   //    arr.push(this.key[a]);
   //   }
   // }
   validateSelect(value:any)
   {
     if(value =='default')
     {
     this.techhasError = true;
     }

     else
     {
      this.techhasError = false;
     }
   }
}



// interface User {

//    constructor(
//       uname : string,
//        email : string ,
//        number : any,
//       technology : string,
//    ) : any

// }