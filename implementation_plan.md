# Implementation Plan - Narayani Vista Updates

This plan outlines the updates to the Narayani Vista website data and styles based on the requirements from [narayani-update.pdf](file:///Users/Robin/fintara/chitwan-resort/narayani-update.pdf).

## User Review Required

> [!NOTE]
> All updates will be seeded via a new database seeder which can be run with `php artisan db:seed --class=UpdateWebsiteSeeder`.
> Mock images will be referenced for rooms and testimonials, which you can replace later in the Filament Admin panel or by uploading files.

## Proposed Changes

### Backend: Database Seeders

#### [NEW] [UpdateWebsiteSeeder.php](file:///Users/Robin/fintara/chitwan-resort/database/seeders/UpdateWebsiteSeeder.php)
Create a new seeder to update the website data:
- **Site Settings**:
  - Address: `Madhyabindu Municipality – Ward No. 3 Ratanpur, Nawalparasi (East) Gandaki Province, Nepal`
  - Contact No: `976500033`, `9766623978`
  - Gmail: `narayanivista@gmail.com`
- **Rooms**:
  - `Garden View Villa` (Price: 4000/4500, configuration: 2 Single / 1 Queen + 1 Single)
  - `Narayani River Front Room` (Price: 5000)
  - `Narayani Deluxe Front Room` (Price: 6000)
  - `Narayani Super Deluxe Room` (Price: 7500)
- **Dining Venues**:
  - Update `Coastal Wine Bar` to `Vista Bar`
- **Testimonials (Authentic Guest Narratives)**:
  - Seed testimonials speaking directly to Chitwan's wildlife, safaris, and hospitality.

#### [MODIFY] [DatabaseSeeder.php](file:///Users/Robin/fintara/chitwan-resort/database/seeders/DatabaseSeeder.php)
Call `UpdateWebsiteSeeder` in `DatabaseSeeder.php`.

---

### Frontend: Components & Pages

#### [MODIFY] [About.tsx](file:///Users/Robin/fintara/chitwan-resort/resources/js/components/home/About.tsx)
- Update "Riverside Serenity" text color to a high-contrast golden color that is easily readable in both light and dark modes.
- Replace the cover image with a mock image of Tharu girls saying namaste.

#### [MODIFY] [Dining.tsx](file:///Users/Robin/fintara/chitwan-resort/resources/js/components/home/Dining.tsx)
- Update the fallback venue name `Coastal Wine Bar` to `Vista Bar` for consistency.

#### [MODIFY] [Room.tsx](file:///Users/Robin/fintara/chitwan-resort/resources/js/components/home/Room.tsx)
- Improve the font size, color contrast, and readability under "Room Amenities" as per the PDF request ("make visible font under room amenities").
- Update fallback rooms data.

#### [NEW] [Packages.tsx](file:///Users/Robin/fintara/chitwan-resort/resources/js/components/home/Packages.tsx)
- Create a premium packages section showcasing the **2 Days / 1 Night Luxury Jungle & Cultural Experience** and the **3 Days / 2 Nights Premium Jungle, Birdwatching & Cultural Experience** packages with detailed inclusions, exclusions, and pricing conditions ("mainly for more than 5 or 5 people").

#### [MODIFY] [welcome.tsx](file:///Users/Robin/fintara/chitwan-resort/resources/js/pages/welcome.tsx)
- Insert the new `Packages` component to display the packages attractively.

---

### Model Image Helpers

#### [MODIFY] [Room.php](file:///Users/Robin/fintara/chitwan-resort/app/Models/Room.php), [Dining.php](file:///Users/Robin/fintara/chitwan-resort/app/Models/Dining.php), [Testimonial.php](file:///Users/Robin/fintara/chitwan-resort/app/Models/Testimonial.php)
- Enhance `getImageUrlAttribute` to support absolute URLs or custom path prefixing if the images start with `http` or `images/`.

---

## Verification Plan

### Automated Tests
- Run `php artisan db:seed --class=UpdateWebsiteSeeder` to check if seeders run successfully.
- Run `npm run build` or `npm run typecheck` to verify React compilation.

### Manual Verification
- View the website home page and check:
  - Updated contact details in header, footer, and contact section.
  - "Vista Bar" in the Dining section.
  - New golden styling for "Riverside Serenity".
  - Refined font/readability for Room Amenities.
  - The new Packages section.
