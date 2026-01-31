const { test, expect } = require('@playwright/test');

// Configuration
const CONFIG = {
  url: 'https://www.swifttranslator.com/',
  timeouts: {
    pageLoad: 5000,
    afterClear: 1000,
    translation: 5000,
    betweenTests: 2000
  },
  selectors: {
    inputField: 'Input Your Singlish Text Here.',
    outputContainer: 'div.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300.whitespace-pre-wrap'
  }
};

// Test Data - Completely New Test Cases
const TEST_DATA = {
  positive: [
    
    {
      tcId: 'Pos_Fun_001',
      name: ' simple  daily statement',
      input: 'mama pansal yanavaa',
      expected: 'මම පන්සල් යනවා',
      category: 'Daily language usage',
      grammar: 'Simple sentence',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_002',
      name: 'Convert hesitation expression',
      input: 'mata podi dheyak kiyanna thiyenavaa',
      expected: 'මට පොඩි දෙයක් කියන්න තියෙනවා',
      category: 'Daily language usage',
      grammar: 'Simple sentence',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_003',
      name: 'Embedded English noun phrase',
      input: 'Api budget plan eka start karala thiyanavaa',
      expected: 'අපි budget plan එක start කරල තියනවා',
      category: '  Mixed Singlish + English',
      grammar: 'Simple sentence',
      length: 'S'
    },
    
   
    {
      tcId: 'Pos_Fun_004',
      name: ' Conditional polite refusal',
      input: 'puLuvan nam enna, naethnam mata avulak naehae',
      expected: 'පුළුවන් නම් එන්න, නැත්නම් මට අවුලක් නැහැ',
      category: 'Daily language usage',
      grammar: 'Compound sentence',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_005',
      name: 'Date format preservation in sentence',
      input: 'adha 2026-01-31 venidhaa',
      expected: 'අද 2026-01-31 වෙනිදා',
      category: 'Daily language usage',
      grammar: 'Compound sentence',
      length: 'S'
    },
    
   
    {
      tcId: 'Pos_Fun_006',
      name: 'Future intention with completion marker',
      input: 'mama gedhara gihillaa ithuru tika karanavaa',
      expected: 'මම ගෙදර ගිහිල්ලා ඉතුරු ටික කරනවා',
      category: 'Daily language usage',
      grammar: 'Complex sentence',
      length: 'M'
    },
    
   
    {
      tcId: 'Pos_Fun_007',
      name: 'Conditional sentence with embedded English',
      input: 'havasa lectures naethi unoth mama boodimata yanavaa',
      expected: 'හවස lectures නැති උනොත් මම බෝඩිමට යනවා',
      category: 'Daily language usage',
      grammar: 'Interrogative (question)',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_008',
      name: 'Multi-sentence medium input with English term',
      input: 'mama adha gedhara inne.oyata puluvan nam ape gedhara enna.api dhennama ekata assignment eka karamu',
      expected: 'මම අද ගෙදර ඉන්නේ.ඔයට පුලුවන් නම් අපේ ගෙදර එන්න.අපි දෙන්නම එකට assignment එක කරමු',
      category: 'Daily language usage',
      grammar: 'Interrogative (question)',
      length: 'M'
    },
    {
      tcId: 'Pos_Fun_009',
      name: 'Long narrative with multiple English terms',
      input: 'mama adha udhee gedhara idhiyee. passe kaeema kaala laptop eka open karala IT assignment eka start karalaa, ehema karadhdhi internet poddak slow una nisaa Zoom meeting ekath miss unaa, eth mata WhatsApp eken  yaaluvek message ekak dhaalaa kivvaa lecturer kivvaa kiyalaa deadline eka heta raathrii 11.59 venakal dhik kalaa kiyalaa, ee nisaa mama loku pressure ekak naethuva magee vaeda tika karagaththaa',
      expected: 'මම අද උදේ ගෙදර ඉදියේ. පස්සෙ කෑම කාල laptop එක open කරල IT assignment එක start කරලා, එහෙම කරද්දි internet පොඩ්ඩක් slow උන නිසා Zoom meeting එකත් miss උනා, එත් මට WhatsApp එකෙන් යාලුවෙක් message එකක් දාලා කිව්වා lecturer කිව්වා කියලා deadline එක හෙට රාත්‍රී 11.59 වෙනකල් දික් කලා කියලා, ඒ නිසා මම ලොකු pressure එකක් නැතුව මගේ වැඩ ටික කරගත්තා',
      category: 'Greeting / request / response',
      grammar: 'Interrogative (question)',
      length: 'L'
    },
    
    
    {
      tcId: 'Pos_Fun_010',
      name: ' Short imperative command with immediacy',
      input: 'dhaenma enna',
      expected: 'දැන්ම එන්න',
      category: 'Daily language usage',
      grammar: 'Imperative (command)',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_011',
      name: 'Location-based imperative',
      input: 'othanin thiyanna',
      expected: 'ඔතනින් තියන්න',
      category: 'Greeting / request / response',
      grammar: 'Imperative (command)',
      length: 'S'
    },
    
    {
      tcId: 'Pos_Fun_012',
      name: 'Compound sentence with trip plan and negation',
      input: 'api heta udhee pandhara trip ekak yanna laesthi venavaa.ee nisaa mata enna venne naehae',
      expected: 'අපි හෙට උදේ පන්දර trip එකක් යන්න ලැස්ති වෙනවා.ඒ නිසා මට එන්න වෙන්නෙ නැහැ',
      category: 'Greeting / request / response',
      grammar: 'Simple sentence',
      length: 'M'
    },
    {
      tcId: 'Pos_Fun_013',
      name: 'Formal greeting with special characters',
      input: 'suBha sanDhYaavak veevaa!',
      expected: 'සුභ සන්ධ්‍යාවක් වේවා!',
      category: 'Greeting / request / response',
      grammar: 'Simple sentence',
      length: 'S'
    },
    
    
    {
      tcId: 'Pos_Fun_014',
      name: 'Polite information request question',
      input: 'mata vaedi dhura visthara dhaenaganna puluvandha?',
      expected: 'මට වැඩි දුර විස්තර දැනගන්න පුලුවන්ද?',
      category: 'Daily language usage',
      grammar: 'Interrogative',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_015',
      name: 'Informal request to share information',
      input: 'matath eeka poddak kiyaadhenna',
      expected: 'මටත් ඒක පොඩ්ඩක් කියාදෙන්න',
      category: 'Daily language usage',
      grammar: 'Future tense',
      length: 'S'
    },
    

    {
      tcId: 'Pos_Fun_016',
      name: 'Affirmative response with commitment',
      input: 'hari,mama ehema karannam',
      expected: 'හරි,මම එහෙම කරන්නම්',
      category: 'Daily language usage',
      grammar: 'Affirmative response',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_017',
      name: ' Expressing apology about past event',
      input: 'sidhu una dhee gaena mata kaNagaatuyi',
      expected: 'සිදු උන දේ ගැන මට කණගාටුයි',
      category: 'Daily language usage',
      grammar: 'Negation (negative form)',
      length: 'S'
    },
    
    
    {
      tcId: 'Pos_Fun_018',
      name: 'Polite request with English term',
      input: 'karuNaakaralaa mata details tika dhenavadha?',
      expected: 'කරුණාකරලා මට details ටික දෙනවද?',
      category: 'Daily language usage',
      grammar: 'Plural form',
      length: 'S'
    },
    
    {
      tcId: 'Pos_Fun_019',
      name: 'Imperative with time condition',
      input: 'api enakal ohoma hitapan',
      expected: 'අපි එනකල් ඔහොම හිටපන්',
      category: 'Word combination / phrase pattern',
      grammar: 'Simple sentence',
      length: 'S'
    },
    
    
    {
      tcId: 'Pos_Fun_020',
      name: 'ESimple command to make decision',
      input: 'thiiraNayak ganna',
      expected: 'තීරණයක් ගන්න',
      category: 'Mixed Singlish + English',
      grammar: 'Simple sentence',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_021',
      name: 'Repeated word for emphasis',
      input: 'hemin hemin',
      expected: 'හෙමින් හෙමින්',
      category: 'Names / places / common English words',
      grammar: 'Past tense',
      length: 'S'
    },
    
    {
      tcId: 'Pos_Fun_022',
      name: 'Past tense with English plural noun',
      input: 'mama iiyee lectures giyaa',
      expected: 'මම ඊයේ lectures ගියා',
      category: 'Punctuation / numbers',
      grammar: 'Simple sentence',
      length: 'S'
    },
    
    
    {
      tcId: 'Pos_Fun_023',
      name: 'Question about online lecture status',
      input: 'adha apita lecture eka online dha thiyennee?',
      expected: 'අද අපිට lecture එක online ද තියෙන්නේ?',
      category: 'Punctuation / numbers',
      grammar: 'Simple sentence',
      length: 'S'
    },
    
    
    {
      tcId: 'Pos_Fun_024',
      name: 'Medium length daily task list',
      input: 'mata adha vaeda godak karaganna thiyenavaa.mulinma mata ATM eken salli ganna oone.iita passe mata beheth vagayak gannath thiyanava saha apee gedharata badu tikakuth aran yanna venavaa',
      expected: 'මට අද වැඩ ගොඩක් කරගන්න තියෙනවා.මුලින්ම මට ATM එකෙන් සල්ලි ගන්න ඕනෙ.ඊට පස්සෙ මට බෙහෙත් වගයක් ගන්නත් තියනව සහ අපේ ගෙදරට බඩු ටිකකුත් අරන් යන්න වෙනවා',
      category: 'Daily language usage',
      grammar: 'Compound sentence',
      length: 'M'
    }
  ],
  
  negative: [
    {
      tcId: 'Neg_Fun_001',
      name: 'Joined words without spaces fails',
      input: 'apidhaeneliyatayanavaa',
      expected: 'අපි දැන් එලියට යනවා',
      category: 'Typographical error handling',
      grammar: 'Simple sentence',
      length: 'S'
    },
    {
      tcId: 'Neg_Fun_002',
      name: 'Mixed Singlish-English word fails conversion',
      input: 'manenagaman',
      expected: 'man එනගමන්',
      category: 'Typographical error handling',
      grammar: 'Future tense',
      length: 'S'
    },
    {
      tcId: 'Neg_Fun_003',
      name: 'Slang term misspelling causes partial failure',
      input: 'machn wade supiri',
      expected: 'මචන් වැඩේ සුපිරි',
      category: 'Formatting (spaces / line breaks / paragraph)',
      grammar: 'Simple sentence',
      length: 'S'
    },
    {
      tcId: 'Neg_Fun_004',
      name: 'Measurement unit with number fails partially',
      input: 'enakota hal 1kg genna',
      expected: 'එනකොට හාල් 1kg ගේන්න',
      category: 'Formatting (spaces / line breaks / paragraph)',
      grammar: 'Simple sentence',
      length: 'S'
    },
    {
      tcId: 'Neg_Fun_005',
      name: 'Mixed English-Singlish pronoun fails',
      input: 'man mee paara panthiye 3veniyaa',
      expected: 'man මේ පාර පන්තියේ තුන්වෙනියා',
      category: 'Slang / informal language',
      grammar: 'Simple sentence',
      length: 'S'
    },
    {
      tcId: 'Neg_Fun_006',
      name: ' Special characters not removed',
      input: 'mama @@gamata yanavaa',
      expected: 'මම ගමට යනවා',
      category: 'Slang / informal language',
      grammar: 'Interrogative (question)',
      length: 'S'
    },
    {
      tcId: 'Neg_Fun_007',
      name: 'English word not converted in mixed input',
      input: 'pitipassen inn',
      expected: 'පිටිපස්සෙන් ඉන්න',
      category: 'Mixed Singlish + English',
      grammar: 'Past tense',
      length: 'S'
    },
    {
      tcId: 'Neg_Fun_008',
      name: 'Currency symbol and word misspelling',
      input: 'mama Rs. 2500 k viyadam karalaa',
      expected: 'මම Rs. 2500 ක් වියදම් කරලා',
      category: 'Names / places / common English words',
      grammar: 'Simple sentence',
      length: 'S'
    },
    {
      tcId: 'Neg_Fun_009',
      name: 'Vowel combination processed incorrectly',
      input: 'Aiyo ehemadha',
      expected: 'අයියෝ එහෙමද',
      category: 'Typographical error handling',
      grammar: 'Interrogative (question)',
      length: 'S'
    },
    
  ],
  
  ui: {
    tcId: 'Pos_UI_001',
    name: 'Real-time output updates correctly',
    input: 'mata badaginiyi',
    partialInput: 'mata badag',
    expectedFull: 'මට බඩගිනියි',
    category: 'Usability flow',
    grammar: 'Present tense',
    length: 'S'
  }
  



};

