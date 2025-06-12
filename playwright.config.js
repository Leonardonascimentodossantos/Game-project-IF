testDir: 'tests',
use: {
    browserName: 'chromium',
    headless: true
},
reporter: [['list'], ['json', { outputFile: 'test-results.json' }]]