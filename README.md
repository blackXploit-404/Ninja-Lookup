# Lookup-Now

🔍 A web application that allows users to perform domain and hosting lookups, including WHOIS information and hosting provider details.

## Features

- **Domain Lookup**: Fetch WHOIS information for a specified domain.
- **Hosting Lookup**: Retrieve hosting provider details based on the domain.
- **Geolocation Information**: Display city, region, country, latitude, and longitude of the IP address.
- **Embedded Map**: Interactive map display based on geolocation data.
- **Responsive Design**: Optimized for both desktop and mobile devices.
- **Search 🔍 History**: Added search history option

## Technologies Used

- **Backend**: Node.js, Express
- **Frontend**: EJS, HTML, CSS, JavaScript
- **APIs**:
  - WHOIS Lookup API ([RapidAPI](https://rapidapi.com))
  - IP Geolocation API ([ipwhois.app](https://ipwhois.app))

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/blackXploit-404/Lookup-Now.git
   ```

2. Navigate into the project directory:

   ```bash
   cd Lookup-Now
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Create a `.env` file in the root directory and add your API key:

   ```plaintext
   WHOIS_API_KEY=your_rapidapi_key
   ```

   Make sure to add `.env` to your `.gitignore` file to prevent it from being pushed to GitHub.

5. Start the application:

   ```bash
   npm start
   ```

## Usage

1. Open your web browser and navigate to `http://localhost:3000`.
2. Enter a domain name in the input field and click "Domain Lookup" or "Hosting Lookup."
3. View the results, including WHOIS data and hosting provider information.

## API Endpoints

- **GET /whois**: Fetches WHOIS information for a specified domain.
- **GET /lookup**: Retrieves hosting provider details and geolocation information.

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue if you find bugs or have suggestions for improvements.

