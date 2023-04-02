import { renderListWithTemplate } from "./utils.mjs";


function pictureTemplate(picture) {

  return `
  <article class="pictureArticle">
  <div class="pictureInfo">
  <h3> ${picture.title}</h3>
  <img src="${picture.url}" alt="image of ${picture.title}">
  <p>Description: ${picture.explanation}</p>
  </div>
  </article>
        `;

}

export default class Picture {
  constructor(dataSource, listElement) {

    this.dataSource = dataSource;
    this.listElement = listElement;
  }
  async init() {
    const list = await this.dataSource.apodData(this.pictureId);
    this.renderList(list);

  }
  renderList(list) {
    renderListWithTemplate(pictureTemplate, this.listElement, list);
  }
}