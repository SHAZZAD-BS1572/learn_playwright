import { devices, type PlaywrightTestConfig } from "@playwright/test";

const config: PlaywrightTestConfig = {
  // testMatch: [
  //   "/tests/login.spec.ts",
  //   "/tests/recordPart3.spec.ts",
  //   "/tests/basicInteractions.spec.ts",
  //   "/tests/alerts.spec.ts",
  //   "/tests/frames.spec.ts",
  //   "/tests/windows.spec.ts",
  //   "/tests/calendar.spec.ts",
  //   "/tests/test.spec.ts",
  //   "/tests/uploadDownload.spec.ts",
  //   "/tests/uploadDemo.spec.ts",
  //   "/pomTest/addtoCart01.spec.ts",
  //   "/pomTest/addtoCart01UsingFixter.spec.ts",
  //   "/pomTest/addtoCart01UsingJsonData.spec.ts",
  // ],

  use: {
    
    baseURL: "https://ecommerce-playground.lambdatest.io/index.php?",
    headless: false,
    bypassCSP:false,
    viewport: { width: 1536, height: 730 },
    screenshot: "on",
    video: "on",
  },

  projects:[
    // {name:"safari",
    //   use:{...devices["Desktop Safari"],
    //     headless:false
    //   }
    // },

    {
      name:"chrome",
      use:{
        ...devices["Desktop Chrome"],
      viewport: { width: 1536, height: 730 },

      }
    },

    // {name:"firefox",
    //   use:{...devices["Desktop Firefox"],
    //   viewport: { width: 1536, height: 730 },
        
    //   }
    // },
    

  ],

  
  // retries: 3,
  reporter: [
    ["allure-playwright"],
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
