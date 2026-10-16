/**
 * All copy for the site. Components never hardcode strings.
 * Items marked PLACEHOLDER must be confirmed or replaced by the client before launch.
 */

export const site = {
  name: "Cove Clinic",
  legalName: "COVE Clinic",
  url: "https://www.cove-clinic.co.uk",
  title: "Cove Clinic | Nurse-Led Aesthetic Clinic in Penrith, Cumbria",
  titleTemplate: "%s | Cove Clinic",
  description:
    "Nurse-led aesthetic clinic in Penrith, Cumbria. Facials, peels, microneedling, injectables and skin boosters, planned to you. Book a free consultation.",
  wordmarkAlt: "Cove Clinic",
  address: {
    street: "8 Devonshire Street",
    town: "Penrith",
    county: "Cumbria",
    postcode: "CA11 7SR",
    country: "GB",
  },
  phone: "07709 266584",
  phoneHref: "tel:+447709266584",
  email: "info@cove-clinic.co.uk",
  hours: [{ days: "Every day", time: "8am to 7pm" }],
  hoursNote: "Treatments are by appointment.",
  practitioner: {
    name: "Gina",
    role: "Registered Nurse and Aesthetic Practitioner",
  },
  ogImage: "/og.png",
  /** The clinic's online booking (Collums): the free consultation, booked directly. */
  bookingUrl: "https://coveclinic.collums.co.uk/step/05f5e1010000000000000000/67c74aa250d51700254e7653",
  /** The clinic photo used for the business's image in structured data. */
  businessImage: "/photos/web/treatment-0905.jpg",
};

export const nav = {
  links: [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about-us" },
    { label: "Treatments", href: "/treatments" },
  ],
  cta: { label: "Book a free consultation", href: "https://coveclinic.collums.co.uk/step/05f5e1010000000000000000/67c74aa250d51700254e7653" },
  allTreatments: "See all treatments",
  menuOpen: "Open menu",
  menuClose: "Close menu",
};

export const treatmentsList = [
  { label: "Free consultation", href: "/treatments/free-consultation" },
  { label: "Facials", href: "/treatments/facials" },
  { label: "Anti-wrinkle injections", href: "/treatments/anti-wrinkle-injections" },
  { label: "Chemical peels", href: "/treatments/chemical-peels" },
  { label: "Microneedling", href: "/treatments/microneedling" },
  { label: "Polynucleotides", href: "/treatments/polynucleotides" },
  { label: "Dermal fillers", href: "/treatments/dermal-fillers" },
  { label: "Lip enhancement", href: "/treatments/lip-enhancement" },
  { label: "Skin boosters", href: "/treatments/skin-boosters" },
  { label: "PRP", href: "/treatments/prp" },
];

export const hero = {
  headline: {
    lead: "Results-driven skin.",
    emphasis: "Natural",
    tail: "aesthetics.",
  },
  sub: "Tailored aesthetics, advanced skin treatments and laser hair removal in Penrith. Empowering confidence, anti-ageing and holistic wellbeing.",
  cta: {
    label: "Book a free, non-obligatory consultation",
    labelShort: "Book a free consultation",
    href: "https://coveclinic.collums.co.uk/step/05f5e1010000000000000000/67c74aa250d51700254e7653",
  },
  drawing: {
    src: "/brand/faces/line-face-tall.svg",
    ratio: 390 / 1055,
    alt: "Line drawing of a woman's face",
  },
};

export const approach = {
  id: "our-approach",
  heading: "Our approach",
  statement:
    "More than aesthetic treatments. A calm, welcoming space to talk openly about your skin with an experienced medical professional, and a plan made for you.",
  values: [
    {
      title: "Natural results",
      body: "Enhancement that looks like you on a good day, never overdone. We work with your features, not against them.",
      mark: "halfface" as const,
    },
    {
      title: "Honest guidance",
      body: "If a treatment is not right for you, Gina will say so. Advice first, treatment second, and no pressure either way.",
      mark: "earrings" as const,
    },
    {
      title: "Completely tailored to you",
      body: "No set menus. Every plan starts with a conversation about your skin, your goals and your life, and is built from there.",
      mark: "head-tilted" as const,
    },
  ],
  cta: { label: "Meet your practitioner", href: "/about-us" },
};

