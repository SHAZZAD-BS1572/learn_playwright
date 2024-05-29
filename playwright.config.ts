import type { PlaywrightTestConfig } from "@playwright/test";

const config: PlaywrightTestConfig = {
  testMatch: [
    "/tests/login.spec.ts",
    "/tests/recordPart3.spec.ts",
    "/tests/basicInteractions.spec.ts",
    "/tests/alerts.spec.ts",
    "/tests/frames.spec.ts",
    "/tests/windows.spec.ts",
    "/tests/calendar.spec.ts",
    "/tests/test.spec.ts",
    "/tests/uploadDownload.spec.ts",
  ],

  use: {
    headless: false,
    viewport: { width: 1536, height: 730 },

    screenshot: "on",
    video: "on",
  },
  retries: 0,
  reporter: [
    ["dot"],
    [
      "json",
      {
        outputFile: "jsonReport/jsonReport.json",
      },
    ],
    [
      "html",
      {
        outputFile: "htmlReport/htmlReport.html",
        open: "never",
      },
    ],
  ],
};

export default config;
