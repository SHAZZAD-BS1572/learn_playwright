import test from "@playwright/test";

test("Add file, Start upload, Cancel upload, Delete selected", async ({
  page,
}) => {
  await page.goto("https://blueimp.github.io/jQuery-File-Upload/");
  await page.setInputFiles("input[name='files[]']", [
    "UploadFileData/image01.jpg",
    "UploadFileData/image02.jpg",
    "UploadFileData/image03.jpg",
    "UploadFileData/image04.jpg",
    "UploadFileData/image05.jpg",
    "UploadFileData/image06.jpg",
    "UploadFileData/image07.jpg",
    "UploadFileData/image08.jpg",
  ]);

  await page.waitForTimeout(5000);
  await page.click("button[type='submit'] span");
  await page.waitForTimeout(8000);
  await page.click("button[type='reset'] span");
  await page.waitForTimeout(3000);
  await page.click("(//input[@name='delete'])[1]");
  await page.waitForTimeout(3000);
  await page.click("(//span[normalize-space()='Delete selected'])[1]");
  await page.waitForTimeout(3000);
  await page.click("(//span[contains(text(),'Delete')])[2]");
  await page.waitForTimeout(3000);
  await page.click("div[class='col-lg-7'] input[type='checkbox']");
  await page.click("//button[@type='button']");
  await page.reload();
});
