// All the written content of the website lives here.
// To change text, prices or add a new area, edit this file only. No need to touch the pages.
// NOTE: Vision, mission, values and other company copy below is draft text. Replace it with your own.

import type { IconType } from "react-icons";
import {
  FiAward,
  FiBarChart2,
  FiCompass,
  FiCreditCard,
  FiEye,
  FiFileText,
  FiFlag,
  FiHeart,
  FiHome,
  FiMapPin,
  FiShield,
  FiTarget,
  FiTrendingUp,
  FiUsers,
} from "react-icons/fi";

/* ------------------------------------------------------------------ */
/* Locations                                                           */
/* ------------------------------------------------------------------ */

export type Location = {
  name: string;
  group: "Established" | "Mid-range" | "Growth";
  /** Price per sq ft (carpet area), in rupees. Indicative asking prices. */
  minPrice: number;
  maxPrice: number;
  bestFor: string;
  why: string;
  watchOut: string;
};

// NOTE: These are indicative asking prices collected from property portals and market reports
// (around Oct 2026). Real prices change by project, floor and view. Review this list every
// few months and update the numbers.
export const locations: Location[] = [
  {
    name: "Vashi",
    group: "Established",
    minPrice: 28000,
    maxPrice: 32000,
    bestFor: "Families who want to live there, steady resale demand",
    why: "Navi Mumbai's oldest and most complete node. Rail, schools, hospitals and markets are all in place, and it is the closest to Mumbai.",
    watchOut: "Highest prices in the city and buildings are older. Fewer new launches, so expect higher cost for newer flats.",
  },
  {
    name: "Nerul",
    group: "Established",
    minPrice: 26000,
    maxPrice: 30000,
    bestFor: "Self-use buyers, long-term holding",
    why: "Well planned, green and quiet, with good rail connectivity and Palm Beach Road nearby for quick trips to Mumbai and Thane.",
    watchOut: "Price per sq ft is high, so rental yield is lower compared to the money invested.",
  },
  {
    name: "CBD Belapur",
    group: "Established",
    minPrice: 22000,
    maxPrice: 26000,
    bestFor: "Working professionals, rental income from office-goers",
    why: "A business district with many offices, and the starting point of Navi Mumbai Metro Line 1.",
    watchOut: "Good projects sell fast. Check the age and condition of older buildings.",
  },
  {
    name: "Airoli",
    group: "Mid-range",
    minPrice: 20000,
    maxPrice: 23500,
    bestFor: "IT professionals, rental demand",
    why: "Close to the IT parks of the Thane-Belapur belt and has quick road access to Mulund and Thane.",
    watchOut: "Traffic on the Thane-Belapur road at peak hours. Visit on a weekday morning before deciding.",
  },
  {
    name: "Kharghar",
    group: "Mid-range",
    minPrice: 16500,
    maxPrice: 19500,
    bestFor: "Self-use plus good long-term growth",
    why: "Wide roads, open space, and Metro Line 1 stations. A popular choice for families who want a bigger home for their budget.",
    watchOut: "Many projects compete here, so builder track record matters more than the location name.",
  },
  {
    name: "Ulwe",
    group: "Growth",
    minPrice: 14000,
    maxPrice: 17000,
    bestFor: "Investors with a 5 to 10 year view",
    why: "Next to the new Navi Mumbai International Airport and the Atal Setu (Mumbai Trans Harbour Link) road, with a rail link on the Seawoods-Uran line.",
    watchOut: "Social infrastructure is still catching up and much of the price already reflects the airport. Do not buy only on hype.",
  },
  {
    name: "Panvel",
    group: "Growth",
    minPrice: 12500,
    maxPrice: 15000,
    bestFor: "Budget buyers, investors who want entry at a lower price",
    why: "A major rail and road junction toward Pune and Konkan, close to the airport, with plenty of options for 1 and 2 BHK homes.",
    watchOut: "Large area with big differences between pockets. Always check distance to the station and the main road.",
  },
  {
    name: "Kamothe",
    group: "Growth",
    minPrice: 11000,
    maxPrice: 14000,
    bestFor: "First-time buyers on a tight budget",
    why: "Affordable, on the Harbour rail line side with road access to the Sion-Panvel highway.",
    watchOut: "Daily travel to Mumbai is long. Check the distance to the station before booking.",
  },
  {
    name: "Taloja",
    group: "Growth",
    minPrice: 9000,
    maxPrice: 12000,
    bestFor: "Lowest entry price, buyers working in the MIDC area",
    why: "Industrial area with the end of Metro Line 1 at Pendhar, and many new townships.",
    watchOut: "Fewer shops and schools for now, and some pockets are far from main roads.",
  },
  {
    name: "Dronagiri / Uran",
    group: "Growth",
    minPrice: 10000,
    maxPrice: 12500,
    bestFor: "Long-term investors who can wait",
    why: "Near JNPT port and the Atal Setu landing point. Gets benefit from port and logistics growth.",
    watchOut: "Prices have moved up and down in the past, and it will take years for the area to fill up. Keep a long holding period in mind.",
  },
];

