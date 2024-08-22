import { expect, test } from "@playwright/test";

import { AllPages } from "../pages/allpages";

test.describe("FindFox", () => {
    let pages: AllPages;

    test.beforeEach(async ({ page }) => {
        pages = new AllPages(page);
        await page.goto("https://automat.ostrava.digital/findfox.html");
    })

    test("Find a fox and the fox will stay on the screen.", async ({ page }) => {
        await pages.FindFoxPage.imageFox.click({timeout: 10000});

        await expect(pages.FindFoxPage.imageFox).toBeVisible();
    })
    
    test("Find the fox and the congratulation text is visible.", async ({ page }) => {
        await pages.FindFoxPage.imageFox.click({timeout: 5000});

        await expect(pages.FindFoxPage.gratulationText).toBeVisible();
    })

    test("Find the fox and the congratulation text has correct text.", async ({ page }) => {
        await pages.FindFoxPage.imageFox.click({timeout: 5000});

        await expect(pages.FindFoxPage.gratulationText).toHaveText("Gratuluji! Tvůj úkol je splněn! Vychutnej si ohňostroj s 🦊");
    })

    test("Find the HorseHead and shit-happens text is visible", async ({ page }) => {
        await pages.FindFoxPage.imageHorseHead.click({timeout: 50000});

        await expect(pages.FindFoxPage.shitHappensText).toBeVisible();
    })

    test("Find HorseHead and shit-happens text has correct text.", async ({ page }) => {
        await pages.FindFoxPage.imageHorseHead.click({timeout: 50000});

        await expect(pages.FindFoxPage.shitHappensText).toHaveText(" 🐵 🙈 Ne. Takhle ne. 🙉 🙊 ");
    })

    test("Find Scorpion and shit-happens text is visible.", async ({ page }) => {
        await pages.FindFoxPage.imageScorpion.click({timeout: 30000});

        await expect(pages.FindFoxPage.shitHappensText).toBeVisible();
    })

    test("Find Scorpion and the shit-happens text has correct text.", async ({ page }) => {
        await pages.FindFoxPage.imageScorpion.click({timeout: 30000});

        await expect(pages.FindFoxPage.shitHappensText).toHaveText(" 🐵 🙈 Ne. Takhle ne. 🙉 🙊 ");
    })

    test("Find Lion and the shit-happens text is visible.", async ({ page }) => {
        await pages.FindFoxPage.imageLion.click({timeout: 30000});

        await expect(pages.FindFoxPage.shitHappensText).toBeVisible();
    })

    test("Find Lion and shit-happens text has correct text.", async ({ page }) => {
        await pages.FindFoxPage.imageLion.click({timeout: 30000});

        await expect(pages.FindFoxPage.shitHappensText).toHaveText(" 🐵 🙈 Ne. Takhle ne. 🙉 🙊 ");
    })

    test("Find Whale and shit-happens text is visible.", async ({ page }) => {
        await pages.FindFoxPage.imageWhale.click({timeout: 30000});

        await expect(pages.FindFoxPage.shitHappensText).toBeVisible();
    })

    test("Find Whale and shit-happens text has correct text.", async ({ page }) => {
        await pages.FindFoxPage.imageWhale.click({timeout: 30000});

        await expect(pages.FindFoxPage.shitHappensText).toHaveText(" 🐵 🙈 Ne. Takhle ne. 🙉 🙊 ")
    })

    test("Find Mouse and shit-happens text is visible.", async ({ page }) => {
        await pages.FindFoxPage.imageMouse.click({timeout: 30000});

        await expect(pages.FindFoxPage.shitHappensText).toBeVisible();
    })

    test("Find Mouse and shit-happens text has correct text.", async ({ page }) => {
        await pages.FindFoxPage.imageMouse.click({timeout: 30000});

        await expect(pages.FindFoxPage.shitHappensText).toHaveText(" 🐵 🙈 Ne. Takhle ne. 🙉 🙊 ")
    })

    test("Find Pig and shit-happens text is visible.", async ({ page }) => {
        await pages.FindFoxPage.imagePig.click({timeout: 30000});

        await expect(pages.FindFoxPage.shitHappensText).toBeVisible();
    })

    test("Find Pig and shit-happens text has correct text.", async ({ page }) => {
        await pages.FindFoxPage.imagePig.click({timeout: 30000});

        await expect(pages.FindFoxPage.shitHappensText).toHaveText(" 🐵 🙈 Ne. Takhle ne. 🙉 🙊 ")
    })

    test("Find Duck and shit-happens text is visible.", async ({ page }) => {
        await pages.FindFoxPage.imageDuck.click({timeout: 30000});

        await expect(pages.FindFoxPage.shitHappensText).toBeVisible();
    })

    test("Find Duck and shit-happens text has correct text.", async ({ page }) => {
        await pages.FindFoxPage.imageDuck.click({timeout: 30000});

        await expect(pages.FindFoxPage.shitHappensText).toHaveText(" 🐵 🙈 Ne. Takhle ne. 🙉 🙊 ")
    })

    test("Find Ant and shit-happens text is visible.", async ({ page }) => {
        await pages.FindFoxPage.imageAnt.click({timeout: 30000});

        await expect(pages.FindFoxPage.shitHappensText).toBeVisible();
    })

    test("Find Ant and shit-happens text has correct text.", async ({ page }) => {
        await pages.FindFoxPage.imageAnt.click({timeout: 30000});

        await expect(pages.FindFoxPage.shitHappensText).toHaveText(" 🐵 🙈 Ne. Takhle ne. 🙉 🙊 ")
    })

    test("Find Lama and shit-happens text is visible.", async ({ page }) => {
        await pages.FindFoxPage.imageLama.click({timeout: 30000});

        await expect(pages.FindFoxPage.shitHappensText).toBeVisible();
    })

    test("Find Lama and shit-happens text has correct text.", async ({ page }) => {
        await pages.FindFoxPage.imageLama.click({timeout: 30000});

        await expect(pages.FindFoxPage.shitHappensText).toHaveText(" 🐵 🙈 Ne. Takhle ne. 🙉 🙊 ")
    })

    test("Find Turtle and shit-happens text is visible.", async ({ page }) => {
        await pages.FindFoxPage.imageTurtle.click({timeout: 30000});

        await expect(pages.FindFoxPage.shitHappensText).toBeVisible();
    })

    test("Find Turtle and shit-happens text has correct text.", async ({ page }) => {
        await pages.FindFoxPage.imageTurtle.click({timeout: 30000});

        await expect(pages.FindFoxPage.shitHappensText).toHaveText(" 🐵 🙈 Ne. Takhle ne. 🙉 🙊 ")
    })

    test("Find Cat and shit-happens text is visible.", async ({ page }) => {
        await pages.FindFoxPage.imageCat.click({timeout: 30000});

        await expect(pages.FindFoxPage.shitHappensText).toBeVisible();
    })

    test("Find Cat and shit-happens text has correct text.", async ({ page }) => {
        await pages.FindFoxPage.imageCat.click({timeout: 30000});

        await expect(pages.FindFoxPage.shitHappensText).toHaveText(" 🐵 🙈 Ne. Takhle ne. 🙉 🙊 ")
    })

    test("Find Bird and shit-happens text is visible.", async ({ page }) => {
        await pages.FindFoxPage.imageBird.click({timeout: 30000});

        await expect(pages.FindFoxPage.shitHappensText).toBeVisible();
    })

    test("Find Bird and shit-happens text has correct text.", async ({ page }) => {
        await pages.FindFoxPage.imageBird.click({timeout: 30000});

        await expect(pages.FindFoxPage.shitHappensText).toHaveText(" 🐵 🙈 Ne. Takhle ne. 🙉 🙊 ")
    })

    test("Find Bear and shit-happens text is visible.", async ({ page }) => {
        await pages.FindFoxPage.imageBear.click({timeout: 30000});

        await expect(pages.FindFoxPage.shitHappensText).toBeVisible();
    })

    test("Find Bear and shit-happens text has correct text.", async ({ page }) => {
        await pages.FindFoxPage.imageBear.click({timeout: 30000});

        await expect(pages.FindFoxPage.shitHappensText).toHaveText(" 🐵 🙈 Ne. Takhle ne. 🙉 🙊 ")
    })

    test("Find Rabbit and shit-happens text is visible.", async ({ page }) => {
        await pages.FindFoxPage.imageRabbit.click({timeout: 30000});

        await expect(pages.FindFoxPage.shitHappensText).toBeVisible();
    })

    test("Find Rabbit and shit-happens text has correct text.", async ({ page }) => {
        await pages.FindFoxPage.imageRabbit.click({timeout: 30000});

        await expect(pages.FindFoxPage.shitHappensText).toHaveText(" 🐵 🙈 Ne. Takhle ne. 🙉 🙊 ")
    })

    test("Find Red Bird and shit-happens text is visible.", async ({ page }) => {
        await pages.FindFoxPage.imageRedBird.click({timeout: 30000});

        await expect(pages.FindFoxPage.shitHappensText).toBeVisible();
    })

    test("Find Red Bird and shit-happens text has correct text.", async ({ page }) => {
        await pages.FindFoxPage.imageRedBird.click({timeout: 30000});

        await expect(pages.FindFoxPage.shitHappensText).toHaveText(" 🐵 🙈 Ne. Takhle ne. 🙉 🙊 ")
    })

    test("Find Buffalo and shit-happens text is visible.", async ({ page }) => {
        await pages.FindFoxPage.imageBuffalo.click({timeout: 30000});

        await expect(pages.FindFoxPage.shitHappensText).toBeVisible();
    })

    test("Find Buffalo and shit-happens text has correct text.", async ({ page }) => {
        await pages.FindFoxPage.imageBuffalo.click({timeout: 30000});

        await expect(pages.FindFoxPage.shitHappensText).toHaveText(" 🐵 🙈 Ne. Takhle ne. 🙉 🙊 ")
    })

    test("Find Chicken and shit-happens text is visible.", async ({ page }) => {
        await pages.FindFoxPage.imageChicken.click({timeout: 30000});

        await expect(pages.FindFoxPage.shitHappensText).toBeVisible();
    })

    test("Find Chicken and shit-happens text has correct text.", async ({ page }) => {
        await pages.FindFoxPage.imageChicken.click({timeout: 30000});

        await expect(pages.FindFoxPage.shitHappensText).toHaveText(" 🐵 🙈 Ne. Takhle ne. 🙉 🙊 ")
    })

    test("Find Panda and shit-happens text is visible.", async ({ page }) => {
        await pages.FindFoxPage.imagePanda.click({timeout: 30000});

        await expect(pages.FindFoxPage.shitHappensText).toBeVisible();
    })

    test("Find Panda and shit-happens text has correct text.", async ({ page }) => {
        await pages.FindFoxPage.imagePanda.click({timeout: 30000});

        await expect(pages.FindFoxPage.shitHappensText).toHaveText(" 🐵 🙈 Ne. Takhle ne. 🙉 🙊 ")
    })

    test("Find New Born Chicken and shit-happens text is visible.", async ({ page }) => {
        await pages.FindFoxPage.imageNewBornChicken.click({timeout: 30000});

        await expect(pages.FindFoxPage.shitHappensText).toBeVisible();
    })

    test("Find New Born Chicken and shit-happens text has correct text.", async ({ page }) => {
        await pages.FindFoxPage.imageNewBornChicken.click({timeout: 30000});

        await expect(pages.FindFoxPage.shitHappensText).toHaveText(" 🐵 🙈 Ne. Takhle ne. 🙉 🙊 ")
    })

    test("Find Monkey hidding its ears and shit-happens text is visible.", async ({ page }) => {
        await pages.FindFoxPage.imageMonkeyEars.click({timeout: 30000});

        await expect(pages.FindFoxPage.shitHappensText).toBeVisible();
    })

    test("Find Monkey hidding its ears and shit-happens text has correct text.", async ({ page }) => {
        await pages.FindFoxPage.imageMonkeyEars.click({timeout: 30000});

        await expect(pages.FindFoxPage.shitHappensText).toHaveText(" 🐵 🙈 Ne. Takhle ne. 🙉 🙊 ")
    })

    test("Find Spider and shit-happens text is visible.", async ({ page }) => {
        await pages.FindFoxPage.imageSpider.click({timeout: 30000});

        await expect(pages.FindFoxPage.shitHappensText).toBeVisible();
    })

    test("Find Spider and shit-happens text has correct text.", async ({ page }) => {
        await pages.FindFoxPage.imageSpider.click({timeout: 30000});

        await expect(pages.FindFoxPage.shitHappensText).toHaveText(" 🐵 🙈 Ne. Takhle ne. 🙉 🙊 ")
    })

    test("Find Pinguin and shit-happens text is visible.", async ({ page }) => {
        await pages.FindFoxPage.imagePinguin.click({timeout: 30000});

        await expect(pages.FindFoxPage.shitHappensText).toBeVisible();
    })

    test("Find Pinguin and shit-happens text has correct text.", async ({ page }) => {
        await pages.FindFoxPage.imagePinguin.click({timeout: 30000});

        await expect(pages.FindFoxPage.shitHappensText).toHaveText(" 🐵 🙈 Ne. Takhle ne. 🙉 🙊 ")
    })

    test("Find Caterpillar and shit-happens text is visible.", async ({ page }) => {
        await pages.FindFoxPage.imageCaterpillar.click({timeout: 30000});

        await expect(pages.FindFoxPage.shitHappensText).toBeVisible();
    })

    test("Find Caterpillar and shit-happens text has correct text.", async ({ page }) => {
        await pages.FindFoxPage.imageCaterpillar.click({timeout: 30000});

        await expect(pages.FindFoxPage.shitHappensText).toHaveText(" 🐵 🙈 Ne. Takhle ne. 🙉 🙊 ")
    })

    test("Find Gepard and shit-happens text is visible.", async ({ page }) => {
        await pages.FindFoxPage.imageGepard.click({timeout: 30000});

        await expect(pages.FindFoxPage.shitHappensText).toBeVisible();
    })

    test("Find Gepard and shit-happens text has correct text.", async ({ page }) => {
        await pages.FindFoxPage.imageGepard.click({timeout: 30000});

        await expect(pages.FindFoxPage.shitHappensText).toHaveText(" 🐵 🙈 Ne. Takhle ne. 🙉 🙊 ")
    })

    test("Find Fish and shit-happens text is visible.", async ({ page }) => {
        await pages.FindFoxPage.imageFish.click({timeout: 30000});

        await expect(pages.FindFoxPage.shitHappensText).toBeVisible();
    })

    test("Find Fish and shit-happens text has correct text.", async ({ page }) => {
        await pages.FindFoxPage.imageFish.click({timeout: 30000});

        await expect(pages.FindFoxPage.shitHappensText).toHaveText(" 🐵 🙈 Ne. Takhle ne. 🙉 🙊 ")
    })

    test("Find Owl and shit-happens text is visible.", async ({ page }) => {
        await pages.FindFoxPage.imageOwl.click({timeout: 30000});

        await expect(pages.FindFoxPage.shitHappensText).toBeVisible();
    })

    test("Find Owl and shit-happens text has correct text.", async ({ page }) => {
        await pages.FindFoxPage.imageOwl.click({timeout: 30000});

        await expect(pages.FindFoxPage.shitHappensText).toHaveText(" 🐵 🙈 Ne. Takhle ne. 🙉 🙊 ")
    })

    test("Find Dinosaur and shit-happens text is visible.", async ({ page }) => {
        await pages.FindFoxPage.imageDinosaur.click({timeout: 30000});

        await expect(pages.FindFoxPage.shitHappensText).toBeVisible();
    })

    test("Find Dinosaur and shit-happens text has correct text.", async ({ page }) => {
        await pages.FindFoxPage.imageDinosaur.click({timeout: 30000});

        await expect(pages.FindFoxPage.shitHappensText).toHaveText(" 🐵 🙈 Ne. Takhle ne. 🙉 🙊 ")
    })

    test("Find Shark and shit-happens text is visible.", async ({ page }) => {
        await pages.FindFoxPage.imageShark.click({timeout: 30000});

        await expect(pages.FindFoxPage.shitHappensText).toBeVisible();
    })

    test("Find Shark and shit-happens text has correct text.", async ({ page }) => {
        await pages.FindFoxPage.imageShark.click({timeout: 30000});

        await expect(pages.FindFoxPage.shitHappensText).toHaveText(" 🐵 🙈 Ne. Takhle ne. 🙉 🙊 ")
    })

    test("Find Cow and shit-happens text is visible.", async ({ page }) => {
        await pages.FindFoxPage.imageCow.click({timeout: 30000});

        await expect(pages.FindFoxPage.shitHappensText).toBeVisible();
    })

    test("Find Cow and shit-happens text has correct text.", async ({ page }) => {
        await pages.FindFoxPage.imageCow.click({timeout: 30000});

        await expect(pages.FindFoxPage.shitHappensText).toHaveText(" 🐵 🙈 Ne. Takhle ne. 🙉 🙊 ")
    })

    test("Find Spider web and shit-happens text is visible.", async ({ page }) => {
        await pages.FindFoxPage.imageSpiderWeb.click({timeout: 30000});

        await expect(pages.FindFoxPage.shitHappensText).toBeVisible();
    })

    test("Find Spider web and shit-happens text has correct text.", async ({ page }) => {
        await pages.FindFoxPage.imageSpiderWeb.click({timeout: 30000});

        await expect(pages.FindFoxPage.shitHappensText).toHaveText(" 🐵 🙈 Ne. Takhle ne. 🙉 🙊 ")
    })

    test("Find Wolf and shit-happens text is visible.", async ({ page }) => {
        await pages.FindFoxPage.imageWolf.click({timeout: 30000});

        await expect(pages.FindFoxPage.shitHappensText).toBeVisible();
    })

    test("Find Wolf and shit-happens text has correct text.", async ({ page }) => {
        await pages.FindFoxPage.imageWolf.click({timeout: 30000});

        await expect(pages.FindFoxPage.shitHappensText).toHaveText(" 🐵 🙈 Ne. Takhle ne. 🙉 🙊 ")
    })

    test("Find Cock and shit-happens text is visible.", async ({ page }) => {
        await pages.FindFoxPage.imageCock.click({timeout: 30000});

        await expect(pages.FindFoxPage.shitHappensText).toBeVisible();
    })

    test("Find Cock and shit-happens text has correct text.", async ({ page }) => {
        await pages.FindFoxPage.imageCock.click({timeout: 30000});

        await expect(pages.FindFoxPage.shitHappensText).toHaveText(" 🐵 🙈 Ne. Takhle ne. 🙉 🙊 ")
    })

    test("Find Crocodile and shit-happens text is visible.", async ({ page }) => {
        await pages.FindFoxPage.imageCrocodile.click({timeout: 30000});

        await expect(pages.FindFoxPage.shitHappensText).toBeVisible();
    })

    test("Find Crocodile and shit-happens text has correct text.", async ({ page }) => {
        await pages.FindFoxPage.imageCrocodile.click({timeout: 30000});

        await expect(pages.FindFoxPage.shitHappensText).toHaveText(" 🐵 🙈 Ne. Takhle ne. 🙉 🙊 ")
    })

    test("Find Cow Head and shit-happens text is visible.", async ({ page }) => {
        await pages.FindFoxPage.imageCowHead.click({timeout: 30000});

        await expect(pages.FindFoxPage.shitHappensText).toBeVisible();
    })

    test("Find Cow Head and shit-happens text has correct text.", async ({ page }) => {
        await pages.FindFoxPage.imageCowHead.click({timeout: 30000});

        await expect(pages.FindFoxPage.shitHappensText).toHaveText(" 🐵 🙈 Ne. Takhle ne. 🙉 🙊 ")
    })

    test("Find Mouse Head and shit-happens text is visible.", async ({ page }) => {
        await pages.FindFoxPage.imageMouseHead.click({timeout: 30000});

        await expect(pages.FindFoxPage.shitHappensText).toBeVisible();
    })

    test("Find Mouse Head and shit-happens text has correct text.", async ({ page }) => {
        await pages.FindFoxPage.imageMouseHead.click({timeout: 30000});

        await expect(pages.FindFoxPage.shitHappensText).toHaveText(" 🐵 🙈 Ne. Takhle ne. 🙉 🙊 ")
    })

    test("Find Gorilla and shit-happens text is visible.", async ({ page }) => {
        await pages.FindFoxPage.imageGorilla.click({timeout: 30000});

        await expect(pages.FindFoxPage.shitHappensText).toBeVisible();
    })

    test("Find Gorilla and shit-happens text has correct text.", async ({ page }) => {
        await pages.FindFoxPage.imageGorilla.click({timeout: 30000});

        await expect(pages.FindFoxPage.shitHappensText).toHaveText(" 🐵 🙈 Ne. Takhle ne. 🙉 🙊 ")
    })

    test("Find Unicorn and shit-happens text is visible.", async ({ page }) => {
        await pages.FindFoxPage.imageUnicorn.click({timeout: 30000});

        await expect(pages.FindFoxPage.shitHappensText).toBeVisible();
    })

    test("Find Unicorn and shit-happens text has correct text.", async ({ page }) => {
        await pages.FindFoxPage.imageUnicorn.click({timeout: 30000});

        await expect(pages.FindFoxPage.shitHappensText).toHaveText(" 🐵 🙈 Ne. Takhle ne. 🙉 🙊 ")
    })

    test("Find Dolphin and shit-happens text is visible.", async ({ page }) => {
        await pages.FindFoxPage.imageDolphin.click({timeout: 30000});

        await expect(pages.FindFoxPage.shitHappensText).toBeVisible();
    })

    test("Find Dolphin and shit-happens text has correct text.", async ({ page }) => {
        await pages.FindFoxPage.imageDolphin.click({timeout: 30000});

        await expect(pages.FindFoxPage.shitHappensText).toHaveText(" 🐵 🙈 Ne. Takhle ne. 🙉 🙊 ")
    })

    test("Find Goat and shit-happens text is visible.", async ({ page }) => {
        await pages.FindFoxPage.imageGoat.click({timeout: 30000});

        await expect(pages.FindFoxPage.shitHappensText).toBeVisible();
    })

    test("Find Goat and shit-happens text has correct text.", async ({ page }) => {
        await pages.FindFoxPage.imageGoat.click({timeout: 30000});

        await expect(pages.FindFoxPage.shitHappensText).toHaveText(" 🐵 🙈 Ne. Takhle ne. 🙉 🙊 ")
    })

    test("Find Lizard and shit-happens text is visible.", async ({ page }) => {
        await pages.FindFoxPage.imageLizard.click({timeout: 30000});

        await expect(pages.FindFoxPage.shitHappensText).toBeVisible();
    })

    test("Find Lizard and shit-happens text has correct text.", async ({ page }) => {
        await pages.FindFoxPage.imageLizard.click({timeout: 30000});

        await expect(pages.FindFoxPage.shitHappensText).toHaveText(" 🐵 🙈 Ne. Takhle ne. 🙉 🙊 ")
    })

    test("Find Kangaroo and shit-happens text is visible.", async ({ page }) => {
        await pages.FindFoxPage.imageKangaroo.click({timeout: 30000});

        await expect(pages.FindFoxPage.shitHappensText).toBeVisible();
    })

    test("Find Kangaroo and shit-happens text has correct text.", async ({ page }) => {
        await pages.FindFoxPage.imageKangaroo.click({timeout: 30000});

        await expect(pages.FindFoxPage.shitHappensText).toHaveText(" 🐵 🙈 Ne. Takhle ne. 🙉 🙊 ")
    })

    test("Find Blue Fish and shit-happens text is visible.", async ({ page }) => {
        await pages.FindFoxPage.imageFish.click({timeout: 30000});

        await expect(pages.FindFoxPage.shitHappensText).toBeVisible();
    })

    test("Find Blue Fish and shit-happens text has correct text.", async ({ page }) => {
        await pages.FindFoxPage.imageFishBlue.click({timeout: 30000});

        await expect(pages.FindFoxPage.shitHappensText).toHaveText(" 🐵 🙈 Ne. Takhle ne. 🙉 🙊 ")
    })

    test("Find Hippopotamus and shit-happens text is visible.", async ({ page }) => {
        await pages.FindFoxPage.imageHippopotamus.click({timeout: 30000});

        await expect(pages.FindFoxPage.shitHappensText).toBeVisible();
    })

    test("Find Hippopotamus and shit-happens text has correct text.", async ({ page }) => {
        await pages.FindFoxPage.imageHippopotamus.click({timeout: 30000});

        await expect(pages.FindFoxPage.shitHappensText).toHaveText(" 🐵 🙈 Ne. Takhle ne. 🙉 🙊 ")
    })

    test("Find Squirrel and shit-happens text is visible.", async ({ page }) => {
        await pages.FindFoxPage.imageSquirrel.click({timeout: 30000});

        await expect(pages.FindFoxPage.shitHappensText).toBeVisible();
    })

    test("Find Squirrel and shit-happens text has correct text.", async ({ page }) => {
        await pages.FindFoxPage.imageSquirrel.click({timeout: 30000});

        await expect(pages.FindFoxPage.shitHappensText).toHaveText(" 🐵 🙈 Ne. Takhle ne. 🙉 🙊 ")
    })

    test("Find LadyBird and shit-happens text is visible.", async ({ page }) => {
        await pages.FindFoxPage.imageLadyBird.click({timeout: 30000});

        await expect(pages.FindFoxPage.shitHappensText).toBeVisible();
    })

    test("Find LadyBird and shit-happens text has correct text.", async ({ page }) => {
        await pages.FindFoxPage.imageLadyBird.click({timeout: 30000});

        await expect(pages.FindFoxPage.shitHappensText).toHaveText(" 🐵 🙈 Ne. Takhle ne. 🙉 🙊 ")
    })

    test("Find KoalaHead and shit-happens text is visible.", async ({ page }) => {
        await pages.FindFoxPage.imageKoalaHead.click({timeout: 30000});

        await expect(pages.FindFoxPage.shitHappensText).toBeVisible();
    })

    test("Find KoalaHead and shit-happens text has correct text.", async ({ page }) => {
        await pages.FindFoxPage.imageKoalaHead.click({timeout: 30000});

        await expect(pages.FindFoxPage.shitHappensText).toHaveText(" 🐵 🙈 Ne. Takhle ne. 🙉 🙊 ")
    })

    test("Find Tigre and shit-happens text is visible.", async ({ page }) => {
        await pages.FindFoxPage.imageTigre.click({timeout: 30000});

        await expect(pages.FindFoxPage.shitHappensText).toBeVisible();
    })

    test("Find Tigre and shit-happens text has correct text.", async ({ page }) => {
        await pages.FindFoxPage.imageTigre.click({timeout: 30000});

        await expect(pages.FindFoxPage.shitHappensText).toHaveText(" 🐵 🙈 Ne. Takhle ne. 🙉 🙊 ")
    })

    test("Find Camel and shit-happens text is visible.", async ({ page }) => {
        await pages.FindFoxPage.imageCamel.click({timeout: 30000});

        await expect(pages.FindFoxPage.shitHappensText).toBeVisible();
    })

    test("Find Camel and shit-happens text has correct text.", async ({ page }) => {
        await pages.FindFoxPage.imageCamel.click({timeout: 30000});

        await expect(pages.FindFoxPage.shitHappensText).toHaveText(" 🐵 🙈 Ne. Takhle ne. 🙉 🙊 ")
    })

    test("Find Monkey hidding mouth and shit-happens text is visible.", async ({ page }) => {
        await pages.FindFoxPage.imageMonkeyMouth.click({timeout: 30000});

        await expect(pages.FindFoxPage.shitHappensText).toBeVisible();
    })

    test("Find Monkey hidding mouth and shit-happens text has correct text.", async ({ page }) => {
        await pages.FindFoxPage.imageMonkeyMouth.click({timeout: 30000});

        await expect(pages.FindFoxPage.shitHappensText).toHaveText(" 🐵 🙈 Ne. Takhle ne. 🙉 🙊 ")
    })

    test("Find Sheep and shit-happens text is visible.", async ({ page }) => {
        await pages.FindFoxPage.imageSheep.click({timeout: 30000});

        await expect(pages.FindFoxPage.shitHappensText).toBeVisible();
    })

    test("Find Sheep and shit-happens text has correct text.", async ({ page }) => {
        await pages.FindFoxPage.imageSheep.click({timeout: 30000});

        await expect(pages.FindFoxPage.shitHappensText).toHaveText(" 🐵 🙈 Ne. Takhle ne. 🙉 🙊 ")
    })

    test("Find Monkey hidding head and shit-happens text is visible.", async ({ page }) => {
        await pages.FindFoxPage.imageMonkeyHead.click({timeout: 30000});

        await expect(pages.FindFoxPage.shitHappensText).toBeVisible();
    })

    test("Find Monkey hidding head and shit-happens text has correct text.", async ({ page }) => {
        await pages.FindFoxPage.imageMonkeyHead.click({timeout: 30000});

        await expect(pages.FindFoxPage.shitHappensText).toHaveText(" 🐵 🙈 Ne. Takhle ne. 🙉 🙊 ")
    })

    test("Find Horse and shit-happens text is visible.", async ({ page }) => {
        await pages.FindFoxPage.imageHorse.click({timeout: 30000});

        await expect(pages.FindFoxPage.shitHappensText).toBeVisible();
    })

    test("Find Horse and shit-happens text has correct text.", async ({ page }) => {
        await pages.FindFoxPage.imageHorse.click({timeout: 30000});

        await expect(pages.FindFoxPage.shitHappensText).toHaveText(" 🐵 🙈 Ne. Takhle ne. 🙉 🙊 ")
    })

    test("Find Snail and shit-happens text is visible.", async ({ page }) => {
        await pages.FindFoxPage.imageSnail.click({timeout: 30000});

        await expect(pages.FindFoxPage.shitHappensText).toBeVisible();
    })

    test("Find Snail and shit-happens text has correct text.", async ({ page }) => {
        await pages.FindFoxPage.imageSnail.click({timeout: 30000});

        await expect(pages.FindFoxPage.shitHappensText).toHaveText(" 🐵 🙈 Ne. Takhle ne. 🙉 🙊 ")
    })

    test("Find Pig Head and shit-happens text is visible.", async ({ page }) => {
        await pages.FindFoxPage.imagePigHead.click({timeout: 30000});

        await expect(pages.FindFoxPage.shitHappensText).toBeVisible();
    })

    test("Find Pig Head and shit-happens text has correct text.", async ({ page }) => {
        await pages.FindFoxPage.imagePigHead.click({timeout: 30000});

        await expect(pages.FindFoxPage.shitHappensText).toHaveText(" 🐵 🙈 Ne. Takhle ne. 🙉 🙊 ")
    })

    test("Find Mosquito and shit-happens text is visible.", async ({ page }) => {
        await pages.FindFoxPage.imageMosquito.click({timeout: 30000});

        await expect(pages.FindFoxPage.shitHappensText).toBeVisible();
    })

    test("Find Mosquito and shit-happens text has correct text.", async ({ page }) => {
        await pages.FindFoxPage.imageMosquito.click({timeout: 30000});

        await expect(pages.FindFoxPage.shitHappensText).toHaveText(" 🐵 🙈 Ne. Takhle ne. 🙉 🙊 ")
    })

    test("Find Boar Head and shit-happens text is visible.", async ({ page }) => {
        await pages.FindFoxPage.imageBoarHead.click({timeout: 30000});

        await expect(pages.FindFoxPage.shitHappensText).toBeVisible();
    })

    test("Find Boar Head and shit-happens text has correct text.", async ({ page }) => {
        await pages.FindFoxPage.imageBoarHead.click({timeout: 30000});

        await expect(pages.FindFoxPage.shitHappensText).toHaveText(" 🐵 🙈 Ne. Takhle ne. 🙉 🙊 ")
    })

    test("Find Rhinoceros and shit-happens text is visible.", async ({ page }) => {
        await pages.FindFoxPage.imageRhinoceros.click({timeout: 30000});

        await expect(pages.FindFoxPage.shitHappensText).toBeVisible();
    })

    test("Find Rhinoceros and shit-happens text has correct text.", async ({ page }) => {
        await pages.FindFoxPage.imageRhinoceros.click({timeout: 30000});

        await expect(pages.FindFoxPage.shitHappensText).toHaveText(" 🐵 🙈 Ne. Takhle ne. 🙉 🙊 ")
    })

    test("Find Peacock and shit-happens text is visible.", async ({ page }) => {
        await pages.FindFoxPage.imagePeacock.click({timeout: 30000});

        await expect(pages.FindFoxPage.shitHappensText).toBeVisible();
    })

    test("Find Peacock and shit-happens text has correct text.", async ({ page }) => {
        await pages.FindFoxPage.imagePeacock.click({timeout: 30000});

        await expect(pages.FindFoxPage.shitHappensText).toHaveText(" 🐵 🙈 Ne. Takhle ne. 🙉 🙊 ")
    })

    test("Find Bull and shit-happens text is visible.", async ({ page }) => {
        await pages.FindFoxPage.imageBull.click({timeout: 30000});

        await expect(pages.FindFoxPage.shitHappensText).toBeVisible();
    })

    test("Find Bull and shit-happens text has correct text.", async ({ page }) => {
        await pages.FindFoxPage.imageBull.click({timeout: 30000});

        await expect(pages.FindFoxPage.shitHappensText).toHaveText(" 🐵 🙈 Ne. Takhle ne. 🙉 🙊 ")
    })

    test("Find Brontosaurus and shit-happens text is visible.", async ({ page }) => {
        await pages.FindFoxPage.imageBrontosaurus.click({timeout: 30000});

        await expect(pages.FindFoxPage.shitHappensText).toBeVisible();
    })

    test("Find Brontosaurus and shit-happens text has correct text.", async ({ page }) => {
        await pages.FindFoxPage.imageBrontosaurus.click({timeout: 30000});

        await expect(pages.FindFoxPage.shitHappensText).toHaveText(" 🐵 🙈 Ne. Takhle ne. 🙉 🙊 ")
    })

    test("Find Jellyfish and shit-happens text is visible.", async ({ page }) => {
        await pages.FindFoxPage.imageJellyfish.click({timeout: 30000});

        await expect(pages.FindFoxPage.shitHappensText).toBeVisible();
    })

    test("Find Jellyfish and shit-happens text has correct text.", async ({ page }) => {
        await pages.FindFoxPage.imageJellyfish.click({timeout: 30000});

        await expect(pages.FindFoxPage.shitHappensText).toHaveText(" 🐵 🙈 Ne. Takhle ne. 🙉 🙊 ")
    })

    test("Find Octopus and shit-happens text is visible.", async ({ page }) => {
        await pages.FindFoxPage.imageOctopus.click({timeout: 30000});

        await expect(pages.FindFoxPage.shitHappensText).toBeVisible();
    })

    test("Find Octopus and shit-happens text has correct text.", async ({ page }) => {
        await pages.FindFoxPage.imageOctopus.click({timeout: 30000});

        await expect(pages.FindFoxPage.shitHappensText).toHaveText(" 🐵 🙈 Ne. Takhle ne. 🙉 🙊 ")
    })

    test("Find Snake and shit-happens text is visible.", async ({ page }) => {
        await pages.FindFoxPage.imageSnake.click({timeout: 30000});

        await expect(pages.FindFoxPage.shitHappensText).toBeVisible();
    })

    test("Find Snake and shit-happens text has correct text.", async ({ page }) => {
        await pages.FindFoxPage.imageSnake.click({timeout: 30000});

        await expect(pages.FindFoxPage.shitHappensText).toHaveText(" 🐵 🙈 Ne. Takhle ne. 🙉 🙊 ")
    })

    test("Find Swan and shit-happens text is visible.", async ({ page }) => {
        await pages.FindFoxPage.imageSwan.click({timeout: 30000});

        await expect(pages.FindFoxPage.shitHappensText).toBeVisible();
    })

    test("Find Swan and shit-happens text has correct text.", async ({ page }) => {
        await pages.FindFoxPage.imageSwan.click({timeout: 30000});

        await expect(pages.FindFoxPage.shitHappensText).toHaveText(" 🐵 🙈 Ne. Takhle ne. 🙉 🙊 ")
    })

    test("Find Hedgehog and shit-happens text is visible.", async ({ page }) => {
        await pages.FindFoxPage.imageHedgehog.click({timeout: 30000});

        await expect(pages.FindFoxPage.shitHappensText).toBeVisible();
    })

    test("Find Hedgehog and shit-happens text has correct text.", async ({ page }) => {
        await pages.FindFoxPage.imageHedgehog.click({timeout: 30000});

        await expect(pages.FindFoxPage.shitHappensText).toHaveText(" 🐵 🙈 Ne. Takhle ne. 🙉 🙊 ")
    })

    test("Find Crab and shit-happens text is visible.", async ({ page }) => {
        await pages.FindFoxPage.imageCrab.click({timeout: 30000});

        await expect(pages.FindFoxPage.shitHappensText).toBeVisible();
    })

    test("Find Crab and shit-happens text has correct text.", async ({ page }) => {
        await pages.FindFoxPage.imageCrab.click({timeout: 30000});

        await expect(pages.FindFoxPage.shitHappensText).toHaveText(" 🐵 🙈 Ne. Takhle ne. 🙉 🙊 ")
    })

    test("Find Bee and shit-happens text is visible.", async ({ page }) => {
        await pages.FindFoxPage.imageBee.click({timeout: 30000});

        await expect(pages.FindFoxPage.shitHappensText).toBeVisible();
    })

    test("Find Bee and shit-happens text has correct text.", async ({ page }) => {
        await pages.FindFoxPage.imageBee.click({timeout: 30000});

        await expect(pages.FindFoxPage.shitHappensText).toHaveText(" 🐵 🙈 Ne. Takhle ne. 🙉 🙊 ")
    })

    test("Find Monkey hidding eyes and shit-happens text is visible.", async ({ page }) => {
        await pages.FindFoxPage.imageMonkeyEyes.click({timeout: 30000});

        await expect(pages.FindFoxPage.shitHappensText).toBeVisible();
    })

    test("Find Monkey hidding eyes and shit-happens text has correct text.", async ({ page }) => {
        await pages.FindFoxPage.imageMonkeyEyes.click({timeout: 30000});

        await expect(pages.FindFoxPage.shitHappensText).toHaveText(" 🐵 🙈 Ne. Takhle ne. 🙉 🙊 ")
    })

    test("Find Bat and shit-happens text is visible.", async ({ page }) => {
        await pages.FindFoxPage.imageBat.click({timeout: 30000});

        await expect(pages.FindFoxPage.shitHappensText).toBeVisible();
    })

    test("Find Bat and shit-happens text has correct text.", async ({ page }) => {
        await pages.FindFoxPage.imageBat.click({timeout: 30000});

        await expect(pages.FindFoxPage.shitHappensText).toHaveText(" 🐵 🙈 Ne. Takhle ne. 🙉 🙊 ")
    })

    test("Find Frog Head and shit-happens text is visible.", async ({ page }) => {
        await pages.FindFoxPage.imageFrogHead.click({timeout: 30000});

        await expect(pages.FindFoxPage.shitHappensText).toBeVisible();
    })

    test("Find Frog Head and shit-happens text has correct text.", async ({ page }) => {
        await pages.FindFoxPage.imageFrogHead.click({timeout: 30000});

        await expect(pages.FindFoxPage.shitHappensText).toHaveText(" 🐵 🙈 Ne. Takhle ne. 🙉 🙊 ")
    })

    test("Find Dog and shit-happens text is visible.", async ({ page }) => {
        await pages.FindFoxPage.imageDog.click({timeout: 30000});

        await expect(pages.FindFoxPage.shitHappensText).toBeVisible();
    })

    test("Find Dog and shit-happens text has correct text.", async ({ page }) => {
        await pages.FindFoxPage.imageDog.click({timeout: 30000});

        await expect(pages.FindFoxPage.shitHappensText).toHaveText(" 🐵 🙈 Ne. Takhle ne. 🙉 🙊 ")
    })

    test("Find Deer and shit-happens text is visible.", async ({ page }) => {
        await pages.FindFoxPage.imageDeer.click({timeout: 30000});

        await expect(pages.FindFoxPage.shitHappensText).toBeVisible();
    })

    test("Find Deer and shit-happens text has correct text.", async ({ page }) => {
        await pages.FindFoxPage.imageDeer.click({timeout: 30000});

        await expect(pages.FindFoxPage.shitHappensText).toHaveText(" 🐵 🙈 Ne. Takhle ne. 🙉 🙊 ")
    })

    test("Find Raccoon Head and shit-happens text is visible.", async ({ page }) => {
        await pages.FindFoxPage.imageRaccoonHead.click({timeout: 30000});

        await expect(pages.FindFoxPage.shitHappensText).toBeVisible();
    })

    test("Find Raccoon Head and shit-happens text has correct text.", async ({ page }) => {
        await pages.FindFoxPage.imageRaccoonHead.click({timeout: 30000});

        await expect(pages.FindFoxPage.shitHappensText).toHaveText(" 🐵 🙈 Ne. Takhle ne. 🙉 🙊 ")
    })

    test("Find Rabbit Head and shit-happens text is visible.", async ({ page }) => {
        await pages.FindFoxPage.imageRabbitHead.click({timeout: 30000});

        await expect(pages.FindFoxPage.shitHappensText).toBeVisible();
    })

    test("Find Rabbit Head and shit-happens text has correct text.", async ({ page }) => {
        await pages.FindFoxPage.imageRabbitHead.click({timeout: 30000});

        await expect(pages.FindFoxPage.shitHappensText).toHaveText(" 🐵 🙈 Ne. Takhle ne. 🙉 🙊 ")
    })

    test("Find Elephant and shit-happens text is visible.", async ({ page }) => {
        await pages.FindFoxPage.imageElephant.click({timeout: 30000});

        await expect(pages.FindFoxPage.shitHappensText).toBeVisible();
    })

    test("Find Elephant and shit-happens text has correct text.", async ({ page }) => {
        await pages.FindFoxPage.imageElephant.click({timeout: 30000});

        await expect(pages.FindFoxPage.shitHappensText).toHaveText(" 🐵 🙈 Ne. Takhle ne. 🙉 🙊 ")
    })

    test("Find Zebra and shit-happens text is visible.", async ({ page }) => {
        await pages.FindFoxPage.imageZebra.click({timeout: 30000});

        await expect(pages.FindFoxPage.shitHappensText).toBeVisible();
    })

    test("Find Zebra and shit-happens text has correct text.", async ({ page }) => {
        await pages.FindFoxPage.imageZebra.click({timeout: 30000});

        await expect(pages.FindFoxPage.shitHappensText).toHaveText(" 🐵 🙈 Ne. Takhle ne. 🙉 🙊 ")
    })

    test("Find Cat Head and shit-happens text is visible.", async ({ page }) => {
        await pages.FindFoxPage.imageCatHead.click({timeout: 30000});

        await expect(pages.FindFoxPage.shitHappensText).toBeVisible();
    })

    test("Find Cat Head and shit-happens text has correct text.", async ({ page }) => {
        await pages.FindFoxPage.imageCatHead.click({timeout: 30000});

        await expect(pages.FindFoxPage.shitHappensText).toHaveText(" 🐵 🙈 Ne. Takhle ne. 🙉 🙊 ")
    })

    test("Find Tigre Head and shit-happens text is visible.", async ({ page }) => {
        await pages.FindFoxPage.imageTigreHead.click({timeout: 30000});

        await expect(pages.FindFoxPage.shitHappensText).toBeVisible();
    })

    test("Find Tigre Head and shit-happens text has correct text.", async ({ page }) => {
        await pages.FindFoxPage.imageTigreHead.click({timeout: 30000});

        await expect(pages.FindFoxPage.shitHappensText).toHaveText(" 🐵 🙈 Ne. Takhle ne. 🙉 🙊 ")
    })
    
})