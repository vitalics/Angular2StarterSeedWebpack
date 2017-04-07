import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-hello-world',
    template: require('./hello-world.html'),
    styles: [require('./hello-world.less').toString()]
})
export class HelloWorldComponent implements OnInit {
    public constructor() { }

    public ngOnInit() {
    }
}
