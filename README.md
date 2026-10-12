# Fundezer Donor Portal

Build the FundEzer Donor Portal — Frontend MVP

You are a senior product designer and frontend engineer. Build a polished, production-quality FundEzer Donor Portal as a frontend-only MVP.

1. Product Context

FundEzer is a healthcare fundraising platform connecting patients who need treatment with donors who want to support verified healthcare campaigns.

This task is specifically to build the dedicated donor portal.

The donor portal must NOT feel like an ordinary donation checkout page. It should feel like a complete personal space where a donor can:

Discover verified healthcare campaigns

Make donations

See where their money went

Track the impact of their donations

Follow treatment/campaign updates

Manage recurring giving

Manage their donor wallet

View transaction history

See milestones and recognition

Receive notifications

Manage their donor profile and preferences

The backend/payment infrastructure does not need to be implemented yet. Use realistic mock data and frontend state/local storage where appropriate, but make the interface and interactions behave as though the backend exists.

The architecture should make it easy to connect a real API/backend later.

The requirements document explicitly establishes the donor impact dashboard, donor milestones, recurring donor profile, donor wallet, wallet transaction history, wallet-to-campaign donations and wallet notifications as MVP functionality.

2. Core Product Principle

The donor experience should communicate:

"My donation actually made a difference, and FundEzer helps me see that difference."

The portal should therefore prioritize:

Trust

Transparency

Impact

Convenience

Emotional connection

Privacy

Repeat giving

Do NOT make it feel like a gambling/rewards app.

Donor recognition should feel meaningful and humanitarian rather than commercial.

3. Visual Direction

Create a modern, premium healthcare-fintech experience.

Design characteristics:

Clean

Warm

Trustworthy

Human

Modern

Spacious

Highly visual

Professional

Accessible

Emotionally engaging

Avoid:

Generic banking dashboard aesthetics

Excessive gradients

Overly corporate layouts

Cluttered tables

Excessive cards everywhere

Gamification that feels like a game

Dark or depressing medical imagery

Use:

Strong typography

Generous whitespace

High-quality campaign photography

Subtle visual hierarchy

Rounded cards

Clear progress indicators

Meaningful icons

Simple charts

Human-centered microcopy

Soft, trustworthy visual language

The portal should feel closer to a combination of:

modern fintech dashboard + healthcare platform + impact/giving platform

than a conventional hospital website.

4. Application Structure

Create a responsive web application with a persistent donor portal shell.

Desktop navigation:

Dashboard

Discover Campaigns

My Donations

My Impact

Wallet

Recurring Giving

Updates

Notifications

Profile / Settings

Include a prominent:

Give Now

CTA.

On mobile, convert navigation into an appropriate mobile navigation/bottom navigation or drawer.

The donor should always know:

Where they are

How much they have given

What impact they have created

How to make another donation

5. DONOR DASHBOARD

This is the most important screen.

Create a beautiful personalized dashboard.

Header:

Good morning, [Donor Name]

Supporting message:

Your generosity is helping people move closer to the treatment they need.

Hero Impact Summary

Display large metrics such as:

Total Given
₦250,000

Patients Supported
8

Active Campaigns
3

Treatment Milestones
12

Use realistic mock data.

Include a subtle "View my impact" CTA.

Recent Impact Section

Show a prominent impact card:

Your contribution is making a difference.

Example:

You gave: ₦25,000
Campaign: Amina's Treatment
Campaign progress: 74%
Impact: Helped fund diagnostic investigations
Latest update: Patient has completed her assessment.

Include:

View Campaign

and

View Update

buttons.

This directly reflects the FundEzer requirement that donors should see the connection between their contribution and patient impact.

6. ACTIVE CAMPAIGNS

Create an "Your Active Support" section.

Each campaign card should include:

Campaign image

Patient public display name

General condition

Hospital

Amount raised

Target amount

Percentage funded

Treatment stage

Verification badge

Latest update date

Example:

Help Amina K. Access Urgent Cancer Treatment

74% funded

₦740,000 / ₦1,000,000

Verified Campaign

Latest update:
"Patient has completed her assessment."

Buttons:

View Campaign
Support Again

IMPORTANT:

Never expose:

Full legal patient name

Phone number

Email

Home address

Private medical records

ID documents

Private hospital records

The donor-facing experience must only use approved/public campaign information.

7. DONOR IMPACT

Create a dedicated My Impact page.

This should be one of the strongest parts of the portal.

Show:

Impact Overview

Total donated

Patients supported

Campaigns supported

Completed campaigns

Treatment milestones supported

Recurring contribution history

