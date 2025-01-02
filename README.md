# Seen This One

A web application that visualizes and compares historical market trends between DeFi (2020-2021) and AI (2024-current) sectors.

## Overview

This project provides an interactive visualization of market trends, highlighting the parallels between the DeFi boom of 2020-2021 and the current AI market trends. Built with modern web technologies, it offers a clean, responsive interface for data exploration.

## Features

- Interactive area chart comparing DeFi and AI market trends
- Responsive design that works across all device sizes
- Modern dark theme inspired by Next.js docs
- Real-time data visualization using Recharts
- Smooth animations and transitions

## Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Charts**: Recharts
- **Data Source**: Messari

## Getting Started

### Prerequisites

- Node.js 18+
- pnpm (recommended) or npm

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/lukapetro/seen-this.one.git
   cd seen-this.one
   ```

2. Install dependencies:

   ```bash
   pnpm install
   ```

3. Run the development server:

   ```bash
   pnpm dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/                # Next.js app directory
│   ├── components/     # React components
│   ├── layout.tsx     # Root layout
│   └── page.tsx       # Home page
├── lib/               # Utility functions
└── styles/            # Global styles
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Data provided by [Messari](https://messari.io)
- Design inspired by [Next.js](https://nextjs.org) docs