export const treatments = {
  id: "treatments",
  heading: "Treatment focus",
  intro: "Medical-grade treatments, planned around the concern that brought you in.",
  cta: { label: "See all treatments", href: "/treatments" },
  items: [
    {
      name: "Facial balancing",
      line: "Dermal fillers, lip enhancement and anti-wrinkle injections for harmony, not change.",
      href: "/treatments/dermal-fillers",
      image: {
        src: "/photos/web/treatment-0926.jpg",
        alt: "Gina carrying out an injectable treatment at Cove Clinic in Penrith",
        position: "50% 30%",
      },
    },
    {
      name: "Skin concerns",
      line: "Facials, chemical peels and microneedling for acne, texture, pigmentation and glow.",
      href: "/treatments/facials",
      image: {
        src: "/photos/web/treatment-facial.jpg",
        alt: "Gina giving a facial at Cove Clinic, hands cradling the client's face",
        position: "50% 55%",
      },
    },
    {
      name: "Anti-ageing",
      line: "Skin boosters, polynucleotides and PRP to support firmer, healthier skin over time.",
      href: "/treatments/skin-boosters",
      image: {
        src: "/photos/web/treatment-0907.jpg",
        alt: "Gina performing a skin treatment with a handheld device",
        position: "50% 35%",
      },
    },
    {
      name: "Hair loss",
      line: "PRP therapy to encourage regrowth and strengthen thinning hair.",
      href: "/treatments/prp",
      image: {
        src: "/photos/web/treatment-0905.jpg",
        alt: "Gina working at a client's hairline during a treatment at Cove Clinic",
        position: "50% 62%",
      },
    },
  ],
};

export const band = {
  id: "nurse-led",
  eyebrow: "Nurse-led, in Penrith",
  statement: "The kind of results people notice, without ever knowing why.",
  body: "Nothing overfilled, nothing you didn't ask for. Every treatment is carried out by Gina, a registered nurse, and planned with you before anything goes ahead.",
};

export const practitioner = {
  id: "meet-gina",
  heading: "Meet Gina",
  photo: {
    src: "/photos/web/gina.jpg",
    alt: "Gina, registered nurse and founder of Cove Clinic, in the clinic in Penrith",
    position: "50% 30%",
  },
  intro:
    "Gina is a fully qualified, experienced registered nurse and aesthetic practitioner, and the founder of Cove Clinic.",
  credentials: [
    "First-class honours degree in Nursing",
    "Registered Nurse",
    "Foundation and advanced training in anti-wrinkle injections and dermal fillers, Acquisition Aesthetics",
    "Trained in microneedling, PRP, chemical peels and IV therapy",
  ],
  quote:
    "Natural-looking results, healthy skin, and treatments tailored to your individual goals.",
  cta: { label: "About Gina", href: "/about-us" },
};

/**
 * Google reviews, October 2026. Lara's and Sophie H's are contiguous passages
 * from longer reviews; nothing is reworded. Emoji removed.
 */
export const reviews = {
  id: "reviews",
  heading: "What clients say",
  source: "Google review",
  labels: { previous: "Previous review", next: "Next review", of: "of" },
  items: [
    {
      quote:
        "Since seeing Gina and following her personalised care plans, my skin has improved beyond belief, and honestly, so has my confidence. I feel amazing, and I have her to thank for it.",
      who: "Lara",
      treatment: "skin treatments",
    },
    {
      quote:
        "She's so lovely and makes you feel completely at ease. She really listens to what you want and always gives honest advice. I never feel like I'm being pushed into having anything done, which I really appreciate.",
      who: "Sophie H",
      treatment: "facials and cheek filler",
    },
    {
      quote:
        "Cove is the best skin clinic I've ever been to. When I went to Gina I had been struggling with my skin and my routine for years, she transformed my skin and my at home routine to help me maintain results. Definitely the best in the biz.",
      who: "Sophie S",
      treatment: "skin treatments",
    },
  ],
};