Create an attractive visual timeline:

Donation
↓
Campaign
↓
Treatment progress
↓
Hospital update
↓
Impact

Example:

₦25,000 donated

↓

Amina's Treatment

↓

Campaign reached 74%

↓

Diagnostic investigations completed

↓

Next treatment stage underway

Make the donor feel connected to the outcome without exposing sensitive medical details.

8. IMPACT MILESTONES

Create a milestone section.

Examples:

First Gift
You've made your first FundEzer donation.

3 Patients Supported
You've helped 3 patients access treatment.

₦500,000 Given
Your donations have helped fund ₦500,000 worth of healthcare.

First Completed Campaign
You've supported your first completed campaign.

12 Months of Giving
You've been supporting FundEzer for 12 months.

Display milestones visually using tasteful badges/icons.

Do not make the experience feel like a gaming platform.

9. DONOR RECOGNITION

Implement recognition badges.

Potential levels from the requirements:

Supporter

Compassion Partner

Hope Builder

Impact Champion

FundEzer Ambassador

For the MVP, make these primarily visual recognition.

Example:

Hope Builder

"Recurring donor"

Explain:

Recognition for donors who consistently support healthcare campaigns.

Do not imply that donor status gives patients preferential access to treatment.

10. DISCOVER CAMPAIGNS

Create a dedicated campaign discovery page.

Header:

Find a cause worth supporting

Include:

Search bar.

Filters:

Treatment type

Urgency

Hospital

Location

Funding progress

Treatment stage

Campaign categories:

Urgent

Nearly Funded

Recently Verified

Recommended

Ending Soon

Campaign cards should show:

Image

Public patient name

General condition

Hospital

Verification badge

Progress bar

Amount raised

Target

Treatment stage

Include:

Support Campaign

CTA.

11. CAMPAIGN DETAIL PAGE

Create a full campaign page for donors.

Sections:

Campaign Header

Campaign image

Help Amina K. Access Urgent Cancer Treatment

Verified Campaign

Hospital verified

74% funded

₦740,000 raised of ₦1,000,000

CTA:

Donate Now

Patient Story

Show an approved, privacy-safe story.

Do not expose sensitive personal information.

Treatment Information

Use a general approved summary.

Example:

Treatment required

Cancer treatment and associated diagnostic care.

Progress

Visual funding progress.

Treatment Updates

Timeline:

August 22
Assessment completed

August 15
Treatment plan confirmed

August 5
Campaign verified

Donation CTA

Allow donor to choose:

₦5,000
₦10,000
₦25,000
₦50,000
Custom amount

Toggle:

Make this a recurring donation

Donation visibility:

Public

Anonymous

Private

Remember that the requirements explicitly allow donors to choose whether their donation is public, anonymous or private.

12. DONATION FLOW

Build a complete frontend donation flow.

Step 1:

Select amount.

Step 2:

Choose:

One-time

Recurring

Step 3:

Donation visibility:

Public

Anonymous

Private

Step 4:

Payment method UI.

Mock:

Card

Bank transfer

Saved payment method

Step 5:

Confirmation.

Success screen should NOT simply say:

Donation successful.

Instead say something emotionally meaningful such as:

Your contribution is helping someone move closer to treatment.

Show:

Amount donated

Campaign

Updated campaign progress

Potential impact

Button:

See My Impact

and

Discover More Campaigns

13. MY DONATIONS

Create a dedicated donation history page.

Display:

DateCampaignAmountTypeStatus

Each transaction should be clickable.

Include filters:

All

One-time

Recurring

Completed

Active

Clicking a donation opens a detailed donation record.

Show:

Donation ID

Date

Amount

Campaign

Payment method

Status

Campaign progress

Impact generated

Latest treatment update

14. DONOR WALLET

This is an important dedicated area of the portal.

Create a Donor Wallet page.

Hero balance:

Available Giving Balance

₦75,000

Secondary metrics:

Monthly Giving Commitment
₦25,000

Next Scheduled Contribution
25 August 2026

Total Given
₦250,000

Patients Supported
8

Wallet Actions

Buttons:

Fund Wallet

Give from Wallet

Manage Recurring Giving

15. WALLET TRANSACTION HISTORY

Create a clean transaction table.

Example:

Aug 1
Wallet funding
+₦50,000
Balance ₦50,000

Aug 4
Patient A
-₦20,000
Balance ₦30,000

Aug 8
Patient B
-₦10,000
Balance ₦20,000

Aug 12
Wallet funding
+₦25,000
Balance ₦45,000

Each transaction should show:

Transaction ID

