import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    template: require('./app.html'),
    styles: [require('./app.less').toString()]
})
export class AppComponent {
    public title = 'app works!';
}