/**
 * Written in the phrasing people search for. No prescription-only medicine is
 * named. Durations are typical ranges, not promises. Also emitted as FAQPage
 * structured data in app/page.tsx.
 */
export const questions = {
  id: "questions",
  heading: "Questions, answered",
  intro: "The things people ask before a first visit, answered honestly.",
  items: [
    {
      q: "Will my results look natural?",
      a: "That is the whole point. Gina works with your features rather than against them, so results are subtle, balanced and still look like you. If you want more, we build up gradually over time, never all at once.",
    },
    {
      q: "What happens at a free consultation?",
      a: "A relaxed, unhurried conversation about your skin and what you would like to change. Gina assesses your skin, takes a medical history, talks through the options and gives honest advice, including when a treatment is not right for you. It is free, there is no obligation, and you are welcome to go away and think about it.",
    },
    {
      q: "Is it safe, and who carries out the treatments?",
      a: "Every treatment at Cove is carried out by Gina, a registered nurse with advanced aesthetics training, using medical-grade products in a clinical setting. Nothing goes ahead without a full consultation and medical history, and we do not treat anyone under 18.",
    },
    {
      q: "Does it hurt, and is there any downtime?",
      a: "Most treatments are quick and well tolerated, and numbing cream is used where it helps. Injectable treatments can leave a little redness, swelling or a small bruise for a day or two, easily covered with make-up. Microneedling and peels leave the skin pink for a day or so. Most people go straight back to their day.",
    },
    {
      q: "How long do results last?",
      a: "It depends on the treatment and on you. Anti-wrinkle injections typically last three to six months. Dermal and lip fillers typically last twelve to eighteen months. Skin boosters, polynucleotides and microneedling work best as a short course, with results that build over weeks and are maintained with occasional top-ups. Gina will give you an honest timeline at your consultation.",
    },
    {
      q: "How much do treatments cost?",
      a: "Prices depend on the treatment and the plan you agree with Gina, and are always confirmed before anything goes ahead. The consultation itself is free. Ask for a price guide when you book, or get in touch.",
    },
    {
      q: "How should I prepare for a treatment?",
      a: "Come with clean skin and no make-up where possible. For injectable treatments, avoid alcohol and blood-thinning painkillers such as ibuprofen for 24 hours beforehand, as they make bruising more likely. Some skin treatments need a patch test a couple of days before, and Gina will tell you if yours does.",
    },
    {
      q: "Where is the clinic, and is there parking?",
      a: "Cove Clinic is at 8 Devonshire Street in the centre of Penrith, Cumbria, a few minutes' walk from the train station and the town's car parks. We are open every day from 8am to 7pm, with treatments by appointment.",
    },
  ],
};

export const questionBar = {
  text: "Unsure what treatment is right for you?",
  cta: { label: "Book a free consultation", href: "https://coveclinic.collums.co.uk/step/05f5e1010000000000000000/67c74aa250d51700254e7653" },
};

export const visit = {
  id: "visit",
  heading: "Visit the clinic",
  body: "A calm space in the heart of Penrith, a few minutes from the station. Open every day, with treatments by appointment. Come in for a free consultation, or just to ask a question.",
  hoursHeading: "Opening hours",
  cta: { label: "Book a free consultation", href: "https://coveclinic.collums.co.uk/step/05f5e1010000000000000000/67c74aa250d51700254e7653" },
};

export const footer = {
  explore: "Explore",
  treatments: "Treatments",
  contact: "Contact",
  addressHeading: "Find us",
  instagram: { label: "Instagram", href: "https://www.instagram.com/cove_skinclinic/" },
  // PLACEHOLDER: add NMC PIN if Gina wants it shown, e.g. "NMC PIN 00X0000E"
  registration: "Registered nurse, Nursing and Midwifery Council",
  legal: [
    { label: "Privacy", href: "/privacy" },
    { label: "Terms", href: "/terms" },
  ],
  copyright: `© ${new Date().getFullYear()} Cove Clinic, Penrith`,
  /** The site credit, approved by the owner (15 Oct 2026). */
  credit: { label: "Website by Kestrel", href: "https://www.wearekestrel.com/" },
};

