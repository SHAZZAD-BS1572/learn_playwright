import type { PlaywrightTestConfig } from "@playwright/test";

const config: PlaywrightTestConfig = {
    testMatch: ["/tests/login.spec.ts","/tests/recordPart3.spec.ts","/tests/basicInteractions.spec.ts"],
    
    use: {
        headless: false,
        screenshot: "on",
        video:"on"
    },
    retries:0,
    reporter: [["dot"], ["json", {
        outputFile:"jsonReport/jsonReport.json"
    }], ["html", {
        outputFile: "htmlReport/htmlReport.html",
        open:"never"
    }]]
    
};

export default config;
