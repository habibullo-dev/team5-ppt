# How to Deploy to Vercel

Since you have already pushed your code to GitHub, the recommended way is to connect your repository to Vercel.

## Option 1: Vercel Dashboard (Recommended)
1. Go to [https://vercel.com/new](https://vercel.com/new).
2. Select your GitHub repository (`team5-ppt`).
3. Click **Deploy**.
   - Vercel will automatically detect `Vite`.
   - The build settings should interpret `npm run build` correctly.
   - The `vercel.json` file we added will handle the routing.

## Option 2: Command Line (CLI)
If you prefer to deploy directly from your terminal:

1. Run the deploy command:
   ```bash
   npx vercel
   ```
   *(We use `npx` so you don't need to install vercel globally)*
2. Follow the prompts:
   - Log in (if requested).
   - Set up and deploy: `Y`.
   - Which scope: (Select your account).
   - Link to existing project: `N` (if this is the first time) or `Y`.
   - Project name: `presentation-web` (or default).
   - Directory: `./` (default).
   - **Build Command**: `npm run build` (default is usually correct, just press Enter).
   - **Output Directory**: `dist` (Vite's default, just press Enter).
   - **Development Command**: `npm run dev` (default, press Enter).

## Production vs Preview
- `npx vercel` creates a **Preview** deployment.
- `npx vercel --prod` creates a **Production** deployment.