// Flat size used to show an approximate 2 BHK price on the Locations page
export const TWO_BHK_CARPET_SQFT = 650;

/* ------------------------------------------------------------------ */
/* Services                                                            */
/* ------------------------------------------------------------------ */

export type Service = {
  title: string;
  text: string;
  points: string[];
  icon: IconType;
  color: string; // pastel background of the icon box
  href: string; // where the "Learn more" link goes
};

export const services: Service[] = [
  {
    title: "Investment guidance",
    text: "Should you buy to live, to rent, or to hold for growth? We help you pick a goal and size your budget around it.",
    points: ["Goal and budget planning", "Ready vs under-construction advice", "Rental and resale outlook"],
    icon: FiTrendingUp,
    color: "bg-sage",
    href: "/contact",
  },
  {
    title: "Location advice",
    text: "Kharghar, Ulwe, Panvel, Vashi or Airoli? We compare areas on price, travel time and future growth.",
    points: ["Area-wise comparison", "Travel and daily-need checks", "Growth pockets to watch"],
    icon: FiMapPin,
    color: "bg-sky",
    href: "/services#areas",
  },
  {
    title: "Price check",
    text: "Know what a fair price per sq ft looks like, so you can spot an overpriced offer quickly.",
    points: ["Price per sq ft by area", "Extra costs explained", "Negotiation guidance"],
    icon: FiBarChart2,
    color: "bg-sand",
    href: "/services#areas",
  },
  {
    title: "Home loan help",
    text: "We explain eligibility, EMI and documents, and guide you to a loan that suits your income.",
    points: ["Eligibility check", "EMI planning", "Document checklist"],
    icon: FiCreditCard,
    color: "bg-blush",
    href: "/services#loans",
  },
  {
    title: "Paperwork guidance",
    text: "A clear checklist for RERA, title, agreement and registration, to go through with your lawyer.",
    points: ["MahaRERA project check", "Title and approvals checklist", "Stamp duty and registration"],
    icon: FiFileText,
    color: "bg-lavender",
    href: "/contact",
  },
  {
    title: "After-purchase support",
    text: "Buying is not the end. We help you think about renting out or reselling when the time is right.",
    points: ["Renting out your flat", "When to sell", "Portfolio review"],
    icon: FiHome,
    color: "bg-sage",
    href: "/contact",
  },
];

/* ------------------------------------------------------------------ */
/* About                                                               */
/* ------------------------------------------------------------------ */

export const vmg = [
  {
    title: "Our Vision",
    text: "To be the most trusted real estate advisory in Navi Mumbai, helping every family and investor make confident property decisions.",
    icon: FiEye,
    color: "bg-sky",
  },
  {
    title: "Our Mission",
    text: "To give clear, honest and practical guidance on where to buy, what to pay and how to fund it, so our clients invest with confidence.",
    icon: FiTarget,
    color: "bg-sage",
  },
  {
    title: "Our Goal",
    text: "To help clients build lasting value through well-researched decisions, and to grow across the Mumbai Metropolitan Region over time.",
    icon: FiFlag,
    color: "bg-blush",
  },
];

