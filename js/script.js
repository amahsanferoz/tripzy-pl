// script.js -- language switcher + simple contact demo + little UI helpers

document.addEventListener('DOMContentLoaded', function(){

  // set year in footer
  document.getElementById('year').textContent = new Date().getFullYear();

  // Simple multilingual content object
  const content = {
    en: {
      langLabel: 'EN', langFlag: '🇬🇧',
      hero_title: 'Trusted travel visas made simple',
      hero_sub: 'Tripzy helps travelers secure tourist visas quickly with expert documentation and friendly support — stress-free travel planning.',
      hero_cta: 'Get my visa',
      hero_cta2: 'View packages',
      hero_bullet1: 'Personalized document check',
      hero_bullet2: 'Fast appointment booking',
      hero_bullet3: 'Multilingual support',
      video_title: 'Find answers in our quick guide',
      video_sub: 'Watch our short walkthrough showing how Tripzy prepares your visa documents.',
      services_title: 'Our Packages',
      services_sub: 'Choose the plan that suits your trip — all packages include expert document review.',
      how_title: 'How Tripzy handles your visa',
      testi_title: 'Client stories',
      testi_sub: 'Hear how Tripzy helped travelers secure their visas and travel with confidence.',
      contact_title: 'Get a free consultation',
      contact_sub: 'Send us your details and we will get back with next steps.',
      form_name: 'Full name',
      form_email: 'Email address',
      form_message: 'Message',
      form_send: 'Send Request',
      countries_title: 'We help with visas for',
      countries_sub: 'Popular destinations we process tourist visas for.',
      faq_title: 'Frequently Asked Questions',
      nav_services: 'Services',
      nav_how: 'How it works',
      nav_countries: 'Countries',
      nav_faq: 'FAQ',
      nav_contact: 'Contact'
    },

    pl: {
      langLabel: 'PL', langFlag: '🇵🇱',
      hero_title: 'Zaufane wizy turystyczne w prosty sposób',
      hero_sub: 'Tripzy pomaga podróżnym szybko uzyskać wizy turystyczne dzięki fachowej weryfikacji dokumentów i wsparciu.',
      hero_cta: 'Zdobądź wizę',
      hero_cta2: 'Zobacz pakiety',
      hero_bullet1: 'Indywidualna kontrola dokumentów',
      hero_bullet2: 'Szybkie umawianie terminów',
      hero_bullet3: 'Wsparcie w kilku językach',
      video_title: 'Znajdź odpowiedzi w naszym przewodniku',
      video_sub: 'Obejrzyj krótkie wideo jak Tripzy przygotowuje dokumenty wizowe.',
      services_title: 'Nasze pakiety',
      services_sub: 'Wybierz plan dopasowany do podróży — wszystkie pakiety zawierają przegląd dokumentów.',
      how_title: 'Jak Tripzy obsługuje wizę',
      testi_title: 'Opinie klientów',
      testi_sub: 'Posłuchaj, jak Tripzy pomógł podróżnym uzyskać wizy.',
      contact_title: 'Bezpłatna konsultacja',
      contact_sub: 'Prześlij dane, skontaktujemy się z informacją o następnych krokach.',
      form_name: 'Imię i nazwisko',
      form_email: 'Adres e-mail',
      form_message: 'Wiadomość',
      form_send: 'Wyślij prośbę',
      countries_title: 'Pomagamy w wizach do',
      countries_sub: 'Popularne destynacje, dla których obsługujemy wizy.',
      faq_title: 'Najczęściej zadawane pytania',
      nav_services: 'Usługi',
      nav_how: 'Jak to działa',
      nav_countries: 'Kraje',
      nav_faq: 'FAQ',
      nav_contact: 'Kontakt'
    },

    bn: {
      langLabel: 'BN', langFlag: '🇧🇩',
      hero_title: 'ভ্রমণ ভিসা সহজ ও নির্ভরযোগ্য',
      hero_sub: 'Tripzy দ্রুত ও নিরাপদভাবে পর্যটক ভিসা পেতে সাহায্য করে — কাগজপত্র যাচাই ও পূর্ণ সহায়তা।',
      hero_cta: 'আমার ভিসা নিন',
      hero_cta2: 'প্যাকেজ দেখুন',
      hero_bullet1: 'নথি যাচাইকরণ',
      hero_bullet2: 'তারিখসহ দ্রুত বুকিং',
      hero_bullet3: 'বহুভাষিক সমর্থন',
      video_title: 'দ্রুত গাইডে উত্তর পান',
      video_sub: 'Tripzy কীভাবে আপনার নথি প্রস্তুত করে তা দেখুন।',
      services_title: 'আমাদের প্যাকেজসমূহ',
      services_sub: 'আপনার যাত্রার উপযুক্ত প্ল্যান বেছে নিন — প্রতিটি প্যাকেজে নথি পর্যালোচনা অন্তর্ভুক্ত।',
      how_title: 'Tripzy কীভাবে আপনার ভিসা পরিচালনা করে',
      testi_title: 'ক্লায়েন্ট কাহিনী',
      testi_sub: 'ক্লায়েন্টরা কিভাবে ভিসা পেয়েছে তা শুনুন।',
      contact_title: 'বিনামূল্যে পরামর্শ নিন',
      contact_sub: 'তথ্য পাঠান — আমরা পরবর্তী পদক্ষেপ জানাব।',
      form_name: 'পূর্ণ নাম',
      form_email: 'ইমেইল ঠিকানা',
      form_message: 'বার্তা',
      form_send: 'রিকোয়েস্ট পাঠান',
      countries_title: 'আমরা যেসব দেশের জন্য সহায়তা করি',
      countries_sub: 'জনপ্রিয় গন্তব্যসমূহ যেগুলোর জন্য আমরা ভিসা প্রক্রিয়া করি।',
      faq_title: 'প্রায়শই জিজ্ঞাসিত প্রশ্ন',
      nav_services: 'সেবা',
      nav_how: 'কিভাবে',
      nav_countries: 'দেশসমূহ',
      nav_faq: 'প্রশ্ন',
      nav_contact: 'যোগাযোগ'
    }
  };

  // function to apply language content to elements with data-i18n or data-key
  function applyLanguage(lang){
    document.querySelectorAll('[data-i18n]').forEach(el=>{
      const key = el.getAttribute('data-i18n');
      if(content[lang] && content[lang][key]) el.textContent = content[lang][key];
    });

    // nav items
    document.querySelectorAll('[data-key]').forEach(el=>{
      const k = el.getAttribute('data-key');
      if(content[lang] && content[lang][k]) el.textContent = content[lang][k];
    });

    // update lang label
    const lbl = document.getElementById('lang-label');
    const flag = document.getElementById('lang-flag');
    if(lbl) lbl.textContent = content[lang].langLabel || lang.toUpperCase();
    if(flag) flag.textContent = content[lang].langFlag || '🏳️';
  }

  // init default language
  let currentLang = localStorage.getItem('tripzy_lang') || 'en';
  applyLanguage(currentLang);

  // language switcher
  document.querySelectorAll('.lang-switch').forEach(btn=>{
    btn.addEventListener('click', function(e){
      e.preventDefault();
      const lang = this.dataset.lang;
      localStorage.setItem('tripzy_lang', lang);
      applyLanguage(lang);
    });
  });

  // contact form submit demo (not sending server-side)
  const contactForm = document.getElementById('contactForm');
  const formAlert = document.getElementById('formAlert');

  contactForm.addEventListener('submit', function(e){
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if(!name || !email){
      formAlert.className = 'alert alert-danger';
      formAlert.textContent = 'Please enter your name and email.';
      formAlert.classList.remove('d-none');
      return;
    }

    // For production: integrate with an API or mail service.
    // Currently we simulate a successful submission and show mailto fallback.
    formAlert.className = 'alert alert-success';
    formAlert.innerHTML = 'Thank you — we will contact you soon. Or open your email client: ' +
      `<a href="mailto:tripzy.cn@gmail.com?subject=Visa inquiry from ${encodeURIComponent(name)}&body=${encodeURIComponent(message)}">Send via email</a>`;
    formAlert.classList.remove('d-none');

    contactForm.reset();
  });

});