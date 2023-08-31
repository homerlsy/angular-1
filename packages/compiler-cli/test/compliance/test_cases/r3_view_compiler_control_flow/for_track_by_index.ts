import {Component} from '@angular/core';

@Component({
  template: `
    <div>
      {{message}}
      {#for item of items; track $index}{{item.name}}{/for}
    </div>
  `,
})
export class MyApp {
  message = 'hello';
  items = [{name: 'one'}, {name: 'two'}, {name: 'three'}];
}