import { Component } from  '@angular/core';
// import { details } from 'src/Info/info.component';
import { arr } from 'src/app/user';

@Component(
{
    selector: 'show-root',
    templateUrl :'./show.component.html',
    styleUrls :["./show.component.css"]
})

export class SHOWComponent
{
    details=arr;
    i : number = 0;
    showDeatils(){
        this.details= JSON.parse(JSON.stringify(arr));
    }

    doDelete(val:any)
    {
        alert(val);

    for (var i = this.details.length - 1; i >= 0; --i) {
        if (this.details[i].email == val) {
            this.details.splice(i,1);
        }
    }

    console.log(this.details);
    }

    flag:boolean=false;
    Data : any[] =[]
    selectedDeviceObj:any="default";
    onChange(value:any)
    {
        this.Data = this.details.filter((obj)=>{
            return obj.email==value;
        })
        this.flag =true;
        console.log(this.Data)
    }

}