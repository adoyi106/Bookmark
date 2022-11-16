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

const featureEl = document.querySelectorAll('.feature');
const featurePlanEl = document.querySelectorAll('.feature-plan');

for (let i = 0; i < featureEl.length; i++)
  featureEl[i].addEventListener('click', function () {
    // console.log('button clicked');
    featureEl[i] = featurePlanEl[i];
    featurePlanEl[i].classList.remove('hidden');

    if (featureEl[i] !== featureEl[0]) {
      featurePlanEl[0].classList.add('hidden');
    }
    if (featureEl[i] !== featureEl[2]) {
      featurePlanEl[2].classList.add('hidden');
    }
    if (featureEl[i] !== featureEl[1]) {
      featurePlanEl[1].classList.add('hidden');
    }
    featurePlanEl[i].classList.remove('hiddent');
  });

//////////////////////////////////////////////////////////////////
//Making FAQ work

const faqs = document.querySelectorAll('.FQA-item ');
faqs.forEach(function (faq) {
  faq.addEventListener('click', function () {
    faq.classList.toggle('active');
  });
});