/** Find us: a drawn map of central Penrith with the clinic pinned, above the footer. */
export const findUs = {
  id: "find-us",
  heading: "Find us",
  body: "On Devonshire Street in the centre of Penrith, a minute from Market Square and five minutes' walk from the station.",
  parking: "Bluebell Lane and Sandgate car parks, both two minutes away.",
  cta: {
    label: "Get directions",
    href: "https://www.google.com/maps/dir/?api=1&destination=Cove+Clinic,+8+Devonshire+Street,+Penrith+CA11+7SR",
  },
  mapUrl: "https://www.google.com/maps/search/?api=1&query=Cove+Clinic,+8+Devonshire+Street,+Penrith+CA11+7SR",
  pinLabel: "Cove Clinic",
  photo: {
    src: "/photos/web/shopfront.jpg",
    alt: "The front of Cove Clinic on Devonshire Street, a brown shopfront with the name in gold lettering",
    position: "50% 50%",
  },
  /** The ruled list beneath the heading. */
  labels: { address: "Address", open: "Open", phone: "Phone", parking: "Parking" },
  scaleLabel: "100 m",
  mapAlt: "A map of central Penrith with Cove Clinic marked on Devonshire Street",
  attribution: { label: "Map data from OpenStreetMap", href: "https://www.openstreetmap.org/copyright" },
};

/** The page shown for an address that does not exist. */
export const notFound = {
  title: "Page not found",
  heading: "Page not found.",
  body: "The page you were after has moved or never existed. Every treatment is listed, and the homepage is a click away.",
  links: [
    { label: "See all treatments", href: "/treatments" },
    { label: "Back to the homepage", href: "/" },
  ],
};

/**
 * Privacy and terms. Plain English, in the site's voice, covering what UK clinics' pages cover
 * (deposits and notice, courses, suitability, results, complaints) and what the ICO expects a
 * privacy notice to say (who, what, why and on what basis, sharing, retention, rights,
 * complaints). The notice periods, validity and timescales are the ones UK clinics commonly use.
 */