export const values = [
  { title: "Integrity", text: "We tell you the risks as clearly as the upside.", icon: FiShield },
  { title: "Clarity", text: "Simple language, clear numbers, no hidden costs.", icon: FiCompass },
  { title: "Care", text: "Your home is personal. We treat it that way.", icon: FiHeart },
  { title: "Long-term thinking", text: "We look at where an area will be in ten years.", icon: FiAward },
];

export const audiences = [
  "First-time home buyers",
  "Investors building a portfolio",
  "Families upgrading their home",
  "Working professionals",
];

export const whyZenvara = [
  {
    title: "Navi Mumbai focus",
    text: "We follow each node, from Vashi to Panvel, so our advice is specific and not generic.",
    icon: FiMapPin,
  },
  {
    title: "Honest advice",
    text: "No hype and no pressure. Sometimes the right advice is to wait.",
    icon: FiShield,
  },
  {
    title: "End-to-end support",
    text: "Budget, area, loan and paperwork checklist, all in one place.",
    icon: FiUsers,
  },
  {
    title: "Clear numbers",
    text: "Price per sq ft, EMI and extra costs are shown upfront.",
    icon: FiBarChart2,
  },
];

export const processSteps = [
  { title: "Free first call", text: "Tell us your income, savings and what you want from the property." },
  { title: "Budget and goal plan", text: "We work out what you can safely spend, including EMI and extra costs." },
  { title: "Area shortlist", text: "You get 2 or 3 suitable areas with price ranges and reasons." },
  { title: "Loan pre-check", text: "We guide you on eligibility and documents before you sign anything." },
  { title: "Checks and decision", text: "A checklist for RERA, title and agreement, so you decide with confidence." },
];

export const faqs = [
  {
    q: "Is Navi Mumbai a good place to invest?",
    a: "It has strong infrastructure, from the new airport to the sea link and metro. Average prices there rose about 22% over the five years to 2025 according to one analytics estimate. But returns are never guaranteed, and rental yield is usually modest (about 2 to 4% a year), so most of the gain comes from price growth over several years.",
  },
  {
    q: "How much cash do I need to buy a flat?",
    a: "Banks usually fund 75 to 90% of the price, so your down payment is 10 to 25%. Add stamp duty, registration and other costs of around 7 to 9%. As a rough rule, keep about 20 to 30% of the property price ready in cash.",
  },
  {
    q: "Which area is best for a small budget?",
    a: "Taloja, Kamothe, Panvel and Ulwe have the lowest prices per sq ft. Check travel time to your workplace first, because a cheap flat that costs you three hours a day is not cheap.",
  },
  {
    q: "Should I buy a ready flat or under construction?",
    a: "Ready flats cost more, but you see exactly what you get and can start renting immediately. Under-construction flats cost less and have staged payments, but carry delay risk and 5% GST on most homes.",
  },
  {
    q: "Are the prices on your website exact?",
    a: "No. They are indicative asking prices per sq ft of carpet area. Real prices change by project, floor and view. Contact us for the latest range before you decide.",
  },
];

/* ------------------------------------------------------------------ */
/* Loan section                                                        */
/* ------------------------------------------------------------------ */

export const loanFactors = [
  { title: "Credit score", text: "A CIBIL score of 750 or above gets the best rates." },
  { title: "Income and EMIs", text: "All your EMIs together should stay within about 40 to 50% of income." },
  { title: "Age and job stability", text: "Younger borrowers get longer tenures. Business owners need 2 to 3 years of returns." },
  { title: "Loan-to-value limit", text: "Banks lend up to 90% (loans up to ₹30 lakh), 80% (₹30 to 75 lakh) and 75% (above ₹75 lakh)." },
];

export const salariedDocs = [
  "PAN and Aadhaar",
  "Last 3 months salary slips",
  "Last 6 months bank statements",
  "Form 16 or last 2 years ITR",
  "Property papers",
];

export const businessDocs = [
  "PAN and Aadhaar",
  "Last 2 to 3 years ITR",
  "Profit and loss, balance sheet",
  "Last 12 months bank statements",
  "Business proof and property papers",
];
