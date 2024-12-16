## URL Shortener API

## Setup

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Aryan2vb/urlShort
   ```

2. **Install dependencies:**

   ```bash
   cd urlShort
   npm install
   ```

3. **Set up the database:**

     ```
     DATABASE_URL="mysql://your_user:your_password@your_db_host:your_db_port/urlshortener"
     ```

4. **Run Prisma migrations:** This will create the necessary database tables.

   ```bash
   npx prisma db push
   ```

5. **Start the server:**

   ```bash
   npm start
   ```

## API Endpoints

* **POST `/generate`:**  Shortens a URL.  Request body should be JSON with a `longUrl` field.

   ```json
   {
     "longUrl": "https://www.example.com/very/long/url"
   }
   ```

   Response:

   ```json
   {
     "shortUrl": "http://localhost:3000/someKey"
   }
   ```

* **GET `/:key`:** Redirects to the long URL associated with the given short key.
