name: Trend Scraper Auto Run

on:
  schedule:
    - cron: '0 */6 * * *'  # every 6 hours
  workflow_dispatch:       # allows manual trigger from GitHub UI

jobs:
  run-scraper:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout repo
        uses: actions/checkout@v3

      - name: Set up Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'

      - name: Install dependencies
        run: npm install

      - name: Run TrendHunter Agent
        run: node api/trends.js
