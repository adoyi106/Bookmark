///////////////////////////////////////////////////////////
//Make mobile Navigation work

const btnNavEl = document.querySelector('.btn-mobile-nav');
const headerEl = document.querySelector('.header');
btnNavEl.addEventListener('click', function () {
  headerEl.classList.toggle('nav-open');
});

///////////////////////////////////////////////////////////
//making links work
const allLinks = document.querySelectorAll('a:link');
// console.log(allLinks);

allLinks.forEach(function (link) {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const href = link.getAttribute('href');
    console.log(href);

    ///link "#" to lead back to home page
    if (href === '#')
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });

    // scroll into other links
    if (href !== '#' && href.startsWith('#')) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: 'smooth' });
    }

    if (link.classList.contains('main-nav-link')) {
      headerEl.classList.toggle('nav-open');
    }
  });
});

///////////////////////////////////////////////////////////
//Sticky Navigation

const sectionHeroEl = document.querySelector('.section-hero');

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];

    if (ent.isIntersecting === false) {
      console.log(ent);
      document.body.classList.add('sticky');
    }

    if (ent.isIntersecting === true) {
      document.body.classList.remove('sticky');
    }
  },
  {
    //observe in the viewport
    root: null,
    threshold: 0,
    rootMargin: '-80px',
  }
);
obs.observe(sectionHeroEl);

////////////////////////////////////////////
//Making the feature link work

const bookMarkingEl = document.querySelector('.bookmarking-box');
const searchingEl = document.querySelector('.searching-box');
const sharingEl = document.querySelector('.sharing-box');

bookMarkingEl.addEventListener('click', function () {
  document.querySelector('.bookmarking').style.display = 'block';
  document.querySelector('.searching').style.display = 'none';
  document.querySelector('.sharing').style.display = 'none';
});

searchingEl.addEventListener('click', function () {
  document.querySelector('.bookmarking').style.display = 'none';
  document.querySelector('.searching').style.display = 'block';
  document.querySelector('.sharing').style.display = 'none';
});

sharingEl.addEventListener('click', function () {
  document.querySelector('.bookmarking').style.display = 'none';
  document.querySelector('.searching').style.display = 'none';
  document.querySelector('.sharing').style.display = 'block';
});

// const featureEl = document.querySelectorAll('.feature');
// const featurePlanEl = document.querySelectorAll('.feature-plan');

// // for (let i = o; i < featureEl.length; i++)
// //   featureEl[i].addEventListener('click', function () {
// //     for (let i = 0; i < featurePlanEl.length; i++)
// //       featurePlanEl[i].classList.toggle('activet');
// //     // featurePlanEl[i].classList.remove('hiddent');
// //   });

// featureEl.forEach(function (featurePlanEl) {
//   featureEl.addEventListener('click', function () {
//     featurePlanEl.classList.toggle('active');
//   });
// });

//////////////////////////////////////////////////////////////////
//Making FAQ work

const faqs = document.querySelectorAll('.FQA-item ');
faqs.forEach(function (faq) {
  faq.addEventListener('click', function () {
    faq.classList.toggle('active');
  });
});
