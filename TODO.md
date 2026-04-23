# TODO: Polish Site + Remove AI Studio + Mobile-first Fixes

## Step 1: Remove AI Studio / Google GenAI

- [x] Delete `services/geminiService.ts`
- [x] Remove `@google/genai` from `package.json`
- [ ] Run `npm uninstall @google/genai`

## Step 2: Remove Redundant Code

- [x] Remove redundant Google Fonts `@import` from `index.css`
- [x] Remove unused `Send` import from `Contact.tsx`
- [x] Remove unused `ChevronLeft` import from `ProductDetail.tsx`

## Step 3: Fix Copy / Grammar Bugs

- [x] Fix WhatsAppButton greeting (`Kelly's Spice` → `The Meech Experience`)
- [x] Fix CartSidebar grammar (`Look like` → `Looks like`)
- [x] Fix `package.json` project name (`wavvvy` → `the-meech-experience`)

## Step 4: Reduce Excessive Spacing (Mobile-first)

- [x] `About.tsx`: `mt-80` → `mt-24 md:mt-32`, `mb-24` → `mb-12 md:mb-16`, tighten gaps
- [x] `Contact.tsx`: `pb-40 pt-40` → `pt-24 pb-24 md:pt-32 md:pb-32`, `mb-32` → `mb-16 md:mb-24`
- [x] `ProductDetail.tsx`: `pt-40 pb-40` → `pt-24 pb-24 md:pt-32 md:pb-32`, `mb-40` → `mb-16 md:mb-24`
- [x] `Home.tsx`: `py-32` → `py-16 md:py-24`, `py-24` → `py-12 md:py-20`, `mb-32` → `mb-16 md:mb-24`
- [x] `Shop.tsx`: `pb-32 pt-40` → `pt-24 pb-16 md:pt-32 md:pb-24`, tighten filter bar & grid gap
- [x] `Navbar.tsx`: Tighten mobile menu padding (`p-10` → `p-6 md:p-8`)

## Step 5: Build Verification

- [x] Run `npm run build` or `npm run lint`

## Step 6: Commit & Push

- [x] Stage all changes
- [x] Commit with descriptive message
- [x] Push to `origin/master`
