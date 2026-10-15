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
    src: "/brand/faces/halfface.svg",
    ratio: 251.7 / 413.2,
    alt: "Line drawing of a woman's profile",
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
      href: "/treatments/anti-wrinkle-injections",
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
    "Foundation and advanced training in toxins and dermal fillers, Acquisition Aesthetics",
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
      a: "It depends on the treatment and on you. Anti-wrinkle injections typically last three to four months. Dermal and lip fillers typically last six to eighteen months. Skin boosters, polynucleotides and microneedling work best as a short course, with results that build over weeks and are maintained with occasional top-ups. Gina will give you an honest timeline at your consultation.",
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
 * Privacy and terms. Plain English, drafted for a clinic that runs no analytics and takes
 * bookings through a separate system. PLACEHOLDER lines are for Gina to confirm before launch.
 */
export const legal = {
  privacy: {
    title: "Privacy",
    heading: "Privacy.",
    updated: "Last updated 15 October 2026",
    intro:
      "This notice explains what Cove Clinic does with information about you, and your rights over it. It covers this website and the clinic.",
    sections: [
      {
        heading: "Who we are",
        body: [
          "Cove Clinic is a nurse-led aesthetic clinic at 8 Devonshire Street, Penrith, Cumbria CA11 7SR, run by Gina, a registered nurse. For anything about your information, write to info@cove-clinic.co.uk or call 07709 266584.",
        ],
      },
      {
        heading: "This website",
        body: [
          "This website sets no cookies and runs no analytics or advertising trackers. It does not collect information about you unless you choose to contact us. If you call, email or message the clinic, we keep what you send us for as long as we need it to reply and to arrange your care.",
          "Online bookings are taken through Collums, a separate booking system. When you book, the details you enter are held by Collums under its own privacy policy, which is shown when you book.",
        ],
      },
      {
        heading: "At the clinic",
        body: [
          "To treat you safely we take a medical history, record the treatments you have and keep notes, including photographs where they help with planning and reviewing treatment. This is health information, which the law treats as special category data; we hold it because we need it to provide your care and to meet our professional obligations as a registered nurse.",
          "Clinical records are kept securely and for as long as professional guidance requires, which for adults is usually eight years from your last treatment. They are not shared with anyone outside the clinic except where you ask us to, where another clinician involved in your care needs them, or where the law requires it. Photographs are never used in marketing without your separate written consent.",
        ],
      },
      {
        heading: "Your rights",
        body: [
          "You can ask to see the information we hold about you, have it corrected, or in some cases have it deleted or restricted. You can withdraw any consent you have given at any time. Write to the email address above and we will reply within a month.",
          "If you are unhappy with how we handle your information you can complain to the Information Commissioner's Office at ico.org.uk, though we would rather you spoke to us first.",
        ],
      },
    ],
  },
  terms: {
    title: "Terms",
    heading: "Terms.",
    updated: "Last updated 15 October 2026",
    intro:
      "The short version: this website is for information, treatment is agreed in person, and we ask for notice if you need to change an appointment.",
    sections: [
      {
        heading: "This website",
        body: [
          "The information on this site describes the treatments Cove Clinic offers and what to expect from them. It is general information, not medical advice, and no treatment is agreed until you have had a consultation and Gina has confirmed it is suitable for you. Prices and timings shown are a guide and are confirmed at consultation.",
          "The text, photographs and design of this site belong to Cove Clinic and may not be copied or reused without permission.",
        ],
      },
      {
        heading: "Appointments",
        body: [
          "Treatments are by appointment and can be booked online, by phone or by email. Some treatments need a face-to-face consultation before they can go ahead, and booking one of those books the consultation rather than the treatment itself.",
          // PLACEHOLDER: Gina to confirm the notice period, any deposit and the fee for missed appointments.
          "If you need to cancel or move an appointment, please give at least 48 hours' notice so the time can be offered to someone else. Appointments missed or cancelled with less notice may be charged.",
        ],
      },
      {
        heading: "Treatment",
        body: [
          "Every treatment starts with a consultation and a medical history, and you will be asked to sign a consent form before it goes ahead. Treatments are for adults only. Gina will tell you honestly if a treatment is not right for you, and you are never under any obligation to go ahead.",
          "Results vary from person to person. Aftercare instructions are given after every treatment, and following them is part of getting the result described.",
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
