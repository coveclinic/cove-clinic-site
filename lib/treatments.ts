/**
 * Treatment pages. One entry per page, served by app/[treatment]/page.tsx.
 * Reference pages, kept plain: a heading and a short lead, the facts as a
 * ruled list, the body as prose under question-style subheadings, a few
 * questions, one closing invitation. Copy adapted from the current site.
 */

export type TreatmentPage = {
  slug: string;
  name: string;
  title: string;
  description: string;
  heading: string;
  /** One line for the treatments index, where there is no room for the lead. */
  summary: string;
  lead: string;
  photo: { src: string; alt: string; position: string };
  /** Label and value rows. Keep the values short: a few words, one qualifier at most. */
  facts: Array<{ label: string; value: string }>;
  /** The body: short sections under question-style headings, two to five sentences each. */
  sections: Array<{ title: string; body: string }>;
  /** Optional: the options within a treatment (the six facials), as plain rows after the body. */
  menu?: {
    heading: string;
    intro: string;
    items: Array<{ name: string; meta: string; body: string }>;
  };
  questions: Array<{ q: string; a: string }>;
  closing: { heading: string; body: string };
  /** The clinic's online booking link for this treatment (Collums), to wire to the buttons once every page is built. */
  bookingUrl?: string;
};

/** The treatments index at /treatments. */
export const treatmentsIndex = {
  title: "Nurse-Led Aesthetic Treatments in Penrith",
  description:
    "Facials, peels, microneedling, polynucleotides, skin boosters, PRP, fillers and anti-wrinkle injections, nurse-led in Penrith. Prices, times and online booking.",
  heading: "Treatments.",
  lead: "Ten treatments, one practitioner. Each is planned to your face at consultation by Gina, a registered nurse, never to a template.",
  readMore: "Read more",
};

/** Labels shared by every treatment page. */
export const treatmentLabels = {
  root: "Treatments",
  atAGlance: "At a glance",
  questions: "Questions",
  questionsIntro: "The things people ask before booking, answered honestly.",
  questionsAsk: "Something else?",
  questionsPhone: "Call Gina on 07709 266584",
};

export const bookingActions = {
  online: { label: "Book online" },
  call: { label: "Call to book", href: "tel:+447709266584" },
  email: { label: "Email the clinic", href: "mailto:info@cove-clinic.co.uk" },
};

