import {Component} from '@angular/core'

@Component({
    selector:'app-dashboard',
    template:`<p>This is dashboard</p>
        loadState = {{loadState}}
        <div><button (click)='onClick()'>Click Me</button></div>
        <input type="text" [(ngModel)]="loadState">
    `
})
export class DashboardComponent{
    loadState = 'loading'

    onClick(){
        this.loadState='Finished'
    }
}