// Utility: normalize whitespace for stable comparisons
function normalizeText(s) {
  return (s || '').toString().replace(/\s+/g, ' ').trim();
}

// Helper Functions
class TranslatorPage {
  constructor(page) {
    this.page = page;
  }

  async navigateToSite() {
    await this.page.goto(CONFIG.url);
    await this.page.waitForLoadState('networkidle');
    await this.page.waitForTimeout(CONFIG.timeouts.pageLoad);
  }

  async getInputField() {
    // Use placeholder-based locator which is more robust for this site
    return this.page.locator('textarea[placeholder="Input Your Singlish Text Here."]');
  }

  async getOutputField() {
    return this.page
      .locator(CONFIG.selectors.outputContainer)
      .filter({ hasNot: this.page.locator('textarea') })
      .first();
  }

  async clearAndWait() {
    const input = await this.getInputField();
    await input.clear();
    await this.page.waitForTimeout(CONFIG.timeouts.afterClear);
  }

  async typeInput(text) {
    const input = await this.getInputField();
    await input.fill(text);
  }

  async waitForOutput() {
    await this.page.waitForFunction(
      () => {
        const elements = Array.from(
          document.querySelectorAll('.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300.whitespace-pre-wrap')
        );
        const output = elements.find(el => {
          const isInputField = el.tagName === 'TEXTAREA' || el.getAttribute('role') === 'textbox';
          return !isInputField && el.textContent && el.textContent.trim().length > 0;
        });
        return output !== undefined;
      },
      { timeout: 10000 }
    );
    await this.page.waitForTimeout(CONFIG.timeouts.translation);
  }

