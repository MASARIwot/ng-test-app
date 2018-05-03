import { Component, Input } from '@angular/core'

@Component({
  selector: 'tab',
  template: `<ng-content *ngIf="active"></ng-content>`
})
export class TabComponent {
  @Input('tabTitle') title: string
  @Input() active = false
  @Input() tabLink: string
  
  tabLinkClass() {
    return `nav-link ${this.active ? 'active' : ''}`
  }
}