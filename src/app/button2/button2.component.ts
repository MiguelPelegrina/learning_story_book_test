import { Component, EventEmitter, Input, Output } from '@angular/core';

const getStyles = (...args: string []) =>
  ["button", ...args].filter(Boolean)

@Component({
  selector: 'app-button2',
  templateUrl: './button2.component.html',
  styleUrls: ['./button2.component.scss']
})
export class Button2Component {
  // Every modifiable property should also be decorated as @Input and established as argument
  // in a story

  /**
   * Allows to change the name of the label
   */
  @Input()
  label: string = '';

  /**
   * Allows to change the background color with a color chooser
   */
  @Input()
  backgroundColor?: string;

  /**
   * Allows to change
   */
  @Input()
  type: "primary" | "secondary" | "tertiary" = "primary";

  public get classes(): string[] {
    return getStyles(this.type);
  }

  /**
   * Optional click handler
   */
  @Output()
  onClick = new EventEmitter<Event>();
}
