# FYP Frontend

This is the frontend application for the Final Year Project, built with Next.js 15.

## Tech Stack
- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **Library**: React 19
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Language**: TypeScript
- **Icons**: Lucide React

## Getting Started

### Prerequisites
- Node.js 18.x or higher

### Installation
1. Navigate to the frontend directory:
   ```bash
   cd Final-Year-Project-frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```

### Configuration
If needed, create a `.env.local` to point to your backend:
```env
NEXT_PUBLIC_API_URL=http://localhost:5000
```

### Development
Run the development server:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure
- `src/app`: Next.js App Router pages and layouts.
- `src/components`: Reusable UI components (Sidebar, ChatArea, etc.).
- `public`: Static assets.

## Scripts
- `npm run dev`: Start development server.
- `npm run build`: Build for production.
- `npm run start`: Start production server.
- `npm run lint`: Run ESLint.