export const treatmentPages: Record<string, TreatmentPage> = {
  "free-consultation": {
    slug: "free-consultation",
    name: "Free consultation",
    summary: "An unhurried hour with Gina to talk through your skin, free and without obligation.",
    title: "Free Aesthetic Consultation in Penrith",
    description:
      "A free, no-obligation hour with Gina, a registered nurse, to talk through your skin and your options. Honest advice, no pressure. Book online in Penrith.",
    heading: "A free consultation.",
    lead: "An unhurried hour to talk about your skin, your goals and what is possible. Honest advice, a plan if you want one, and no pressure either way.",
    photo: {
      src: "/photos/web/consultation.jpg",
      alt: "A practitioner assessing a client's face during a consultation",
      position: "50% 40%",
    },
    facts: [
      { label: "Time", value: "About an hour" },
      { label: "Cost", value: "Free, no obligation" },
      { label: "With", value: "Gina, registered nurse" },
      { label: "Where", value: "8 Devonshire Street, Penrith" },
    ],
    sections: [
      {
        title: "Who is it for?",
        body: "Anyone thinking about a treatment and not sure where to start, and anyone who simply wants an honest opinion about their skin. Acne, pigmentation, sensitivity, dehydration, texture, the first signs of ageing, or just wanting to look well: all fair subjects.",
      },
      {
        title: "What happens?",
        body: "You talk and Gina listens. She assesses your skin, takes a medical history and asks what you would like to change, and just as importantly what you would not. Then she tells you plainly what would help and what would not. If a treatment is not right for you, she will say so.",
      },
      {
        title: "What do you leave with?",
        body: "A clear picture of your options, with timings and prices confirmed before anything goes ahead. That might be a treatment plan, a medical-grade skincare routine for home, or nothing at all for now. The aim is always to enhance what you have, never to make you look different.",
      },
    ],
    questions: [
      {
        q: "Do I need a consultation before booking a treatment?",
        a: "Not always, but it is strongly recommended if you are unsure which treatment is right for you, have more than one concern, or are considering a longer-term plan. Many people simply find it reassuring to talk first.",
      },
      {
        q: "Is there any pressure to book a treatment?",
        a: "None. The consultation is free and obligation-free. It is a chance to ask questions and understand your options, whether that leads to skincare, a treatment, or nothing at all for now.",
      },
      {
        q: "Will you recommend products?",
        a: "If they would help, yes. Gina may suggest medical-grade skincare for home alongside, or instead of, treatments. You are never expected to buy anything.",
      },
      {
        q: "Can I have a treatment on the same day?",
        a: "Sometimes, if it is suitable and there is time, though many treatments need a medical history and a short gap first. Gina will tell you at the consultation.",
      },
    ],
    closing: {
      heading: "Ready to talk?",
      body: "Book your free consultation online, or call or email. The clinic is open every day from 8am to 7pm, at 8 Devonshire Street in the centre of Penrith.",
    },
    bookingUrl: "https://coveclinic.collums.co.uk/step/05f5e1010000000000000000/67c74aa250d51700254e7653",
  },

  facials: {
    slug: "facials",
    name: "Facials",
    summary: "Six Medik8 facials, tailored on the day, for hydration, congestion, texture and glow.",
    title: "Medik8 Facials in Penrith",
    description:
      "Six Medik8 facials in Penrith, tailored to your skin on the day by a registered nurse. £75, under an hour, no downtime. See the six facials and book online.",
    heading: "Medik8 facials.",
    lead: "Professional facials with Medik8, the science-led British skincare brand, tailored on the day to what your skin needs. Six to choose from, each under an hour of being properly looked after.",
    photo: {
      src: "/photos/web/facials.jpg",
      alt: "A client with glowing skin after a Medik8 facial at Cove Clinic in Penrith",
      position: "50% 40%",
    },
    facts: [
      { label: "Time", value: "45 to 60 minutes" },
      { label: "Price", value: "£75, every facial" },
      { label: "Downtime", value: "None" },
      { label: "How often", value: "Every 4 to 6 weeks" },
      { label: "Products", value: "Medik8 Professional" },
      { label: "With", value: "Gina, registered nurse" },
    ],
    sections: [
      {
        title: "What is a Medik8 facial?",
        body: "Medik8 is a British skincare brand with professional roots in London's Harley Street, known for pairing well-researched ingredients with results you can see. Every facial here uses Medik8 Professional products and starts the same way: a double cleanse and a proper look at your skin. From there Gina adapts the steps, the mask and the serums to what your skin needs on the day.",
      },
      {
        title: "Which facial is right for me?",
        body: "That depends on your skin and what you would like from it. If you are not sure, book any facial and tell Gina what is bothering you; she will recommend the best fit and tailor it on the day. As a rough guide: for dull or congested skin start with the Ultimate Reset, for dry and tight skin the Ultimate Hydration, and before an event the Lymphatic Drainage or Glass Skin.",
      },
      {
        title: "What should I expect afterwards?",
        body: "Most people leave with skin that looks fresher, brighter and more hydrated straight away. Depending on the facial, texture, tone and congestion carry on improving over the following days. There is no downtime: a little redness after extractions settles within the hour. A facial every four to six weeks keeps skin at its best, and Gina can suggest Medik8 homecare to hold the results between visits.",
      },
    ],
    menu: {
      heading: "The six facials",
      intro: "All tailored on the day, all under an hour. Any of them is a good first visit.",
      items: [
        {
          name: "Ultimate Reset Facial",
          meta: "45 minutes, £75",
          body: "Exfoliate, refresh, glow. A double cleanse, an instant enzyme peel, then steam and gentle extractions to clear congestion, finished with tailored serums. Dermaplaning can be added. The one to start with for dull, tired or congested skin.",
        },
        {
          name: "Lymphatic Drainage Facial",
          meta: "45 minutes, £75",
          body: "Sculpt, de-puff, hydrate. Gentle, rhythmic massage across the face and neck to move fluid, ease puffiness and brighten a tired complexion. A favourite before a holiday or an event.",
        },
        {
          name: "Ultimate Hydration Facial",
          meta: "45 minutes, £75",
          body: "Hydrate, nourish, glow. For dry, dehydrated or tight-feeling skin: a double cleanse, optional extractions, a facial massage and Medik8's Ultimate Recovery bio-cellulose mask, finished with targeted serums and a rich moisturiser.",
        },
        {
          name: "Glass Skin Facial",
          meta: "60 minutes, £75",
          body: "Smooth, hydrate, brighten. Exfoliation chosen for your skin type, then layers of hydration, a mask and professional serums, for the smooth, dewy finish the name promises.",
        },
        {
          name: "Calming Charcoal Facial",
          meta: "45 minutes, £75",
          body: "Purify, calm, restore. A purifying charcoal mask draws out impurities and excess oil without stripping the skin, then targeted serums and a light moisturiser. For oily, combination or congested skin, and occasional breakouts.",
        },
        {
          name: "Anti-Ageing Retinal Facial",
          meta: "45 minutes, £75",
          body: "Renew, smooth, target. Medik8's Crystal Retinal, a form of vitamin A, chosen at the right strength for your skin, with lymphatic massage and a vitamin C or charcoal mask. For fine lines, uneven texture and loss of firmness.",
        },
      ],
    },
    questions: [
      {
        q: "Which facial should I book first?",
        a: "If in doubt, the Ultimate Reset: it suits most skin and gives Gina a good look at yours. Or book any facial and say what is bothering you. The steps are adapted on the day, so you will not end up with the wrong one.",
      },
      {
        q: "How often should I have a facial?",
        a: "Every four to six weeks for general skin health. If you are working towards a specific goal, Gina may suggest a short course of treatments for faster progress.",
      },
      {
        q: "Is a facial suitable for sensitive skin?",
        a: "Yes. Gina assesses your skin before starting and chooses products and techniques to suit it. The Calming Charcoal and Ultimate Hydration facials are gentle places to begin.",
      },
      {
        q: "Will you recommend skincare for home?",
        a: "If it would help, yes. Medik8 homecare used between visits is the surest way to keep your results. You are never expected to buy anything.",
      },
    ],
    closing: {
      heading: "Book a facial",
      body: "Book online, or call or email to ask which facial would suit you. Every facial is £75 and takes under an hour, at 8 Devonshire Street in the centre of Penrith.",
    },
    bookingUrl: "https://coveclinic.collums.co.uk/step/05f5e1010000000000000000/6a6901dcd708fb35d54a4feb",
  },

  // A prescription-only medicine: the page never names the product, lists no prices,
  // and books the consultation, not the treatment (UK advertising rules).
  "anti-wrinkle-injections": {
    slug: "anti-wrinkle-injections",
    name: "Anti-wrinkle injections",
    summary: "Softens expression lines and slows new ones forming, with a light hand. Consultation first.",
    title: "Anti-Wrinkle Injections in Penrith",
    description:
      "Anti-wrinkle injections in Penrith by Gina, a registered nurse. Softer lines, a natural look, results in days. Face-to-face consultation first. Book online.",
    heading: "Anti-wrinkle injections.",
    lead: "Softens the lines that expression leaves behind and slows new ones forming, with a light hand so you still look like you. A face-to-face consultation with Gina comes first.",
    photo: {
      src: "/photos/web/anti-wrinkle.jpg",
      alt: "Gina showing a client her reflection in a hand mirror at Cove Clinic in Penrith",
      position: "50% 50%",
    },
    facts: [
      { label: "First", value: "A face-to-face consultation" },
      { label: "Time", value: "About 30 minutes" },
      { label: "Discomfort", value: "Minimal" },
      { label: "Results", value: "From 3 to 5 days, full at two weeks" },
      { label: "Lasts", value: "Typically 3 to 6 months" },
      { label: "Downtime", value: "None" },
      { label: "Price", value: "Confirmed at your consultation" },
    ],
    sections: [
      {
        title: "How does it work?",
        body: "Every expression contracts the muscles of the face. Over the years those contractions leave lines that stay even when the face is at rest, and sun, stress, smoking and hormones hurry them along. Anti-wrinkle injections gently relax the targeted muscles, so the lines they cause soften and new ones form more slowly. The rest of your face moves exactly as before.",
      },
      {
        title: "Why a consultation first?",
        body: "This is a prescription-only treatment, so UK regulations require a face-to-face assessment before it can be prescribed for you. Booking books that consultation, not the treatment: Gina, a registered nurse, assesses your skin and your medical history, talks through what you want and what to expect, and plans the areas and the doses to your face. If it is suitable, your treatment is arranged from there. You must be over 18.",
      },
      {
        title: "What should I expect afterwards?",
        body: "Nothing to hide. The injection points settle within the hour, and the occasional small bruise is easily covered. The effect comes on gradually: softer from three to five days, fully settled at two weeks, and typically lasting three to six months. Movement returns gently as it wears off, and with regular treatment the lines tend to look less severe over time. You leave with written aftercare and a follow-up if you want one.",
      },
    ],
    menu: {
      heading: "Where it can help",
      intro: "Planned to your face at consultation, on their own or together. Each takes about half an hour.",
      items: [
        {
          name: "Upper face",
          meta: "30 minutes",
          body: "Forehead lines, frown lines between the brows and crow's feet: the three areas most people ask about, treated together or singly.",
        },
        {
          name: "Chin",
          meta: "30 minutes",
          body: "Dimpling and lines on the chin, for a smoother rest position.",
        },
        {
          name: "Jawline slimming",
          meta: "30 minutes",
          body: "Relaxing the masseter, the chewing muscle at the angle of the jaw, to soften a square or heavy jawline.",
        },
        {
          name: "Neck lift",
          meta: "30 minutes",
          body: "The Nefertiti technique: relaxing the bands that pull the jaw downward, for a sharper jawline and a smoother neck.",
        },
        {
          name: "Full face and neck",
          meta: "30 minutes",
          body: "The upper face, chin and neck planned as one, for a result that reads as a whole rather than a treated area.",
        },
      ],
    },
    questions: [
      {
        q: "Will my face look frozen?",
        a: "No. The frozen look comes from too much in one area. Gina plans the dose to your face and to the look you want, which is the point of the consultation. You will still raise your eyebrows, smile and frown; the lines just soften.",
      },
      {
        q: "How long does it last?",
        a: "Typically three to six months. Muscle action returns gradually, the lines reappear and the area can be treated again. With regular treatment, the lines tend to look less severe each time.",
      },
      {
        q: "What are the side effects?",
        a: "A small temporary bruise at an injection point is the common one. Less often, a headache for 24 to 48 hours. Gina goes through the risks and the aftercare at your consultation, and you leave with written instructions to keep them to a minimum.",
      },
      {
        q: "Why can't I book the treatment straight away?",
        a: "Because it is a prescription-only medicine. A prescriber must assess you face to face before it can be prescribed, so your first booking is the consultation. If treatment is right for you, it is often possible to arrange it soon afterwards.",
      },
    ],
    closing: {
      heading: "Start with a consultation",
      body: "Book your face-to-face consultation online, or call or email to arrange it. If treatment is right for you, it is planned and booked from there.",
    },
    bookingUrl: "https://coveclinic.collums.co.uk/step/05f5e1010000000000000000/648ab6a9624aa811923faed7",
  },

  "chemical-peels": {
    slug: "chemical-peels",
    name: "Chemical peels",
    summary: "Medik8 resurfacing peels for dullness, uneven tone, pigmentation and blemish-prone skin.",
    title: "Chemical Peels in Penrith",
    description:
      "Medik8 chemical peels in Penrith for dull, uneven, congested or blemish-prone skin, chosen for you by a registered nurse. £85, or £230 for three. Book online.",
    heading: "Chemical peels.",
    lead: "A professional Medik8 resurfacing peel, chosen for your skin, that clears away dull and damaged surface cells for a smoother, brighter and more even complexion. Best as a course.",
    photo: {
      src: "/photos/web/chemical-peel.jpg",
      alt: "Medik8 professional peel bottles on a white table",
      position: "50% 50%",
    },
    facts: [
      { label: "Time", value: "About an hour" },
      { label: "Price", value: "£85, or £230 for a course of 3" },
      { label: "Course", value: "3 to 6, several weeks apart" },
      { label: "Discomfort", value: "Mild stinging or itching during" },
      { label: "Results", value: "From two weeks, best after a course" },
      { label: "Downtime", value: "Light peeling for a few days" },
      { label: "Products", value: "Medik8 Professional" },
    ],
    sections: [
      {
        title: "What is a Medik8 peel?",
        body: "A professional resurfacing treatment. After a thorough double cleanse, Gina applies a Medik8 peel chosen for your skin and your goals. It lifts away the dead cells sitting on the surface, refines texture and prompts the skin to renew itself from beneath. The treatment finishes with Medik8 serums and nourishing skincare to support the skin barrier and put hydration back.",
      },
      {
        title: "What can it help with?",
        body: "Dullness and tired-looking skin, uneven tone, pigmentation and melasma, congestion, blemishes and the marks they leave behind, enlarged pores, fine lines and rough texture. Peels are particularly good for oily and blemish-prone skin, where they clear pores and settle excess oil. Your skin is assessed first so the right peel and the right strength are chosen for you.",
      },
      {
        title: "What should I expect afterwards?",
        body: "Skin looks fresher and brighter within days, with the full result showing at around two weeks as the skin renews. Depending on the strength of the peel you may get some light flaking for a few days: a normal part of the process, not a problem. For the first week or so you follow a simple skincare routine and keep out of the sun. Results build with each peel, which is why a course of three to six is recommended.",
      },
    ],
    menu: {
      heading: "Single peel or a course",
      intro: "Every peel takes about an hour. Courses are spaced several weeks apart so the skin has time to renew.",
      items: [
        {
          name: "Single peel",
          meta: "60 minutes, £85",
          body: "A stand-alone peel, or a top-up to hold the results of a course.",
        },
        {
          name: "Course of three",
          meta: "£230",
          body: "The minimum for lasting results, and the usual starting point. Saves £25 on three single peels.",
        },
        {
          name: "Course of six",
          meta: "£425",
          body: "Recommended for pigmentation, acne-prone skin and texture, where results build over time. Saves £85.",
        },
      ],
    },
    questions: [
      {
        q: "Will I see results straight away?",
        a: "Skin looks fresher, brighter and smoother soon after a peel, but the real result develops over the following days as the skin renews. With a course, you can expect progressive improvements in texture, clarity, tone and fine lines.",
      },
      {
        q: "Is a peel suitable for acne or blemish-prone skin?",
        a: "Yes, and often the best place to start. The right peel decongests pores, settles excess oil and improves blemishes and the marks they leave. Gina assesses your skin first so the peel and its strength suit it.",
      },
      {
        q: "How often should I have a peel?",
        a: "A course of at least three is recommended, spaced several weeks apart to give the skin time to recover and renew. The exact plan depends on what you are treating. Occasional maintenance peels then keep the results.",
      },
      {
        q: "Is there downtime?",
        a: "Very little. You can go straight back to your day. Depending on the peel's strength you may see light flaking for a few days, and you will need to keep to the skincare Gina gives you and stay out of strong sun for a week or so.",
      },
    ],
    closing: {
      heading: "Book a peel",
      body: "Book a single peel or a course online, or call or email to ask whether a peel is right for your skin. About an hour, at 8 Devonshire Street in the centre of Penrith.",
    },
    bookingUrl: "https://coveclinic.collums.co.uk/step/05f5e1010000000000000000/6a68ffcbd708fb35d54a440b",
  },

  microneedling: {
    slug: "microneedling",
    name: "Microneedling",
    summary: "Collagen-stimulating needling for fine lines, acne scarring, pores and texture.",
    title: "Microneedling in Penrith",
    description:
      "Microneedling in Penrith by a registered nurse: collagen-stimulating treatment for fine lines, acne scarring, pores and texture. From £125. Book online.",
    heading: "Microneedling.",
    lead: "The skin's own repair response, put to work. Fine, sterile needles prompt new collagen and elastin for firmer, smoother, more even skin: fine lines, acne scarring, pores and texture all improve. Best as a course of three.",
    photo: {
      src: "/photos/web/microneedling.jpg",
      alt: "Gina carrying out a skin treatment at Cove Clinic in Penrith",
      position: "50% 50%",
    },
    facts: [
      { label: "Time", value: "About an hour" },
      { label: "Price", value: "From £125, or £300 for a course of 3" },
      { label: "Course", value: "3, four to six weeks apart" },
      { label: "Discomfort", value: "Mild to moderate, numbing cream used" },
      { label: "Results", value: "Build over weeks, with each session" },
      { label: "Downtime", value: "Redness for 24 to 48 hours" },
      { label: "With", value: "Gina, registered nurse" },
    ],
    sections: [
      {
        title: "How does it work?",
        body: "A pen with a cartridge of fourteen tiny sterile needles makes thousands of microscopic channels in the skin. The body treats each one as a wound to repair: blood flow increases, and new collagen and elastin are laid down where the needles went. Over the following weeks the skin becomes firmer, thicker and smoother. The channels also carry a serum deep into the skin, which is where the choice of hyaluronic acid, polynucleotides or exosomes comes in.",
      },
      {
        title: "What can it help with?",
        body: "Fine lines and the early signs of ageing, acne scarring, enlarged pores, uneven tone and texture, dehydration and loss of firmness. It is also used on stretch marks. Because it works with the skin's own repair response rather than adding anything to it, it suits most skin types and most ages: collagen production can be stimulated well into your fifties and beyond.",
      },
      {
        title: "What should I expect afterwards?",
        body: "Numbing cream goes on first, so the treatment is comfortable, and the skin is pink to red for a day or two afterwards, like mild sunburn. Keep it clean, keep it out of the sun and follow the simple aftercare Gina gives you. Results come gradually as the new collagen forms, so a course of three, four to six weeks apart, is the recommendation; after that, two or three sessions a year keep the result.",
      },
    ],
    menu: {
      heading: "Three ways to have it",
      intro: "The same treatment, with a different serum carried into the skin. Gina will suggest the right one for your concern. Each takes about an hour.",
      items: [
        {
          name: "With hyaluronic acid",
          meta: "£125, or £300 for 3",
          body: "The classic. Deep hydration carried into the skin as it renews, for texture, pores, fine lines and general rejuvenation.",
        },
        {
          name: "With polynucleotides",
          meta: "£195, or £510 for 3",
          body: "A regenerative serum that helps the skin repair itself, for ageing skin, scarring and skin that has lost its bounce.",
        },
        {
          name: "With exosomes",
          meta: "£195, or £510 for 3",
          body: "The newest option, for intensive repair: settles redness quickly and pushes the renewal further. Often chosen for acne scarring and sensitive, reactive skin.",
        },
      ],
    },
    questions: [
      {
        q: "Does microneedling hurt?",
        a: "Numbing cream is applied before treatment, so most people describe it as mild to moderate: a scratching, vibrating sensation rather than pain. Some areas, like the forehead and upper lip, feel sharper than others.",
      },
      {
        q: "How many sessions will I need?",
        a: "A minimum of three, four to six weeks apart, over three to four months, is recommended for the full result, whether the aim is ageing skin or acne scarring. Once you have the result you want, two or three sessions a year maintain it.",
      },
      {
        q: "What does the skin look like afterwards?",
        a: "Pink to red for 24 to 48 hours, with a little tightness or dryness as it renews. Most people are back to normal, make-up included, within a day or two. Gina will tell you what to use and what to avoid in the first few days.",
      },
      {
        q: "Who is it suitable for?",
        a: "Most people with fine lines, uneven texture, acne scarring, stretch marks or skin laxity. It is not suitable on active acne, infected or broken skin, or during pregnancy. Gina checks your skin and medical history before you start.",
      },
    ],
    closing: {
      heading: "Book microneedling",
      body: "Book a session or a course online, or call or email to ask which serum would suit your skin. About an hour, at 8 Devonshire Street in the centre of Penrith.",
    },
    bookingUrl: "https://coveclinic.collums.co.uk/step/05f5e1010000000000000000/6a68fb4cd708fb35d54a2e37",
  },

  polynucleotides: {
    slug: "polynucleotides",
    name: "Polynucleotides",
    summary: "Regenerative injections that prompt firmer, better-hydrated skin, without added volume.",
    title: "Polynucleotides in Penrith",
    description:
      "Polynucleotide treatment in Penrith: regenerative injections for firmer, better-hydrated skin on the face, eyes, neck and scalp. From £175. Book online.",
    heading: "Polynucleotides.",
    lead: "A regenerative treatment that improves skin quality from within. Purified DNA fragments prompt your skin to make new collagen, hold more water and repair itself: firmer, smoother, better-hydrated skin, rather than added volume.",
    photo: {
      src: "/photos/web/polynucleotides.jpg",
      alt: "A close-up of clear bubbles suspended in oil",
      position: "50% 50%",
    },
    facts: [
      { label: "Time", value: "About 45 minutes" },
      { label: "Price", value: "£175, or £475 for a course of 3" },
      { label: "Course", value: "3, two weeks apart" },
      { label: "Discomfort", value: "Mild to moderate, numbing cream used" },
      { label: "Results", value: "From 4 to 8 weeks, improving for up to 9 months" },
      { label: "Maintain", value: "A top-up every 6 to 8 months" },
      { label: "Downtime", value: "Redness or small bumps for 24 to 48 hours" },
    ],
    sections: [
      {
        title: "What are polynucleotides?",
        body: "Fragments of purified DNA, of natural origin, placed in the skin by a series of small injections. They work as a signal rather than a filler: the skin responds by making new collagen and elastin, drawing in and holding water, and calming inflammation. The result is skin that is denser, more elastic and better hydrated, which shows as a firmer, fresher, more even surface. They can also be carried into the skin by microneedling.",
      },
      {
        title: "Who is it for?",
        body: "Anyone whose skin has started to lose its firmness and bounce: fine lines, laxity, crepey texture, dullness, under-eye concerns, sun-damaged neck and chest, stretch marks and thinning hair. It suits people who want to build and keep collagen for the long term rather than treat one line. It also works well alongside dermal filler and anti-wrinkle treatments, as the skin-quality part of a plan, which Gina can put together with you at consultation.",
      },
      {
        title: "What should I expect?",
        body: "Numbing cream goes on first. Afterwards the injection points show as small bumps and a little redness, which settle within 24 to 48 hours. There may be a lifting effect straight away, but the real change comes as the skin rebuilds: visible from four to eight weeks and still improving for up to nine months. A course of three, two weeks apart (four if microneedled), gives the strongest result, with a top-up every six to eight months to keep it.",
      },
    ],
    menu: {
      heading: "Where it can help",
      intro: "Planned to you at consultation, on their own or as part of a wider plan. Each takes about 45 minutes.",
      items: [
        {
          name: "Face",
          meta: "45 minutes",
          body: "Fine lines, laxity and dull, tired skin across the face. Firmer, better-hydrated skin that holds its glow.",
        },
        {
          name: "Under the eyes",
          meta: "45 minutes",
          body: "The delicate skin beneath the eyes, where filler is not always the answer: dark circles, crepey texture and early hollowing.",
        },
        {
          name: "Neck and chest",
          meta: "45 minutes",
          body: "Crepey, sun-exposed skin on the neck and décolletage, which shows age early and responds well to regeneration.",
        },
        {
          name: "Scalp",
          meta: "45 minutes",
          body: "Thinning hair and hair loss. Polynucleotides improve the nourishment of the follicles to support healthier growth.",
        },
      ],
    },
    questions: [
      {
        q: "How is this different from dermal filler?",
        a: "Filler adds volume and shape to a specific area. Polynucleotides add nothing: they prompt the skin to rebuild itself, so the change is in its quality, firmness and hydration across the treated area. The two are often used together, with polynucleotides as the skin-quality part of the plan.",
      },
      {
        q: "How many treatments will I need?",
        a: "A course of three is recommended, two weeks apart when injected or four weeks apart when microneedled, because the effect builds with each session. After that a single top-up every six to eight months maintains the result.",
      },
      {
        q: "When will I see results?",
        a: "Some people notice a lift straight after treatment, but the regenerative change takes time: visible from four to eight weeks as the new collagen forms, and continuing to improve for up to nine months.",
      },
      {
        q: "Is there any downtime?",
        a: "Very little. Small bumps at the injection points and some redness settle within a day or two, and occasionally there is a small bruise. Most people go straight back to their day. Gina will tell you what to avoid in the first 24 hours.",
      },
    ],
    closing: {
      heading: "Book polynucleotides",
      body: "Book a single treatment or a course online, or call or email to ask whether polynucleotides are right for you. About 45 minutes, at 8 Devonshire Street in the centre of Penrith.",
    },
    bookingUrl: "https://coveclinic.collums.co.uk/step/05f5e1010000000000000000/67c746bb50d51700254e734d",
  },

  // Fillers are planned to the face, so the page sends people to a consultation.
  // The booking system has no filler services listed; prices are given at consultation.
  "dermal-fillers": {
    slug: "dermal-fillers",
    name: "Dermal fillers",
    summary: "Hyaluronic acid filler to restore volume and definition, placed with restraint.",
    title: "Dermal Fillers in Penrith",
    description:
      "Dermal fillers in Penrith by a registered nurse: cheeks, chin, jawline, lips and lines, planned to your face for a natural result. Starts with a consultation.",
    heading: "Dermal fillers.",
    lead: "Hyaluronic acid filler to restore what time takes away: volume in the cheeks, definition in the chin and jaw, softness in deep lines, shape in the lips. Placed with restraint, so the change is in how well you look, not how different.",
    photo: {
      src: "/photos/web/dermal-fillers.jpg",
      alt: "Gina carrying out a dermal filler treatment at Cove Clinic in Penrith",
      position: "50% 40%",
    },
    facts: [
      { label: "First", value: "A consultation to plan it" },
      { label: "Time", value: "About an hour" },
      { label: "Discomfort", value: "Mild to moderate, numbing cream used" },
      { label: "Results", value: "Immediate, settled at two weeks" },
      { label: "Lasts", value: "Typically 12 to 18 months" },
      { label: "Downtime", value: "Swelling or bruising for a few days" },
      { label: "Price", value: "Confirmed at your consultation" },
    ],
    sections: [
      {
        title: "What are dermal fillers?",
        body: "A smooth gel of hyaluronic acid, a substance the skin makes itself to stay plump and hydrated, and makes less of with age. Placed beneath the skin, filler restores lost volume, supports the structure of the face and softens lines and folds. Gina uses the Teoxane range, whose fillers come in different textures for different jobs: soft for lips and lines, firmer for cheeks and jawline. Being hyaluronic acid, it can be dissolved if ever needed.",
      },
      {
        title: "How does Gina plan it?",
        body: "By looking at the whole face, not the one area you came in about. Faces age by losing support in a few key places, and restoring those, often with less filler than people expect, is what makes a result look natural. Everything starts at a consultation: Gina assesses your proportions, listens to what you want, and plans where filler would help and where it would not. Treatment is for adults only.",
      },
      {
        title: "What should I expect afterwards?",
        body: "You see the change straight away, with some swelling and perhaps a bruise for a few days, then the final result as it settles at around two weeks. For the first day, avoid heavy exercise, heat and alcohol. Gina reviews you at two weeks and makes any adjustment then. Results typically last twelve to eighteen months, longer with repeat treatment, and fade gradually rather than suddenly.",
      },
    ],
    menu: {
      heading: "Where it can help",
      intro: "Planned together at consultation, so each area complements the rest.",
      items: [
        {
          name: "Lips",
          meta: "Shape and volume",
          body: "Definition, balance and a natural fullness, from a subtle refresh to a little more. Hydration as much as size.",
        },
        {
          name: "Cheeks",
          meta: "Lift and contour",
          body: "Restoring the support the mid-face loses with age, which lifts the lower face and softens lines beneath.",
        },
        {
          name: "Chin and jawline",
          meta: "Balance and definition",
          body: "A sharper jawline, a stronger or better-balanced chin, and a smoother line from ear to chin.",
        },
        {
          name: "Temples",
          meta: "Hollowing",
          body: "Filling the hollows at the temples that make the upper face look drawn, for a softer, more rested look.",
        },
        {
          name: "Lines and folds",
          meta: "Softening",
          body: "The deeper lines around the nose and mouth, softened rather than erased, so expression stays.",
        },
        {
          name: "Nose",
          meta: "Non-surgical rhinoplasty",
          body: "Smoothing a bump or lifting the tip with small amounts of filler, for a straighter profile without surgery.",
        },
      ],
    },
    questions: [
      {
        q: "Will it look natural?",
        a: "Yes, if it is done with restraint and a good eye for proportion. Gina's approach is to restore what has been lost rather than add what was never there, and to treat the face as a whole. Overfilled is not a look anyone leaves with.",
      },
      {
        q: "Does it hurt?",
        a: "Most people find it very manageable. Numbing cream goes on before treatment, many fillers contain a local anaesthetic, and Gina can offer further options for comfort where an area needs it.",
      },
      {
        q: "How long does it last?",
        a: "Typically twelve to eighteen months, depending on the area, the product and how quickly your body breaks it down. Lips tend to be shorter, cheeks and chin longer. With repeat treatment results often last longer, as less is needed each time.",
      },
      {
        q: "What if I don't like the result?",
        a: "Talk to Gina. A review at two weeks is part of the treatment, and small adjustments are made then. Hyaluronic acid filler can also be dissolved if ever needed, which is one reason it is the only kind used here.",
      },
    ],
    closing: {
      heading: "Start with a consultation",
      body: "Filler is planned to your face, so it starts with a conversation. Book a consultation online, or call or email to arrange one with Gina at 8 Devonshire Street in the centre of Penrith.",
    },
    // The booking system lists no filler services yet; the owner wants the link live regardless (15 Oct 2026).
    bookingUrl: "https://coveclinic.collums.co.uk/step/05f5e1010000000000000000/66fbb62a40250c002508d297",
  },

  "lip-enhancement": {
    slug: "lip-enhancement",
    name: "Lip enhancement",
    summary: "Definition, balance and natural fullness, from a subtle refresh to a little more.",
    title: "Lip Fillers in Penrith | Lip Enhancement",
    description:
      "Lip filler in Penrith with a light touch: definition, balance and natural fullness, by a registered nurse. Lasts 12 to 18 months. Starts with a consultation.",
    heading: "Lip enhancement.",
    lead: "Hyaluronic acid lip filler with a light touch: definition, balance and a natural fullness that suits your face, from a barely-there refresh to a little more. Planned with you at consultation.",
    photo: {
      src: "/photos/web/lip-enhancement.jpg",
      alt: "A close-up of softly glossed lips",
      position: "50% 50%",
    },
    facts: [
      { label: "First", value: "A consultation to plan it" },
      { label: "Time", value: "About an hour" },
      { label: "Discomfort", value: "Mild, numbing cream used" },
      { label: "Results", value: "Immediate, settled at two weeks" },
      { label: "Lasts", value: "Typically 12 to 18 months" },
      { label: "Downtime", value: "Swelling for a few days" },
      { label: "Price", value: "Confirmed at your consultation" },
    ],
    sections: [
      {
        title: "What is lip enhancement?",
        body: "Hyaluronic acid filler placed in and around the lips. It is about more than size: the shape of the border, the balance between upper and lower lip, the fine lines around the mouth, and hydration, so lips look soft rather than stretched. Gina uses Teoxane's lip fillers, from the RHA and Puresense ranges, which are made to move with the lips so they look natural when you talk and smile, not only at rest.",
      },
      {
        title: "How much do I need?",
        body: "Less than most people expect. The aim is lips that suit your face, and that usually means starting with a modest amount and building up over later visits if you want more. At your consultation Gina looks at your lips in proportion to the rest of your face, listens to what you would like, and recommends an amount. For lips that have thinned or lost definition with age, the work is restoration rather than enlargement.",
      },
      {
        title: "What should I expect afterwards?",
        body: "Swelling straight away, most of it in the first day or two, settling over a few days, with the final shape at around two weeks. A small bruise is possible and easily covered. For the first day, avoid heat, heavy exercise and alcohol. Gina reviews you at two weeks and makes any small adjustment then. Results typically last twelve to eighteen months and fade gradually, and the filler can be dissolved if ever needed.",
      },
    ],
    menu: {
      heading: "Ways to enhance",
      intro: "One treatment, planned to what you want from it. Most people want a little of more than one.",
      items: [
        {
          name: "Definition",
          meta: "Border and shape",
          body: "A crisper border, a defined cupid's bow and a smoother outline, with little or no added volume.",
        },
        {
          name: "Volume",
          meta: "Natural fullness",
          body: "Softly fuller lips that still look like yours, built up gradually over visits if you want more.",
        },
        {
          name: "Balance",
          meta: "Proportion",
          body: "Evening out an uneven lip, or the balance between upper and lower, so the mouth sits in harmony with the face.",
        },
        {
          name: "Refresh",
          meta: "Hydration and lines",
          body: "For lips that have thinned or dried with age, and the fine lines around the mouth: hydration and softness back, without obvious volume.",
        },
      ],
    },
    questions: [
      {
        q: "Will my lips look natural?",
        a: "Yes. The plan is always for lips in proportion to your face, with filler that moves naturally when you speak and smile. Gina would rather you came back for a little more than left with too much.",
      },
      {
        q: "Does lip filler hurt?",
        a: "Lips are sensitive, so numbing cream goes on before treatment and the filler itself contains a local anaesthetic. Most people describe it as a few sharp moments rather than pain, and it is over quickly.",
      },
      {
        q: "How long does it last?",
        a: "Typically twelve to eighteen months, though lips move a lot and some people find it shorter. It fades gradually rather than disappearing, and a top-up before it has gone completely often needs less filler.",
      },
      {
        q: "What if I don't like the result?",
        a: "Talk to Gina. The swelling of the first few days is not the result, so wait for the two-week review, when small adjustments are made. If something needs to change, hyaluronic acid filler can be dissolved.",
      },
    ],
    closing: {
      heading: "Start with a consultation",
      body: "Lip filler is planned to your face, so it starts with a conversation. Book a consultation online, or call or email to arrange one with Gina at 8 Devonshire Street in the centre of Penrith.",
    },
    bookingUrl: "https://coveclinic.collums.co.uk/step/05f5e1010000000000000000/66fbb62a40250c002508d297",
  },

  "skin-boosters": {
    slug: "skin-boosters",
    name: "Skin boosters",
    summary: "Injectable hyaluronic acid for deep hydration and glow on the face, neck, chest and hands.",
    title: "Skin Boosters in Penrith",
    description:
      "Skin boosters in Penrith: injectable hyaluronic acid for deep hydration and glow on the face, neck, chest and hands. £145, or £395 for three. Book online.",
    heading: "Skin boosters.",
    lead: "Injectable hyaluronic acid that hydrates the skin from within: a long drink of water for dull, dehydrated or crepey skin on the face, neck, décolletage and hands. A glow that builds over a course of three.",
    photo: {
      src: "/photos/web/skin-boosters.jpg",
      alt: "A drop of clear serum falling from a glass dropper",
      position: "50% 50%",
    },
    facts: [
      { label: "Time", value: "About 30 minutes" },
      { label: "Price", value: "£145, or £395 for a course of 3" },
      { label: "Course", value: "3, a month apart" },
      { label: "Discomfort", value: "Minimal, numbing cream used" },
      { label: "Results", value: "From 1 to 2 weeks, best after a course" },
      { label: "Maintain", value: "A course once or twice a year" },
      { label: "Downtime", value: "Small bumps settle within 24 to 48 hours" },
    ],
    sections: [
      {
        title: "What are skin boosters?",
        body: "A soft, runny form of hyaluronic acid placed just beneath the skin through a handful of injection points across the area. Hyaluronic acid holds many times its weight in water, so once in the skin it works like a sponge, drawing moisture in and keeping it there, while prompting the skin to make fresh collagen and elastin. Unlike filler it adds no shape or volume; unlike a cream it works beneath the surface, where dehydration starts.",
      },
      {
        title: "What can they help with?",
        body: "Dull, tired and chronically dehydrated skin first of all. Then the things that come with it: fine, early lines on the forehead, lower face and around the mouth, crepey texture on the neck, décolletage and hands, mild loss of firmness, enlarged pores and minor scarring, and the fine lines and shadows under the eyes. Healthy, hydrated skin is also the foundation for other treatments, and improves the result of dermal filler.",
      },
      {
        title: "What should I expect?",
        body: "Numbing cream goes on first, and the treatment itself takes about half an hour. Afterwards the injection points show as small bumps while the product disperses, which takes a day or two, and there may be the occasional small bruise. The glow comes in over one to two weeks and builds with each session, so a course of three, a month apart, is recommended, then a course once or twice a year depending on how thirsty your skin is.",
      },
    ],
    menu: {
      heading: "Where it can help",
      intro: "Planned to your skin at consultation. Each area takes about half an hour.",
      items: [
        {
          name: "Face",
          meta: "Hydration and glow",
          body: "Dull, dehydrated or tired skin across the face, and the fine lines that come with it. The most common place to start.",
        },
        {
          name: "Neck and décolletage",
          meta: "Crepey skin",
          body: "Thin, crepey, sun-exposed skin that shows age early and responds well to hydration from within.",
        },
        {
          name: "Hands",
          meta: "Thinning skin",
          body: "The backs of the hands, where the skin thins and dries with age. Plumper, smoother skin without adding volume.",
        },
        {
          name: "Under the eyes",
          meta: "Fine lines and shadows",
          body: "Light hydration for the delicate skin beneath the eyes, for fine lines, mild puffiness and dark circles.",
        },
      ],
    },
    questions: [
      {
        q: "How is this different from dermal filler?",
        a: "Filler is a firmer gel placed to restore volume or shape in one spot. Skin boosters are a much softer hyaluronic acid spread thinly across an area to hydrate and improve the skin itself. The two are often used together: boosters for the quality of the skin, filler for its structure.",
      },
      {
        q: "How many treatments will I need?",
        a: "A course of three, a month apart, gives the best result, because the hydration and the collagen response build with each session. After that, most people have a course once or twice a year.",
      },
      {
        q: "When will I see results?",
        a: "Skin looks fresher within one to two weeks of the first session, with the full effect after the course. The result is in the quality of the skin, which is why people tend to say you look well rather than ask what you have had done.",
      },
      {
        q: "Is there any downtime?",
        a: "Very little. The small bumps at the injection points settle within 24 to 48 hours as the product disperses, and any bruise is small and easily covered. You can go straight back to your day; just avoid heat, heavy exercise and make-up on the area for the first day.",
      },
    ],
    closing: {
      heading: "Book skin boosters",
      body: "Book a single treatment or a course online, or call or email to ask whether skin boosters are right for your skin. About half an hour, at 8 Devonshire Street in the centre of Penrith.",
    },
    bookingUrl: "https://coveclinic.collums.co.uk/step/05f5e1010000000000000000/6a68f9c9d708fb35d54a26f7",
  },

  prp: {
    slug: "prp",
    name: "PRP",
    summary: "Your own growth factors, returned to the skin or scalp, for skin quality and thinning hair.",
    title: "PRP Therapy in Penrith | Skin & Hair",
    description:
      "PRP therapy in Penrith: your own growth factors for skin rejuvenation, acne scarring and thinning hair, by a registered nurse. From £170. Book online.",
    heading: "PRP therapy.",
    lead: "Platelet-rich plasma: a concentrate of your own blood's growth factors, returned to the skin or scalp to prompt repair. For skin quality, acne scarring and stretch marks, and for thinning hair. Nothing in it but you.",
    photo: {
      src: "/photos/web/prp.jpg",
      alt: "Gina working at a client's hairline during a treatment at Cove Clinic in Penrith",
      position: "50% 60%",
    },
    facts: [
      { label: "Time", value: "About an hour" },
      { label: "Price", value: "£170, or £450 for a course of 3" },
      { label: "Course", value: "3 for skin, 6 for hair, a month apart" },
      { label: "Discomfort", value: "Mild, numbing cream used" },
      { label: "Results", value: "From 4 to 8 weeks, improving for up to 9 months" },
      { label: "Maintain", value: "A session every 6 months" },
      { label: "Downtime", value: "Redness for up to 24 hours" },
    ],
    sections: [
      {
        title: "How does PRP work?",
        body: "A small sample of your blood, taken like an ordinary blood test, is spun in a centrifuge to separate the platelets and plasma from the red cells. Platelets carry the growth factors the body uses to heal, so the concentrate that is left is a repair signal made entirely from you. For the skin it is carried in by microneedling; for hair it is injected into the scalp. Either way, the tissue responds with new collagen, elastin and blood supply.",
      },
      {
        title: "What can it help with?",
        body: "On the face: fine lines, dull or uneven skin, rough texture, acne scarring and stretch marks. On the scalp: thinning hair and a receding hairline, by feeding the follicles that are still there. Because there is nothing in it but your own blood, the risks are minimal and it suits almost everyone. For hair, Gina will tell you at consultation whether PRP is likely to help, since it needs living follicles to work on.",
      },
      {
        title: "What should I expect?",
        body: "The blood draw first, then numbing cream while your sample is spun. The treatment itself is comfortable. Afterwards the skin is pink, and injection points may show, for up to a day. Results come as the tissue repairs: visible from four to eight weeks and still improving for up to nine months. Skin needs a course of three and hair a course of six, a month apart, then a session every six months or so to maintain.",
      },
    ],
    menu: {
      heading: "Two ways to use it",
      intro: "The same preparation, put to work in two places.",
      items: [
        {
          name: "Skin",
          meta: "With microneedling",
          body: "PRP applied during microneedling, so the growth factors reach the deeper skin where new collagen forms. For texture, fine lines, dullness, acne scarring and stretch marks. A course of three.",
        },
        {
          name: "Hair and scalp",
          meta: "Injected into the scalp",
          body: "A series of small injections across the thinning area to strengthen the follicles and support thicker growth. For early thinning and a receding hairline. A course of six.",
        },
      ],
    },
    questions: [
      {
        q: "Is PRP safe?",
        a: "It is one of the safest treatments in the clinic, because it is made from your own blood: there is nothing to react to and nothing foreign in it. The risks are the small ones of any injection, such as a little bruising. Gina takes a medical history first all the same.",
      },
      {
        q: "Does it hurt?",
        a: "The blood draw feels like a blood test. Numbing cream is applied before the treatment, so the microneedling or scalp injections are mild: a scratching or pressure sensation rather than pain.",
      },
      {
        q: "How many treatments will I need?",
        a: "For skin concerns such as ageing, acne scarring or stretch marks, three treatments four weeks apart. For hair, six treatments four weeks apart. After that, a single session every six months keeps the result.",
      },
      {
        q: "Will PRP regrow my hair?",
        a: "It can thicken hair and slow further loss where follicles are still present, which is why it works best on early thinning and a receding hairline rather than on areas that have been bald for years. Gina will be honest at your consultation about what it is likely to do for you.",
      },
    ],
    closing: {
      heading: "Book PRP",
      body: "Book a session or a course online, or call or email to ask whether PRP is right for your skin or your hair. About an hour, at 8 Devonshire Street in the centre of Penrith.",
    },
    bookingUrl: "https://coveclinic.collums.co.uk/step/05f5e1010000000000000000/6a6a021bd708fb35d54ae0f2",
  },
};

export const treatmentSlugs = Object.keys(treatmentPages);