  async getOutputText() {
    const output = await this.getOutputField();
    const text = await output.textContent();
    return text.trim();
  }

  async performTranslation(inputText) {
    await this.clearAndWait();
    await this.typeInput(inputText);
    await this.waitForOutput();
    return await this.getOutputText();
  }
}

// Test Suite
test.describe('SwiftTranslator - Singlish to Sinhala Conversion Tests', () => {
  let translator;

  test.beforeEach(async ({ page }) => {
    translator = new TranslatorPage(page);
    await translator.navigateToSite();
  });

  // Positive Functional Tests
  test.describe('Positive Functional Tests', () => {
    for (const testCase of TEST_DATA.positive) {
      test(`${testCase.tcId} - ${testCase.name}`, async () => {
        const actualOutput = await translator.performTranslation(testCase.input);
        expect(normalizeText(actualOutput)).toBe(normalizeText(testCase.expected));
        await translator.page.waitForTimeout(CONFIG.timeouts.betweenTests);
      });
    }
  });

  // Negative Functional Tests
  test.describe('Negative Functional Tests', () => {
    for (const testCase of TEST_DATA.negative) {
      test(`${testCase.tcId} - ${testCase.name}`, async () => {
        const actualOutput = await translator.performTranslation(testCase.input);
        expect(normalizeText(actualOutput)).toBe(normalizeText(testCase.expected));
        await translator.page.waitForTimeout(CONFIG.timeouts.betweenTests);
      });
    }
  });

  // UI Test
  test.describe('UI Functionality Tests', () => {
    test(`${TEST_DATA.ui.tcId} - ${TEST_DATA.ui.name}`, async ({ page }) => {
      const translator = new TranslatorPage(page);
      const input = await translator.getInputField();
      const output = await translator.getOutputField();

      await translator.clearAndWait();
      
      // Type partial input (use Playwright `type`)
      await input.type(TEST_DATA.ui.partialInput, { delay: 150 });
      
      // Wait for partial output
      await page.waitForTimeout(1500);
      
      // Verify partial translation appears
      let outputText = await output.textContent();
      expect(outputText.trim().length).toBeGreaterThan(0);
      
      // Complete typing
      await input.type(TEST_DATA.ui.input.substring(TEST_DATA.ui.partialInput.length), { delay: 150 });
      
      // Wait for full translation
      await translator.waitForOutput();
      
      // Verify full translation
      outputText = await translator.getOutputText();
      expect(normalizeText(outputText)).toBe(normalizeText(TEST_DATA.ui.expectedFull));
      
      await page.waitForTimeout(CONFIG.timeouts.betweenTests);
    });
  });
});