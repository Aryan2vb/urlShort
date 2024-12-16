
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
