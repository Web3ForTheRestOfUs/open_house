# Rentpal Multi-Page Form Structure

*UX Note: Simple, non-intimidating start to build form momentum*

## Page 2: Location & Property Type
**Progress: [2/7] - Tell us about your place**
- Address (find from google map)
- House Type*
- Building Type*
- Floor Level (if applicable)
- Compound Type*

*UX Note: Logical grouping of basic property characteristics*

## Page 3: Rent & Financial Details
**Progress: [3/7] - Financial Information**
- Yearly Rent*
- Service Charge (if any)
- Additional Fees
  - Agreement fee
  - Agency fee
  - Caution deposit
- Payment Terms
  - Rent frequency allowed
- Expiry Month*
- Intent to Leave*

*UX Note: Group all financial aspects together for clear cost understanding*

## Page 4: Utilities & Infrastructure
**Progress: [4/7] - Essential Services**
- Light Situation*
- Meter Situation*
- Water Situation*
- Generator Details
  - Type
  - Fuel Policy
- Internet
  - Fiber Optic Access
  - Telcos Quality*
- Air Conditioning Status

*UX Note: Critical living conditions grouped together*

## Page 5: Property Features & Condition
**Progress: [5/7] - Property Details**
- Home Size*
- House Age*
- Need Repair?*
- Room Details
  - Kitchen Size*
  - Bathroom Size*
  - Balcony*
- Storage Spaces
- Windows & Ventilation
- Parking*

*UX Note: Physical property attributes grouped logically*

## Page 6: Environment & Community
**Progress: [6/7] - Neighborhood & Environment**
- Accessibility*
- Main Road Access*
- Nearest Bus Stop*
- Security Setup*
- Flooding Risk*
- Noise Situation*
- Neighbor Demographics*
- Landlord Wahala*
- Shared Property Status*

*UX Note: External factors affecting living experience*

## Page 7: Media & Additional Information
**Progress: [7/7] - Almost done! Add some visuals**
- Property Images
  - Exterior (required)
  - Living Room (required)
  - Kitchen (required)
  - Bathroom (required)
  - Bedroom(s) (required)
  - Balcony (if applicable)
  - Compound (if applicable)
  - Street view (recommended)
- Video Tour (optional)
- Comments about your place*
- Terms & Conditions acceptance*

*UX Note: Visual documentation at the end when user is most invested*

## UX/UI Implementation Recommendations:

1. **Navigation:**
   - Clear progress indicator
   - Back/Next buttons
   - Save progress functionality
   - Can review all pages before final submission

2. **Form Features:**
   - Conditional fields (show/hide based on relevance)
   - Tooltips for complex fields
   - Inline validation
   - Mobile-responsive design
   - Auto-save functionality

3. **Visual Elements:**
   - Progress bar at top
   - Icons for different sections
   - Clear error messages
   - Success indicators
   - Loading states for image uploads

4. **Optimizations:**
   - Pre-fill fields where possible
   - Remember user's progress
   - Image compression before upload
   - Batch upload for multiple images

5. **User Assistance:**
   - Help text for complex fields
   - Example photos for image requirements
   - Contact support option
   - FAQ section accessible throughout

6. **Validation Rules:**
   - Required fields clearly marked
   - File size and format restrictions for media
   - Phone number format validation
   - Email format validation
   - Minimum character counts for text fields

7. **Performance:**
   - Lazy loading for media upload section
   - Progressive form loading
   - Optimized image handling
   - Efficient form state management

## Special Considerations:
- Each page should be independently saveable
- Allow users to jump between sections if needed
- Clear indication of mandatory fields
- Estimated time for completion displayed
- Mobile-first approach for all pages
- Clear success/error states
- Confirmation before final submission
