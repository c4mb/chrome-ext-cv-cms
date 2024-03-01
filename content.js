// Part 1: Style change for alphafirstaid.com.au
const alphaFirstAidLink = document.querySelector('.cv-cms-url a[href*="www.alphafirstaid.com.au"]');
if (alphaFirstAidLink) {
  const cvCmsHeader = document.getElementById('cv-cms-header');
  if (cvCmsHeader) {
    cvCmsHeader.style.background = '#009490';
  }
}

// Part 2: Style change for alphasport.com.au
const alphaSportLink = document.querySelector('.cv-cms-url a[href*="www.alphasport.com.au"]');
if (alphaSportLink) {
  const cvCmsHeader = document.getElementById('cv-cms-header');
  if (cvCmsHeader) {
    cvCmsHeader.style.background = '#0071CE';
  }
}

// Part 3: Hide "Add New Product" button
if (window.location.href === "https://cms.commercevision.biz/Catalogues/ProductMaintenance/Index") {
  const addNewProductButton = document.querySelector('.btn.green.cv-ico-general-add-to-list');
  if (addNewProductButton) {
    addNewProductButton.style.display = 'none';
  }
}