export const legal = {
  privacy: {
    title: "Privacy",
    heading: "Privacy.",
    updated: "Last updated 15 October 2026",
    intro:
      "This notice explains what Cove Clinic does with information about you, why, who it is shared with, how long it is kept and what your rights are. It covers the clinic and this website.",
    sections: [
      {
        heading: "Who we are",
        body: [
          // Optional later: the company number and ICO registration number, if Gina wants them shown.
          "Cove Clinic is a nurse-led aesthetic clinic at 8 Devonshire Street, Penrith, Cumbria CA11 7SR, run by Gina, a registered nurse. Cove Clinic is the data controller for the information described here. For anything about your information, email info@cove-clinic.co.uk or call 07709 266584.",
        ],
      },
      {
        heading: "What we collect",
        body: [
          "Your contact details: name, phone number, email address and, where you give it, your address and date of birth.",
          "Your health information: the medical history you give at consultation, your consent forms, a record of each treatment, including the products used and where, and clinical photographs taken before and after treatment. This is special category data under data protection law, and we treat it with the care that implies.",
          "Your bookings: the details you enter when you book online through Collums, our booking system, and the record of your appointments. Card payments are taken by Collums or at the clinic; we do not hold your card details.",
          "Your correspondence: what you send us by phone, email, text, WhatsApp or Instagram message, and our replies.",
        ],
      },
      {
        heading: "Why we use it, and the lawful basis",
        body: [
          "To give you safe care: your medical history, consent forms and treatment records exist so that treatment is suitable for you and so that any later treatment can take account of what came before. The lawful basis is the provision of health care under the responsibility of a registered health professional, together with our contract with you.",
          "To run your appointments: to book, confirm, remind and reschedule, and to take payment. The lawful basis is our contract with you.",
          "To take and keep clinical photographs: as part of your record, to plan treatment and to judge its results. The lawful basis is the same as for your other clinical records. Any use beyond your record, such as on our website or social media, needs your separate written consent, which you can withdraw at any time.",
          "To keep in touch about offers or news: only if you have asked us to. The lawful basis is your consent, and every message tells you how to stop them. Appointment reminders are not marketing and are sent regardless.",
          "To meet our legal and professional obligations: including keeping records for the periods the Nursing and Midwifery Council and our insurers expect, and defending or bringing legal claims if ever needed.",
        ],
      },
      {
        heading: "Who we share it with",
        body: [
          "Collums, the booking and clinical records system we use, holds your booking and treatment records on our behalf under a contract that allows it to use them only for that purpose. Its own privacy policy is shown when you book.",
          "For prescription-only treatments, the prescriber who assesses you and the pharmacy that dispenses the medicine see the information they need to prescribe and supply it safely.",
          "Your GP or another clinician, only if you ask us to, or in an emergency where it is needed for your care.",
          "Our insurers, our professional regulator, the police, courts or other authorities, where the law or a legal process requires it.",
          "We never sell your information, and we never pass it to anyone else for their marketing.",
        ],
      },
      {
        heading: "How long we keep it",
        body: [
          "Clinical records, including photographs and consent forms, are kept for eight years from your last treatment, in line with the guidance that applies to private health records in England. They may be kept longer if a complaint or claim is open.",
          "Enquiries that do not lead to a booking are deleted after twelve months. Booking records are kept with your clinical record. Marketing consent is kept until you withdraw it.",
        ],
      },
      {
        heading: "Where it is kept and how it is protected",
        body: [
          "Your records are held in Collums, which stores data in the United Kingdom, and any paper records are kept locked at the clinic. Only Gina and anyone she is directly responsible for can see them, and only when there is a reason to. Where any service we use stores data outside the UK, we rely on the safeguards UK data protection law provides for that.",
        ],
      },
      {
        heading: "This website",
        body: [
          "This website sets no cookies and runs no analytics or advertising trackers, so visiting it collects nothing about you. It links to Collums for booking, to Google Maps for directions and to Instagram, each of which has its own privacy policy once you are there.",
        ],
      },
      {
        heading: "Your rights",
        body: [
          "You can ask for a copy of the information we hold about you, free of charge, and we will provide it within a month. You can ask us to correct anything that is wrong, to delete information, to limit how we use it, or to send it to someone else, and you can object to any use that rests on our legitimate interests. Clinical records are an exception to deletion: we are required to keep them for the period above even if you ask otherwise, though we will tell you why.",
          "You can withdraw any consent you have given at any time, including for photographs and marketing. Withdrawing consent does not affect anything done before it.",
          "To use any of these rights, email or call us. We may ask you to confirm your identity first.",
        ],
      },
      {
        heading: "Complaints",
        body: [
          "If you are unhappy with how we have handled your information, tell us and we will put it right where we can. You also have the right to complain to the Information Commissioner's Office at ico.org.uk or on 0303 123 1113.",
        ],
      },
      {
        heading: "Changes",
        body: [
          "If this notice changes, the new version will appear here with a new date. Anything that changes how we use information you have already given us will be explained to you directly.",
        ],
      },
    ],
  },
  terms: {
    title: "Terms",
    heading: "Terms.",
    updated: "Last updated 15 October 2026",
    intro:
      "These terms cover appointments and treatment at Cove Clinic, and the use of this website. In short: treatment is agreed in person, we ask for notice if you need to change an appointment, and we tell you honestly what a treatment can and cannot do.",
    sections: [
      {
        heading: "About us",
        body: [
          // Optional later: the company number and the insurer, if Gina wants them named.
          "Cove Clinic is at 8 Devonshire Street, Penrith, Cumbria CA11 7SR. Every treatment is carried out by Gina, a registered nurse with the Nursing and Midwifery Council. Contact us at info@cove-clinic.co.uk or on 07709 266584.",
        ],
      },
      {
        heading: "Consultations and suitability",
        body: [
          "Every treatment starts with a consultation and a medical history, and you will be asked to sign a consent form before treatment goes ahead. Please answer the medical questions fully and tell us about any change in your health, medication or pregnancy, because the safety of your treatment depends on it.",
          "Gina will decline or stop a treatment if she does not think it is right for you, whether for medical reasons or because it would not give you the result you want. If that happens before treatment begins, nothing is charged for the treatment itself.",
          "Treatments are for adults only, and we may ask for proof of age. Most treatments are not carried out during pregnancy or breastfeeding. A consultation remains valid for six months; after that, or after a significant change in your health, a fresh one is needed.",
        ],
      },
      {
        heading: "Prescription-only treatments",
        body: [
          "Some treatments, including anti-wrinkle injections, use a prescription-only medicine. By law these need a face-to-face assessment by a prescriber before the medicine can be prescribed for you, so booking one of these books the consultation rather than the treatment. The medicine is prescribed for you alone and cannot be used for anyone else. If treatment is suitable, it is arranged after the assessment, often soon afterwards.",
        ],
      },
      {
        heading: "Booking, deposits and cancellations",
        body: [
          "Appointments can be booked online, by phone or by email. Some treatments need a deposit to secure the appointment; where they do, the booking system or Gina will tell you the amount before you book, and it comes off the cost of the treatment.",
          "If you need to cancel or move an appointment, please give at least 48 hours' notice so the time can be offered to someone else. With less notice, or if you do not arrive, the deposit is kept and the appointment may be charged in full. If you arrive late, the treatment may need to be shortened or rebooked so that it is not rushed.",
          "If you are unwell on the day, particularly with a cold sore, an infection or a skin flare-up in the area to be treated, please tell us and we will rearrange; many treatments cannot safely go ahead in those circumstances.",
        ],
      },
      {
        heading: "Courses and packages",
        body: [
          "Courses of treatment are paid for in full when booked and are valid for twelve months from the first session. Sessions are for the person who bought the course and cannot be transferred. A session missed or cancelled with less than the notice above may be treated as taken.",
          "If a course cannot be completed for medical reasons, the remaining sessions are refunded, less the full list price of any sessions already had. Courses are otherwise non-refundable.",
        ],
      },
      {
        heading: "Prices and payment",
        body: [
          "Prices on this website are a guide and are confirmed at consultation, before anything goes ahead. They may change from time to time, but a price confirmed for your treatment will be honoured. Payment is taken at the appointment, by card or through the booking system, unless a deposit or course has already been paid.",
        ],
      },
      {
        heading: "Results",
        body: [
          "Results vary from person to person, and no particular result can be guaranteed. Gina will tell you honestly what a treatment is likely to do for you, and what it will not. Because treatment has been carried out and the products used, treatments already performed are not refundable.",
          "If you are unhappy with a result, tell us as soon as you can. Many treatments, such as dermal fillers, include a review two weeks after treatment at which small adjustments are made; where a result needs correcting, Gina will discuss the options with you, which for hyaluronic acid fillers include dissolving.",
        ],
      },
      {
        heading: "Aftercare",
        body: [
          "You will be given aftercare instructions after every treatment, in person and in writing. Following them is part of getting the result described and of keeping the treatment safe. If anything about your recovery worries you, contact us straight away; in an emergency, call 999.",
        ],
      },
      {
        heading: "Complaints",
        body: [
          "If something has gone wrong, we would like to know. Tell Gina at the clinic, or email info@cove-clinic.co.uk with what happened. We will acknowledge a written complaint within three working days and give you a full reply within twenty working days, or explain why we need longer. If you are not satisfied with our reply, you can raise it with the Nursing and Midwifery Council, which regulates nurses.",
        ],
      },
      {
        heading: "This website",
        body: [
          "The information on this site describes the treatments Cove Clinic offers and what to expect from them. It is general information, not medical advice, and is not a substitute for a consultation. We take care to keep it accurate and up to date, but we do not guarantee that it is complete or error-free.",
          "The text, photographs, drawings and design of this site belong to Cove Clinic and may not be copied or reused without permission. Links to other sites are provided for convenience; we are not responsible for their content.",
          "Nothing in these terms limits our liability for death or personal injury caused by our negligence, or for anything else that the law does not allow us to limit. Beyond that, we are not liable for loss that was not a foreseeable result of our breaking these terms.",
        ],
      },
      {
        heading: "The legal bit",
        body: [
          "These terms are governed by the law of England and Wales, and any dispute will be dealt with by the courts of England and Wales. If any part of these terms is found to be unenforceable, the rest still applies.",
        ],
      },
    ],
  },
};