Timestamp

Amount

Type

Campaign reference

Payment reference

Status

Running balance

Use frontend mock data.

IMPORTANT:

Keep the concept of:

Donor Wallet

separate from:

Campaign Wallet

Do not combine these concepts in the UI.

16. FUND WALLET

Create a frontend flow for funding the donor wallet.

Amount:

₦10,000
₦25,000
₦50,000
₦100,000
Custom

Payment methods:

Card

Bank transfer

Approved payment method

Show transaction confirmation.

Generate a realistic mock transaction reference.

17. GIVE FROM WALLET

Create a wallet-to-campaign donation flow.

User selects:

Campaign

↓

Amount

↓

Donation visibility

↓

Confirm

↓

Success

Example:

Give ₦25,000 to Amina's Treatment

Available wallet balance:

₦75,000

After confirmation:

Available balance:

₦50,000

Campaign progress updates visually.

18. RECURRING GIVING

Create a dedicated Recurring Giving page.

Allow donor to configure:

Amount

₦10,000

Frequency:

Weekly

Monthly

Quarterly

Custom

Purpose:

General healthcare

Emergency patients

Specific campaign

Specific hospital

FundEzer recommended campaigns

Start date.

Include an elegant configuration interface.

19. SMART ALLOCATION UI

The requirements describe several allocation modes.

Build the UI so the donor can choose:

I Choose

I manually select the campaigns I want to support.

FundEzer Recommends

FundEzer recommends verified campaigns using predefined criteria.

Emergency Support

My contribution supports campaigns classified as urgent.

Equal Support

Divide my contribution across selected campaigns.

Clearly communicate that any automated allocation requires donor consent.

For the MVP, the allocation can be simulated with mock data.

20. AUTO TOP-UP

Include the UI, but treat this as a later-phase feature.

If implemented visually, show:

Auto Top-Up

"When my wallet falls below ₦10,000, add ₦25,000."

Controls:

Enable/disable

Threshold

Top-up amount

Payment method

Explicitly show consent confirmation.

21. UPDATES

Create a dedicated Updates page.

Show treatment/campaign updates relevant to campaigns the donor has supported.

Example:

Amina's Treatment

"Your supported campaign has reached 74% funding."

"Patient has completed her assessment and the next stage of treatment is underway."

Use privacy-safe language.

Never display detailed medical records.

22. NOTIFICATIONS

Create a notification center.

Notification categories:

Donation successful

Wallet funded

Wallet donation

Low balance

Auto-top-up

Failed top-up

Recurring contribution successful

Recurring contribution failed

Campaign update

Campaign completed

Treatment milestone

Wallet restricted

Use unread/read states.

Allow:

Mark all as read

23. PROFILE & SETTINGS

Create donor profile settings.

Sections:

Personal Information

Name

Email

Phone

Donation Preferences

Default donation amount

Default donation visibility

Recurring giving preference

Notification Preferences

Email

Push

Campaign updates

Impact updates

Donation confirmations

Privacy

Clearly explain that donor:

Email

Phone

Payment information

Address

Financial details

are never publicly displayed.

24. REFERRAL

Create a simple referral area.

Example:

Help someone else make an impact

Your referral link:

[FundEzer referral link]

Button:

Share

Show:

People referred

Campaigns supported through referrals

Do NOT create cash commissions.

Referral activity can contribute to recognition only.

25. RESPONSIVE DESIGN

The entire portal must work beautifully on:

Desktop

Laptop

Tablet

Mobile

Desktop should have a sidebar.

Mobile should use a compact navigation system.

Tables should become responsive cards on mobile.

Donation actions should remain extremely easy to access on mobile.

26. FRONTEND FUNCTIONALITY

Although there is no backend yet, the prototype must feel functional.

Implement:

Client-side routing

Working navigation

Working buttons

Modal dialogs

Donation flow

Wallet funding flow

Wallet-to-campaign donation

Recurring giving configuration

Filters

Search

Notification states

Tabs

Transaction detail views

Campaign detail pages

Impact timeline

Milestone states

Profile settings

Responsive navigation

Toast/success feedback

Loading states

Empty states

Use mock data stored in a clean, centralized data layer.

Do not hard-code the same data repeatedly across components.

27. ARCHITECTURE

Structure the application so the backend can easily be connected later.

Separate:

UI components

Pages

Mock data

Types/interfaces

State management

Services/API layer

Utility functions

Create reusable components such as:

CampaignCard

CampaignProgress

ImpactCard

DonationModal

DonationSuccess

WalletBalance

TransactionTable

MilestoneBadge

TreatmentUpdate

