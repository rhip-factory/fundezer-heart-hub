export type Campaign = {
  id: string;
  name: string;
  shortName: string;
  condition: string;
  hospital: string;
  location: string;
  raised: number;
  target: number;
  stage: string;
  update: string;
  updateDate: string;
  image: string;
  category: string;
  story: string;
};

export type Donation = {
  id: string;
  date: string;
  amount: number;
  campaignId: string;
  type: "One-time" | "Recurring";
  status: "Completed" | "Active";
  visibility: "Public" | "Anonymous" | "Private";
  method: string;
  impact: string;
};

export const formatNaira = (value: number) =>
  `₦${value.toLocaleString("en-NG", { maximumFractionDigits: 0 })}`;

export const campaigns: Campaign[] = [
  {
    id: "amina",
    name: "Help Amina K. Access Urgent Cancer Treatment",
    shortName: "Amina's Treatment",
    condition: "Cancer treatment",
    hospital: "Lagos University Teaching Hospital",
    location: "Lagos",
    raised: 740000,
    target: 1000000,
    stage: "Assessment completed",
    update: "Patient has completed her assessment and the next stage of treatment is underway.",
    updateDate: "22 Aug 2026",
    image: "/src/assets/campaign-amina.jpg",
    category: "Urgent",
    story:
      "Amina is a young professional taking a courageous step toward the care she needs. Her approved treatment plan includes diagnostic investigations and specialist cancer care.",
  },
  {
    id: "david",
    name: "Support David O. Through Emergency Surgery",
    shortName: "David's Surgery",
    condition: "Emergency surgery",
    hospital: "National Hospital Abuja",
    location: "Abuja",
    raised: 415000,
    target: 650000,
    stage: "Treatment plan confirmed",
    update: "David's care team has confirmed his treatment plan and is preparing for the next stage.",
    updateDate: "19 Aug 2026",
    image: "/src/assets/campaign-amina.jpg",
    category: "Recently Verified",
    story:
      "David's family is rallying around his approved care plan. Contributions will help cover the surgical care and hospital support outlined by his care team.",
  },
  {
    id: "chioma",
    name: "Help Chioma A. Access Maternal Care",
    shortName: "Chioma's Maternal Care",
    condition: "Maternal care",
    hospital: "University College Hospital",
    location: "Ibadan",
    raised: 280000,
    target: 400000,
    stage: "Awaiting treatment",
    update: "The campaign has reached a key funding milestone and care coordination is in progress.",
    updateDate: "16 Aug 2026",
    image: "/src/assets/campaign-amina.jpg",
    category: "Nearly Funded",
    story:
      "Chioma's approved story is shared with care and consent. The campaign supports maternal care and the hospital services needed for a safe next step.",
  },
  {
    id: "kemi",
    name: "Help Kemi R. Continue Kidney Care",
    shortName: "Kemi's Kidney Care",
    condition: "Kidney care",
    hospital: "University of Nigeria Teaching Hospital",
    location: "Enugu",
    raised: 520000,
    target: 900000,
    stage: "Treatment in progress",
    update: "The care team has shared a privacy-safe update: treatment is continuing as planned.",
    updateDate: "12 Aug 2026",
    image: "/src/assets/campaign-amina.jpg",
    category: "Recommended",
    story:
      "Kemi's campaign helps sustain a continuing care plan. Only approved public information is shared with donors.",
  },
];

export const donations: Donation[] = [
  { id: "FE-260822-1842", date: "22 Aug 2026", amount: 25000, campaignId: "amina", type: "One-time", status: "Completed", visibility: "Private", method: "FundEzer Wallet", impact: "Helped fund diagnostic investigations" },
  { id: "FE-260801-7718", date: "01 Aug 2026", amount: 25000, campaignId: "david", type: "Recurring", status: "Active", visibility: "Anonymous", method: "Visa ending 2048", impact: "Supporting emergency surgical care" },
  { id: "FE-260715-3310", date: "15 Jul 2026", amount: 50000, campaignId: "chioma", type: "One-time", status: "Completed", visibility: "Public", method: "Bank transfer", impact: "Supported maternal care coordination" },
  { id: "FE-260601-9021", date: "01 Jun 2026", amount: 25000, campaignId: "kemi", type: "Recurring", status: "Active", visibility: "Private", method: "Visa ending 2048", impact: "Helped sustain treatment in progress" },
];

export const walletTransactions = [
  { id: "WAL-0812-334", date: "12 Aug 2026", label: "Wallet funding", reference: "Card •••• 2048", amount: 25000, kind: "credit", balance: 75000, status: "Completed" },
  { id: "WAL-0808-120", date: "08 Aug 2026", label: "Gift to Chioma's Maternal Care", reference: "Campaign donation", amount: 10000, kind: "debit", balance: 50000, status: "Completed" },
  { id: "WAL-0804-889", date: "04 Aug 2026", label: "Gift to David's Surgery", reference: "Campaign donation", amount: 20000, kind: "debit", balance: 60000, status: "Completed" },
  { id: "WAL-0801-441", date: "01 Aug 2026", label: "Wallet funding", reference: "Bank transfer", amount: 50000, kind: "credit", balance: 80000, status: "Completed" },
];

export const notifications = [
  { id: "1", title: "Your gift is making progress", body: "Amina's Treatment has reached 74% funding.", time: "2 hours ago", type: "Campaign update", unread: true },
  { id: "2", title: "Recurring contribution processed", body: "Your ₦25,000 monthly gift was sent to David's Surgery.", time: "Yesterday", type: "Recurring contribution", unread: true },
  { id: "3", title: "Wallet funded", body: "₦25,000 was added to your donor wallet.", time: "12 Aug 2026", type: "Wallet funded", unread: false },
  { id: "4", title: "Treatment milestone reached", body: "Diagnostic investigations for Amina have been completed.", time: "10 Aug 2026", type: "Treatment milestone", unread: false },
];

export const getCampaign = (id: string) => campaigns.find((campaign) => campaign.id === id) ?? campaigns[0];
export const getCampaignName = (id: string) => getCampaign(id).shortName;