/** About Us. First person, in Gina's voice, tightened from the copy on the current site. */
export const about = {
  title: "About Gina, Registered Nurse",
  description:
    "Meet Gina, the registered nurse behind Cove Clinic in Penrith: her training, her approach to natural results, and how a visit works. Book a free consultation.",
  /** The clinic itself, between the letter and the training: the place to go with the person. */
  space: {
    id: "the-clinic",
    heading: "A calm room on Devonshire Street.",
    body: "One treatment room, one practitioner, and a sofa to sit on while you talk. Nothing about the place is designed to hurry you.",
    cta: { label: "Find us", href: "/#find-us" },
    photo: {
      src: "/photos/web/interior.jpg",
      alt: "The waiting area at Cove Clinic: a brown velvet sofa, a round table and a lamp by the window",
      position: "50% 50%",
    },
  },
  masthead: {
    id: "about",
    heading: "Hi, I'm Gina.",
    sub: "Founder of Cove Clinic, a registered nurse, and the face you'll see when you walk through the door.",
    cta: { label: "Book a free consultation", href: "https://coveclinic.collums.co.uk/step/05f5e1010000000000000000/67c74aa250d51700254e7653" },
    photo: {
      src: "/photos/web/gina-about.jpg",
      alt: "Gina, founder of Cove Clinic, sitting in the clinic",
      position: "50% 20%",
    },
  },
  letter: {
    id: "in-her-words",
    heading: "Why I started Cove",
    paragraphs: [
      "I wanted somewhere calm, where people feel seen and heard, and where their questions get honest answers. A place where your natural features are the starting point, enhanced gently, never changed.",
      "Everyone has their own concerns and insecurities. I take the time to listen, to explain, and to build a plan around your goals rather than a menu. Whether you want to address a specific skin concern or simply feel refreshed, the aim is the same: that you leave feeling comfortable, confident and like yourself.",
      "Outside the clinic I'm always learning, and always looking for ways to bring wellbeing into the work I do. Beauty, to me, is never just skin deep. It's how you feel in your body, your mind and your life.",
    ],
    signoff: "I can't wait to welcome you in.",
    signature: "Gina",
  },
  training: {
    id: "training",
    heading: "Training and qualifications",
    intro: "A clinical foundation first, then specialist aesthetics training on top of it.",
    items: [
      {
        title: "First-class nursing degree",
        body: "A BSc (Hons) in Nursing, first class. It is the foundation behind every treatment: a deep understanding of anatomy, precision, and a focus on your safety and wellbeing.",
        mark: "halfface" as const,
      },
      {
        title: "Advanced injectables training",
        body: "Foundation and advanced training in anti-wrinkle injections and dermal fillers with Acquisition Aesthetics, one of the UK's most respected academies. Rigorous, hands-on courses led by medical experts, covering facial anatomy and complication management.",
        mark: "earrings" as const,
      },
      {
        title: "Skin and wellness treatments",
        body: "Trained in microneedling, PRP, chemical peels and IV therapy, so care can be holistic. It is not just about injectables; it is about your skin's health and your long-term goals.",
        mark: "head-tilted" as const,
      },
    ],
  },
  steps: {
    id: "how-a-visit-works",
    heading: "How a visit works",
    intro: "Four steps, and no pressure at any of them.",
    items: [
      {
        title: "A free consultation",
        body: "An unhurried conversation about your skin and what you would like to change. Honest advice, including when a treatment is not right for you.",
      },
      {
        title: "A plan built around you",
        body: "Options explained in plain terms, a plan shaped by your goals rather than a menu, and prices confirmed before anything goes ahead.",
      },
      {
        title: "Treatment with Gina",
        body: "Every treatment is carried out by Gina herself, in the clinic on Devonshire Street, using medical-grade products.",
      },
      {
        title: "Aftercare and follow-up",
        body: "Clear aftercare advice to take home, and a follow-up if you need one. You can get in touch at any point with a question.",
      },
    ],
  },
};
