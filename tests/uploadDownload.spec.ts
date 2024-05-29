import test from "@playwright/test";


// test("Download File", async ({ page }) => {
//   await page.goto(
//     "https://www.lambdatest.com/selenium-playground/generate-file-to-download-demo"
//     );
    
//     await page.type("//textarea[@id='textbox']", "Hi! I am Shazzad");
//     await page.click("//button[@id='create']");

//     const [downloadFile] = await Promise.all([
//         page.waitForEvent("download"),
//         page.click("//a[@id='link-to-download']")
//     ])

//     // const fileName = await downloadFile.suggestedFilename();
//     const customFileName = "Document.txt";
//     await downloadFile.saveAs(customFileName);


//     // const path = await downloadFile.path()
//     // console.log(path)

  
// });

test("Upload File", async ({ page }) => {
  await page.goto("https://blueimp.github.io/jQuery-File-Upload/");
  await page.setInputFiles("input[name='files[]']", [
    "UploadFileData/image01.jpg",
    "UploadFileData/image02.jpg",
  ]);
  await page.waitForTimeout(5000)  
});