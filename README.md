# App - SpotDeals

**SpotDeals** is a location-based application that helps users discover nearby deals, discounts, and popular spots on an interactive map. Designed to enhance local engagement, SpotDeals shows real-time offers from nearby restaurants, stores, and attractions, enabling users to make the most of their surroundings.

## Instructions to Run the Application

1. **Clone the repository**:

   ```bash
   git clone https://github.com/yourusername/SpotDeals.git
   cd SpotDeals
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Set up API keys**:
   - Create an `.env` file in the root directory.
   - Add your Mapbox and Google Maps Places API keys to the `.env` file:

    ```
    REACT_APP_MAPBOX_API_KEY=your_mapbox_api_key
    REACT_APP_GOOGLE_PLACES_API_KEY=your_google_maps_api_key
    ```

4. **Run the application**:

   ```bash
   npm start
   ```

   - Open your browser and navigate to `http://localhost:3000`.

## Features of SpotDeals

- **Real-time Location-Based Offers**: Discover ongoing discounts and offers from nearby stores, restaurants, and more.
- **Interactive Map View**: Easily explore your surroundings with Mapbox, featuring pin clustering and customizable pop-ups.
- **Filter by Interest**: Choose from categories like dining, shopping, and attractions to tailor your experience.
- **Customizable Offer Pop-ups**: Get detailed offer information and event descriptions directly on the map.

## Dependencies Used

`react` `mapbox gl js` `google maps places api` `axios`