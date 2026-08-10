# Portfolio Backend (Express + MongoDB)

A small API that receives your portfolio's contact form submissions and stores them in MongoDB.

## 1. Set up MongoDB (free tier)

1. Go to https://www.mongodb.com/cloud/atlas/register and create a free account.
2. Create a free (M0) cluster.
3. Under **Database Access**, create a user + password.
4. Under **Network Access**, add `0.0.0.0/0` (allow access from anywhere) — simplest for a small project.
5. Click **Connect > Drivers**, copy the connection string. It looks like:
   `mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/?retryWrites=true&w=majority`
6. Add a database name to it, e.g. `.../portfolioDB?retryWrites=true...`

## 2. Run locally

```bash
cd backend
npm install
cp .env.example .env
# edit .env and paste your MONGO_URI, set CLIENT_ORIGIN to http://localhost:3000
npm run dev
```

Test it:
```bash
curl -X POST http://localhost:5000/api/contact \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","email":"test@example.com","message":"Hello"}'
```

## 3. Deploy the backend (Netlify only hosts static frontends, so this needs a separate host)

**Render.com (free, recommended):**
1. Push this `backend` folder to a GitHub repo (can be the same repo or a separate one).
2. Go to https://render.com → New → Web Service → connect your repo.
3. Root directory: `backend` (if it's in the same repo as your frontend).
4. Build command: `npm install`
5. Start command: `npm start`
6. Add environment variables in Render's dashboard: `MONGO_URI`, `CLIENT_ORIGIN` (your Netlify URL).
7. Deploy. You'll get a URL like `https://your-backend.onrender.com`.

**Railway.app** works the same way as an alternative.

> Note: Render's free tier "sleeps" after inactivity, so the first request after idle time may take ~30s to wake up.

## 4. Connect your Netlify frontend to it

In your React project (not this backend folder):
1. Create a `.env` file with:
   ```
   REACT_APP_API_URL=https://your-backend.onrender.com
   ```
2. Also add this same variable in **Netlify dashboard → Site settings → Environment variables**, so it's set during Netlify's build.
3. Redeploy your Netlify site.

## API Endpoints

- `POST /api/contact` — body: `{ "name", "email", "message" }` → saves to MongoDB
- `GET /api/contact` — returns all saved messages (you can use this, or a tool like MongoDB Compass/Atlas UI, to view submissions)

## Files

```
backend/
├── server.js          # entry point, connects to MongoDB, starts Express
├── models/Contact.js   # Mongoose schema for a contact message
├── routes/contact.js   # POST and GET routes for /api/contact
├── package.json
├── .env.example
└── .gitignore
```
