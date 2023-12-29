const MAX_SCORE_RESULT = 100;

function createDivElement() {
  const div = document.createElement('div');
  return div;
}

function createSpanElement() {
  const span = document.createElement('span');
  return span;
}

function createListItemElement(category) {
  const liClassName = `${category.toLowerCase()}-summary`;

  const li = document.createElement('li');
  li.classList.add(liClassName);

  return li;
}

function createImageElement(category, icon) {
  const imgAlt = `Icon ${category.toLowerCase()}`;

  const img = document.createElement('img');
  img.alt = imgAlt;
  img.src = icon;

  return img;
}

function createSummaryItem(summaryItem) {
  const { category, score, icon } = summaryItem;

  const li = createListItemElement(category);

  const summaryCategoryDiv = createDivElement();
  const categoryImg = createImageElement(category, icon);
  const categorySpan = createSpanElement();
  categorySpan.textContent = category;
  summaryCategoryDiv.appendChild(categoryImg);
  summaryCategoryDiv.appendChild(categorySpan);

  const summaryResultDiv = createDivElement();
  const scoreResultSpan = createSpanElement();
  scoreResultSpan.textContent = score;
  const separatorSpan = createSpanElement();
  separatorSpan.classList.add('separator');
  separatorSpan.textContent = '/';
  const maxScoreResultSpan = createSpanElement();
  maxScoreResultSpan.textContent = MAX_SCORE_RESULT;
  summaryResultDiv.appendChild(scoreResultSpan);
  summaryResultDiv.appendChild(separatorSpan);
  summaryResultDiv.appendChild(maxScoreResultSpan);

  li.appendChild(summaryCategoryDiv);
  li.appendChild(summaryResultDiv);

  return li;
}

function createSummary(data) {
  const sumaryList = document.querySelector('.summary ul');

  for (const item of data) {
    const summaryItem = createSummaryItem(item);
    sumaryList.appendChild(summaryItem);
  }
}

function retrieveData() {
  fetch('data.json')
    .then((response) => response.json())
    .then((data) => {
      createSummary(data);
    })
    .catch((error) => console.error('Erro ao carregar o JSON:', error));
}

document.addEventListener('DOMContentLoaded', retrieveData);
