import { Component } from './components';

export class Menu extends Component {
  constructor(selector: string, public options: MenuOptions) {
    super(selector);

    this.template = this.createTemplate();
    this.render();
  }

  createTemplate() {
    const links = this.options
      .map((option) => {
        `<ul class="characters-list row list-unstyled">

    </ul>`;
      })
      .join('');

    return `
    <ul>
      ${links}
    </ul>
`;
  }
}
