import { Meta, Story } from "@storybook/angular";
import { Button2Component } from "./button2.component";
import { fireEvent } from "@storybook/testing-library";

// Default, same for every story of this component
export default {
  title: "Components/Button",
  // Component
  component: Button2Component,
  // Enables auto-generated documentation for the componente story
  tags: ['autodocs'],
  // Arguments of the component that can be changed
  args: {
    label: "Button"
  },
  argTypes: {
    type: {
      options: ['primary', 'secondary'],
      control: { type: 'radio' },
    }
  }
} as Meta;

// Every argument is a variable that can be changed in controls --> must also be a property
// of the component, marked with an @Input decorator
const template: Story<Button2Component> = (args: Button2Component) => ({
  props: args,
});

export const Primary = template.bind({});

export const Secondary = template.bind({});
Secondary.args = {
  // Allows to change a color with a color chooser
  backgroundColor: '#ff0',
  //
  type: "secondary",
}