NotificationItem

VerificationBadge

EmptyState

LoadingState

ConfirmationModal

Use TypeScript if the project supports it.

28. MOCK DATA

Create realistic Nigerian healthcare fundraising data.

Use:

Nigerian names

Nigerian hospitals

Naira amounts

Nigerian locations

Realistic healthcare campaigns

But clearly treat all information as demo/mock data.

Example campaigns:

Amina K. — cancer treatment

David O. — emergency surgery

Chioma A. — maternal care

Use privacy-safe public identities.

29. PRIVACY IS A CORE UI REQUIREMENT

The donor portal must NEVER display:

Full legal patient identity

Medical records

Phone numbers

Email addresses

Residential addresses

ID documents

Private hospital records

Highly sensitive medical information

Instead show:

Approved public name

Age/age range where approved

General location

Hospital

General medical condition

Treatment required

Approved story

Approved photo

Verified status

Privacy-safe treatment updates

This is not optional.

30. DONOR PRIVACY

The donor's own sensitive information should also be protected.

Never display publicly:

Email

Phone

Payment information

Address

Financial details

Donation visibility should support:

Public

Anonymous

Private

31. IMPORTANT PRODUCT RULE

Do not build any mechanism where donor status influences patient eligibility.

Never imply that:

Higher donations receive preferential treatment

Impact score determines patient funding

Donor level determines which patients get treatment

The donor system is for:

Transparency

Recognition

Impact

Convenience

Engagement

not patient eligibility.

32. MVP VS LATER FEATURES

Prioritize these as MVP:

MUST HAVE

Donor dashboard

Patient public/private separation

Anonymous patient support

Anonymous donations

Donation flow

Donation history

Donor impact dashboard

Treatment updates

Donor milestones

Recurring donor profile

Basic donor wallet

Wallet transaction history

Wallet-to-campaign donation

Wallet notifications

Campaign discovery

Campaign detail page

Profile/settings

LATER PHASE

Design the architecture to support:

Advanced donor levels

Smart campaign allocation

Auto-top-up

Advanced referral programme

Sophisticated impact scoring

Corporate partner wallet

Advanced donor analytics

Personalized AI campaign recommendations

Do not let later-phase functionality clutter the MVP.

33. DEMO EXPERIENCE

When the application first loads, the user should be presented as a logged-in donor.

Use a realistic demo donor:

Daniel Adeyemi

Dashboard data:

Total Given: ₦250,000

Patients Supported: 8

Active Campaigns: 3

Treatment Milestones: 12

Wallet Balance: ₦75,000

Monthly Giving: ₦25,000

Recognition:

Hope Builder

Make the dashboard immediately demonstrate the complete emotional loop:

Patient needs help
→ Campaign verified
→ Donor gives
→ Donation recorded
→ Campaign progresses
→ Treatment update arrives
→ Donor sees impact
→ Donor returns
→ Donor becomes recurring
→ Wallet makes future giving easier

34. QUALITY BAR

Do not produce a generic admin dashboard.

This is a consumer-facing donor product.

Every screen should feel intentionally designed.

Pay special attention to:

Typography

Spacing

Alignment

Visual hierarchy

Empty states

Microcopy

Button hierarchy

Mobile responsiveness

Accessibility

Consistent components

Consistent border radius

Consistent iconography

Meaningful visualizations

Use subtle animations/transitions where appropriate.

The UI should feel polished enough to demonstrate to investors, partners, hospitals and potential donors.

35. FINAL ACCEPTANCE TEST

Before considering the build complete, verify that a user can complete this entire journey without broken links:

Open donor dashboard

Browse campaigns

Open a campaign

Read privacy-safe campaign information

Donate

Select public/anonymous/private

See successful donation

View donation in donation history

See campaign progress

Receive/view a treatment update

See the update reflected in My Impact

View milestone

Open donor wallet

Fund wallet

View wallet transaction

Donate from wallet

See wallet balance change

Configure recurring giving

View notifications

Manage donor preferences

No major interaction should be a dead button.

36. Deliverable

Build the complete frontend MVP.

Use realistic mock data.

Make it responsive.

Make every major interaction functional.

Keep backend integration points clean and clearly separated.

The result should look and behave like the actual FundEzer Donor Portal, not a wireframe or proof of concept.

Most importantly:

The donor must have a dedicated portal and persistent donor identity across Dashboard, Donations, Impact, Wallet, Recurring Giving, Updates, Notifications and Settings.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://fundezer-heart-hub.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/28ab436a-9c6b-409f-9c7b-19bf4fbacbfe).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
