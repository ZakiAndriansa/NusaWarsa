# Nusantara Chronicles

An interactive Indonesian cultural heritage exploration platform built with Next.js and OpenAI.

## Getting Started

### Prerequisites
- Node.js 20 or higher
- OpenAI API Key

### Installation

1. Clone the repository and install dependencies:
```bash
npm install
```

2. Set up your environment variables:
```bash
cp .env.example .env.local
```

3. Add your OpenAI API key to `.env.local`:
```
OPENAI_API_KEY=your_openai_api_key_here
```

Get your API key from: https://platform.openai.com/api-keys

### Running the Development Server

```bash
npm run dev
```

Open [http://localhost:9002](http://localhost:9002) in your browser.

## Features

- **Timeline Explorer**: Interactive Indonesian historical events timeline
- **Regional Explorer**: Discover Indonesian regions, culture, and traditions
- **AI Historian**: Ask questions about historical events (powered by OpenAI GPT-4)
- **AI Regional Expert**: Learn about Indonesian regions from an AI cultural guide

## Available Scripts

- `npm run dev` - Start development server on port 9002
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run typecheck` - Type check with TypeScript
- `npm run genkit:dev` - Start Genkit AI development mode
- `npm run genkit:watch` - Start Genkit AI with watch mode

## Tech Stack

- **Framework**: Next.js 15
- **AI**: OpenAI GPT-4 via Genkit
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI
- **Forms**: React Hook Form + Zod validation
