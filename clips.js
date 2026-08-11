/* This is a multi-line comment, it won't be read by the code
 * You can add single-line comments with just two slashes, like above the tag list below
 * 
 * HOW THIS FILE WORKS
 * 
 * TAGS
 * `const tags` is what's called a "list" of the tags in use in this document. In general lists are
 * structured like [item1, item2, item3]. Note :
 *      * The square brackets on either side [] tell the code it is a list
 *      * The items in the list are separated by a comma
 * In this case, `tags` is a list of "dictionaries". Dictionaries are sets key/value pairs, in this case, one pair
 * in each dictionary (the clips have more pairs) The first dictionary has one key, "ffaar", and one 
 * value "factory farming...", which tells the code on the webpage that the tag "ffaar" should be displayed as
 * "factory farming, animals, & animal rights". the keys and values enclosed in "double quotes" 
 * and separated by a colon; each dictionary is enclosed by curly braces {} and, like any items in a list, are 
 * separated by commas.
 * 
 * CLIPS
 * `const clips` is also a list of dictionaries, [{clip1}, {clip2}, {clip3} ...] except unlike the tag dictionaries, 
 * the clip dictionaries have several different keys, so that the code can grab the hed, dek, date, etc for each story
 * 
 * The order of the clips within the list of clips matters (though the code sorts it by date), while the order of the
 * attributes of each clip doesn't matter -- the code will recogize the bit after `"hed" : ` as the headline regardless
 * of whether it comes before or after the "dek"
 * 
 * Every clip should be enclosed by curly braces and followed by a comma {}, -- except the last one, 
 * which needs to NOT be followed by a comma (remember, this is just a comma-separated list)
 * The javascript on the page handles turning the topic/hed into a link, parsing the date, etc
 * 
 * There are two formats this list uses to store clips. The first, which displays headlines, looks like this:
 * {
       "hed" : "The brutal trade-off that will decide the future of food",
       "dek" : "A growing number of thinkers say factory farming can help save the planet. Are they right?",
       "outlet" : "Vox",
       "date" : "2025-08",
       "link" : "https://www.vox.com/future-perfect/422708/future-of-food-abundance-factory-farming-grunwald",
       "tags" : "ffaar, meat-less, environment, ideas, books"
   },
 * The second, which is nice for those Harvard Magazine stories that are "On ______" uses topics, looks like this with no dek
 *  {
       "topic" : "the extraordinary intelligence of crows.",
       "outlet": "Harvard Magazine",
       "date" : "2019-08",
       "link" : "https://www.harvardmagazine.com/2019/08/crows-know-how-to-have-fun",
       "tags" : "ffaar, science"
   },
 * The above would render like this, with the link on the bit in the "topic" entry:
 * > On the extraordinary intelligence of crows. Harvard Magazine, August 2019
 * 
 * The topic-type clips can also have a dek, like this: 
 *  {
        "dek" : "in which a German-American scholar discovers that his grandfather was a Nazi.",
        "topic" : "Martin Puchner’s <i>The Language of Thieves</i>,",
        "outlet" : "Harvard Magazine",
        "date" : "2020-11",
        "link" : "https://harvardmagazine.com/2020/11/montage-family-history",
        "tags" : "culture, ideas, books"
    },
 * Which renders like the below (the link being only on "Martin.... Thieves"):
 * > On Martin Puchner’s The Language of Thieves, in which a German-American scholar
 * > discovers that his grandfather was a Nazi. Harvard Magazine, November 2020
 *
 * FORMATTING
 * As the book title above suggests, you can use raw HTML tags like <i>italics</i> or <b>bold</b> inside
 * the "hed", "dek", "topic", and "outlet" entries, and they'll render as formatted text on the page.
 * The exceptions:
 *      * Don't put <a> link tags in a "hed" or "topic" -- the story's link should always be set with the
 *        "link" entry. Any <a> tags there will be stripped out (with a warning in the browser console).
 *      * The "outlet" is automatically italicized. To turn that off for a clip (e.g. for Substack), add
 *        "outlet-ital" : false to that clip.
 *
 * Note that both formats have an outlet, date, link, and set of tags; the difference is just hed/dek vs topic
 *
 * IMAGES
 * A clip tagged "featured" shows up in the image grid at the top of the writing page. Give those clips an
 * "image" entry pointing at a picture in the assets folder, like this:
 *      "image" : "assets/featured/2026-04-Ridglan.jpg",
 * The path is relative to the top level of the site (the folder writing.html lives in). Featured clips
 * without an "image" still show their hed and dek, just with no picture above them. The "image" entry is
 * ignored for clips that aren't featured.
 *

 */

// current tags – this is set up as a list of dictionaries to allow abbreviation of the longer tags
const tags = [
    {"ffaar": "factory farming, animals, & animal rights"},
    {"science": "science"},
    {"urbanism": "housing & urbanism"},
    {"meat-less": "meat, food, & health"},
    {"environment": "environment"},
    {"culture": "culture"},
    {"ideas": "ideas"},
    {"books": "books"},
    {"policy": "politics & policy"},
    {"featured": "featured"},
    {"tech": "technology"}
]

var clips = [
    {
        "hed" : "Everyone needsa personal AI policy. Just ask Hank Green.",
        "dek" : "How can we reap AI’s benefits without melting our brains in the process?",
        "outlet" : "Vox",
        "date" : "2026-08-11",
        "link" : "https://www.vox.com/future-perfect/498851/hank-green-ai-controversy-research",
        "tags" : "tech, ideas"
    },
    {
        "hed" : "A new housing politics is taking shape on the left",
        "dek" : "Can democratic socialist Nithya Raman make Los Angeles build?",
        "outlet" : "Vox",
        "date" : "2026-08-10",
        "link" : "https://www.vox.com/future-perfect/498445/nithya-raman-la-mayor-housing-crisis-yimby",
        "tags" : "urbanism, policy"
    },
    {
        "hed" : "The truth about rent control",
        "dek" : "We keep coming back to this one strategy. Renters deserve better.",
        "outlet" : "Vox",
        "date" : "2026-08-05",
        "link" : "https://www.vox.com/the-highlight/497283/rent-control-mamdani-freeze",
        "tags" : "urbanism, policy"
    },
    {
        "hed" : "Why the Trump administration loves the stupidest renewable energy",
        "dek" : "America’s biofuel policy is helping destroy the world’s rainforests",
        "outlet" : "Vox",
        "date" : "2026-07-14",
        "link" : "https://www.vox.com/future-perfect/495217/biofuels-renewable-fuel-standard-trump-deforestation",
        "tags" : "environment, policy"
    },
    {
        "hed" : "Leather is not an innocent byproduct of the meat industry",
        "dek" : "Your leather purse might put out as much carbon as 35 hamburgers. But the alternative doesn’t have to be junky pleather!",
        "outlet" : "Vox",
        "date" : "2026-07-08",
        "link" : "https://www.vox.com/future-perfect/494511/leather-carbon-emissions-vegan-meta-analysis",
        "tags" : "science, environment, ffaar"
    },
    {
        "hed" : "The evidence against “ultra-processed” foods is weaker than you think",
        "dek" : "New analysis suggests other factors may explain the harms blamed on “ultra-processing.”",
        "outlet" : "Vox",
        "date" : "2026-07-04",
        "link" : "https://www.vox.com/future-perfect/494045/ultra-processed-foods-science-rcts",
        "tags" : "science, meat-less"
    },
    {
        "hed" : "What housing in America could look like in 50 years",
        "dek" : "Abundant, affordable, and…fun? Here's how to get there.",
        "outlet" : "Vox",
        "date" : "2026-07-01",
        "link" : "https://www.vox.com/the-highlight/493413/america-at-250-housing-crisis-cities-future",
        "tags" : "urbanism, policy, ideas"
    },
    {
        "hed" : "A simple way to lower everyone’s property taxes",
        "dek" : "Compact neighborhoods cost cities half as much to maintain. So why don't we build more of them?",
        "outlet" : "Vox",
        "date" : "2026-06-03",
        "link" : "https://www.vox.com/future-perfect/490658/housing-crisis-sprawl-density-property-taxes",
        "tags" : "urbanism, environment, ideas"
    },
    {
        "hed" : "Americans don’t know how to fight AI. So they’re fighting data centers.",
        "dek" : "The data center revolt is a symptom of our political failure on AI.",
        "outlet" : "Vox",
        "date" : "2026-06-25",
        "link" : "https://www.vox.com/future-perfect/490350/data-center-moratoria-ai-backlash",
        "tags" : "tech, urbanism, environment, policy"
    },
        {
        "hed" : "The global epidemic of death by cars",
        "dek" : "We’ve made little progress against one of the world’s greatest killers.",
        "outlet" : "Vox",
        "date" : "2026-05-26",
        "link" : "https://www.vox.com/future-perfect/489358/car-deaths-global-south-road-safety",
        "tags" : "urbanism, environment, policy"
    },
    { 
        "hed" : "How 2,000 beagles set the animal rights movement on fire",
        "dek" : "A viral campaign to rescue beagles used for experiments is part of a much bigger fight.",
        "outlet" : "Vox",
        "date" : "2026-04-29",
        "link" : "https://www.vox.com/future-perfect/486973/beagle-rescue-ridglan-animal-testing-research-rights",
        "image" : "assets/featured/2026-04-Ridglan.jpg",
        "tags" : "ffaar, science, featured"
    },
    { 
        "hed" : "The surprising reason why pedestrian deaths are down in the US",
        "dek" : "And why walking is still so dangerous here.",
        "outlet" : "Vox",
        "date" : "2026-04-27",
        "link" : "https://www.vox.com/future-perfect/486864/pedestrian-deaths-decrease-walking-car-safety",
        "tags" : "urbanism, policy, science"    
    },
    { 
        "hed" : "How Austin’s stunning drop in rents explains housing in America",
        "dek" : "We finally have some good news about housing affordability.",
        "outlet" : "Vox",
        "date" : "2026-04-10",
        "link" : "https://www.vox.com/future-perfect/485295/austin-national-rents-declining-yimby",
        "tags" : "urbanism, policy, science"    
    },
    {
        "hed" : "Hey Google, stop trying to write my emails!",
        "dek" : "How AI-generated email creates a synthetic version of you.",
        "outlet" : "Vox",
        "date" : "2026-03-27",
        "link" : "https://www.vox.com/future-perfect/483948/gmail-smart-replies-ai-consciousness",
        "tags" : "tech, ideas, culture"
    },
    {
        "hed" : "The medium is the message, & many other thoughts on the mass rescue of beagles from Ridglan Farms",
        "dek" : "I was there. You know I couldn’t not write about this!",
        "outlet" : "Substack",
        "outlet-ital" : false,
        "date" : "2026-03-22",
        "link" : "https://mbolotnikova.substack.com/p/ridglan-mass-rescue-beagles-wisconsin-research",
        "tags" : "ffaar, science, tech"
    },
    {
        "hed" : "Americans ditched veal. What replaced it may be just as bad.",
        "dek" : "The giant loophole that lets Big Dairy keep baby cows in solitary confinement.",
        "outlet" : "Vox",
        "date" : "2026-03-26",
        "link" : "https://www.vox.com/the-highlight/480529/calf-ranches-grimmius-investigation-dairy-confinement",
        "tags" : "ffaar, meat-less, policy"
    },
    {
        "hed" : "The biggest drawback of driverless cars",
        "dek" : "Driverless cars could save thousands of lives. They might also break our cities.",
        "outlet" : "Vox",
        "date" : "2026-03-04",
        "link" : "https://www.vox.com/future-perfect/481371/driverless-cars-avs-safety-miles-driven",
        "tags" : "tech, science, urbanism, policy"
    },  
    {
        "hed" : "One good thing the Trump administration might actually do for science",
        "dek" : "A primate research center could become a sanctuary as the NIH pushes to move biomedical research beyond animal testing.",
        "outlet" : "Vox",
        "date" : "2026-02-13",
        "link" : "https://www.vox.com/future-perfect/479043/nih-ohsu-primate-research-center-sanctuary",
        "tags" : "ffaar, science, policy"
    },
    {
        "hed" : "How to raise a low-income kid’s future earnings by 50 percent",
        "dek" : "The surprising impact of better-designed public housing.",
        "outlet" : "Vox",
        "date" : "2026-02-06",
        "link" : "https://www.vox.com/future-perfect/478064/public-housing-projects-hope-vi-cities-chetty",
        "tags" : "science, urbanism, ideas"
    },
    {
        "hed" : "The hidden double standards driving our housing crisis",
        "dek" : "Apartments are safer and more affordable than single-family homes. Why do we treat them like a hazard?",
        "outlet" : "Vox",
        "date" : "2026-02-04",
        "link" : "https://www.vox.com/future-perfect/476647/housing-crisis-affordability-building-codes-yimby",
        "tags" : "urbanism, policy"
    },
    {
        "hed" : "Can America build beautiful places again?",
        "dek" : "Ugliness has more to do with the housing crisis than you think.",
        "outlet" : "Vox",
        "date" : "2026-01-20",
        "link" : "https://www.vox.com/future-perfect/475362/yimby-movement-housing-abundance-beauty-aesthetics",
        "tags" : "urbanism, culture, policy"
    },
    {
        "hed" : "The new food pyramid is lying to you",
        "dek" : "It’s also a contradictory mess.",
        "outlet" : "Vox",
        "date" : "2026-01-09",
        "link" : "https://www.vox.com/future-perfect/474554/food-pyramid-dietary-guidelines-maha-protein",
        "tags" : "science, meat-less, policy"
    },
    {
        "hed" : "We need to grow the economy. We need to stop torching the planet. Here’s how we do both.",
        "dek" : "Let’s fix the two massive efficiency sinks in American life.",
        "outlet" : "Vox",
        "date" : "2025-12",
        "link" : "https://www.vox.com/future-perfect/472664/decoupling-abundance-growth-meat-cars",
        "tags" : "ffaar, urbanism, environment, ideas"
    },
    {
        "hed" : "The surprisingly profound debate over whether fish feel pain",
        "dek" : "We can never prove that other animals are conscious. What do we do with that?",
        "outlet" : "Vox",
        "date" : "2025-11",
        "link" : "https://www.vox.com/future-perfect/469054/fish-pain-debate-sentience-consciousness",
        "tags" : "ffaar, ideas"
    },
    {
        "hed" : "We love dogs as family. We also experiment on them. When will it come to an end?",
        "dek" : "The secretive dog experimentation industry is starting to crumble.",
        "outlet" : "Vox",
        "date" : "2025-11",
        "link" : "https://www.vox.com/future-perfect/466909/dog-experiments-beagles-ridglan-envigo-closing",
        "tags" : "ffaar, science"
    },
    {
        "hed" : "How soybeans took over America — and the world",
        "dek" : "This technology could feed a world of 10 billion. We’re squandering it, and the trade war with China could make it worse.",
        "outlet" : "Vox",
        "date" : "2025-10",
        "link" : "https://www.vox.com/future-perfect/464898/trump-tariffs-china-trade-war-soybeans-exports",
        "tags" : "ffaar, meat-less, environment, policy"
    },
    {
        "hed" : "Jane Goodall’s most radical message was not about saving the planet",
        "dek" : "The conservationist used her stature to advocate for one of the most important, yet unpopular, causes in the world.",
        "outlet" : "Vox",
        "date" : "2025-10",
        "link" : "https://www.vox.com/future-perfect/463524/jane-goodall-animal-rights-experimentation-veganism-factory-farming",
        "tags" : "ffaar, meat-less, environment, ideas"
    },
    {
        "hed" : "The brutal trade-off that will decide the future of food",
        "dek" : "A growing number of thinkers say factory farming can help save the planet. Are they right?",
        "outlet" : "Vox",
        "date" : "2025-08",
        "link" : "https://www.vox.com/future-perfect/422708/future-of-food-abundance-factory-farming-grunwald",
        "tags" : "ffaar, meat-less, environment, ideas, books"
    },
    {
        "hed" : "America’s fastest-growing suburbs are about to get very expensive",
        "dek" : "Sprawl made suburbia affordable. Now it’s breaking it. Here’s what a new vision of the suburbs could look like.",
        "outlet" : "Vox",
        "date" : "2025-07",
        "link" : "https://www.vox.com/future-perfect/417892/suburbs-sunbelt-housing-affordability-yimby",
        "tags" : "urbanism, policy"
    },
    {
        "hed" : "The one thing the Trump administration got very right",
        "dek" : "Too bad it’s now sabotaging it.",
        "outlet" : "Vox",
        "date" : "2025-06",
        "link" : "https://www.vox.com/future-perfect/417127/trump-nih-harvard-defunding-monkey-research-livingstone",
        "tags" : "ffaar, science, policy"
    },
    {
        "hed" : "You’re being lied to about protein",
        "dek" : "Yes, protein builds muscle. No, you don’t need as much as lifting influencers say.",
        "outlet" : "Vox",
        "date" : "2025-05",
        "link" : "https://www.vox.com/future-perfect/410565/protein-muscle-gain-weightlifting-plant-based-vegan",
        "tags" : "science, meat-less, culture"
    },
    {
        "hed" : "The life of a dairy cow",
        "dek" : "The surprising truth about milk is hiding in plain sight (comic illustrated by the brilliant Cat Willet)",
        "outlet" : "Vox",
        "date" : "2025-04",
        "link" : "https://www.vox.com/future-perfect/403444/dairy-industry-cow-life-milk-america",
        "image" : "assets/featured/2025-04-Dairy-Cow.jpg",
        "tags" : "ffaar, featured"
    },
    {
        "hed" : "These fluffy white wolves explain everything wrong with bringing back extinct animals",
        "dek" : "Don’t buy the hype about “de-extinction.”",
        "outlet" : "Vox",
        "date" : "2025-04",
        "link" : "https://www.vox.com/future-perfect/407781/dire-wolves-deextinction-colossal-biosciences",
        "tags" : "tech, ffaar, science, environment"
    },
    {
        "hed" : "Americans are drinking more cow’s milk. Here’s why that’s a problem.",
        "dek" : "For years, dairy milk was plummeting. The vibe shift — and America’s protein obsession — is bringing it back.",
        "outlet" : "Vox",
        "date" : "2025-03",
        "link" : "https://www.vox.com/future-perfect/402717/cow-milk-increase-america-dairy-plant-milks",
        "tags" : "meat-less, environment, culture, policy"
    },
    {
        "hed" : "You’re being lied to about “ultra-processed” foods",
        "dek" : "Coverage of the latest nutrition buzzword is overly broad, arbitrary, and wildly misleading. The problem goes deeper.",
        "outlet" : "Vox",
        "date" : "2024-12",
        "link" : "https://www.vox.com/future-perfect/391795/ultra-processed-foods-science-vegan-meat-rfk-maha",
        "image" : "assets/featured/2024-12-UPFs.jpg",
        "tags" : "science, meat-less, culture, policy, featured"
    },
    {
        "hed" : "8 million turkeys will be thrown in the trash this Thanksgiving",
        "dek" : "We don’t have to accept all that death and waste for a dry, flavorless bird no one likes.",
        "outlet" : "Vox",
        "date" : "2024-11",
        "link" : "https://www.vox.com/future-perfect/388106/thanksgiving-turkey-food-waste-sides-dry-bland",
        "tags" : "ffaar, meat-less, environment, culture"
    },
    {
        "hed" : "Starbucks won’t charge extra for plant-based milk. Other companies should follow.",
        "dek" : "It’s a big deal for the climate — and for the coffee industry at large.",
        "outlet" : "Vox",
        "date" : "2024-11",
        "link" : "https://www.vox.com/future-perfect/381551/starbucks-dropping-plant-milk-upcharge-vegan-tax",
        "tags" : "meat-less, environment"
    },
    {
        "hed" : "These California and Colorado ballot measures are terrifying the meat industry",
        "dek" : "In Sonoma County and Denver, activists are putting animal welfare on the ballot.",
        "outlet" : "Vox",
        "date" : "2024-10",
        "link" : "https://www.vox.com/future-perfect/377096/sonoma-county-denver-factory-farming-slaughterhouse-ban-ballot-measures",
        "tags" : "ffaar, policy"
    },
    {
        "hed" : "How Factory Farming Ends",
        "dek" : "I brought together 10 writers & thinkers for this collection of stories on the past and future of the fight against one of the great moral calamities of our time.",
        "outlet" : "Vox",
        "date" : "2024-08",
        "link" : "https://www.vox.com/future-perfect/364288/how-factory-farming-ends-animal-rights-vegans-climate-ethics",
        "tags" : "ffaar, ideas"
    },
    {
        "hed" : "Humanity is failing one of its greatest moral tests",
        "dek" : "The long, maddening, glorious, vital fight against factory farming.",
        "outlet" : "Vox",
        "date" : "2024-08",
        "link" : "https://www.vox.com/future-perfect/363550/factory-farming-human-progress-sustainable-food-movement",
        "tags" : "ffaar, ideas"
    },
    {
        "hed" : "Republicans want to put pigs back in tiny cages. Again.",
        "dek" : "House Republicans are working to make America’s factory farms even crueler.",
        "outlet" : "Vox",
        "date" : "2024-06",
        "link" : "https://www.vox.com/future-perfect/353393/farm-bill-republicans-prop-12-gestation-crates-pork",
        "tags" : "ffaar, policy"
    },
    {
        "hed" : "I gave up meat and gained so much more",
        "dek" : "The delightful abundance of going vegan (comic illustrated by the wonderful Christine Mi).",
        "outlet" : "Vox",
        "date" : "2024-04",
        "link" : "https://www.vox.com/climate/24131229/vegan-vegetarian-meatless-climate-solutions-recipes-connection",
        "image" : "assets/featured/2024-04-Vegan.jpg",
        "tags" : "meat-less, culture, ideas, featured"
    },
    {
        "hed" : "The dairy industry really, really doesn’t want you to say “bird flu in cows”",
        "dek" : "How industrial meat and dairy trap us in an infectious disease cycle.",
        "outlet" : "Vox",
        "date" : "2024-04",
        "link" : "https://www.vox.com/future-perfect/24128700/bird-fludairy-meat-industry-h5n1-cows-milk-eggs-safety",
        "tags" : "ffaar, science"
    },
    {
        "hed" : "Mega drive-throughs explain everything wrong with American cities",
        "dek" : "They’re great for the fast food industry — but not so great for us.",
        "outlet" : "Vox",
        "date" : "2024-04",
        "link" : "https://www.vox.com/the-highlight/24089853/mega-drive-throughs-cities-chick-fil-a-chipotle",
        "tags" : "urbanism, culture"
    },
    {
        "hed" : "9 charts that show US factory farming is even bigger than you realize",
        "dek" : "Factory farms are now so big that we need a new word for them (with Kenny Torrella).",
        "outlet" : "Vox",
        "date" : "2024-02",
        "link" : "https://www.vox.com/future-perfect/24079424/factory-farming-facts-meat-usda-agriculture-census",
        "tags" : "ffaar, environment, policy"
    },
    {
        "hed" : "The greenwashing of wool, explained",
        "dek" : "Big Wool wants you to believe it’s nice to animals and the environment. It’s not.",
        "outlet" : "Vox",
        "date" : "2023-12",
        "link" : "https://www.vox.com/future-perfect/24008053/wool-marketing-environment-sustainable-claims-sheep-animal-cruelty-fast-fashion",
        "tags" : "ffaar, environment, culture"
    },
    {
        "hed" : "Bird flu is surging again on poultry farms. The US is normalizing the cruelest mass killing method to stop it.",
        "dek" : "We failed to prepare, and now animals are paying the price.",
        "outlet" : "Vox",
        "date" : "2023-12",
        "link" : "https://www.vox.com/future-perfect/23963820/bird-flu-surge-us-ventilation-shutdown-veterinarians",
        "tags" : "ffaar, science"
    },
    {
        "hed" : "You’re more likely to go to prison for exposing animal cruelty than for committing it",
        "dek" : "California could send a man to prison for 3.5 years for rescuing factory-farmed animals. Where does the movement go from here?",
        "outlet" : "Vox",
        "date" : "2023-11",
        "link" : "https://www.vox.com/future-perfect/23952627/wayne-hsiung-conviction-direct-action-everywhere-dxe-rescue-sonoma-county-chickens",
        "tags" : "ffaar"
    },
    {
        "hed" : "How cars ruin wild animals’ lives",
        "dek" : "If you love nature, consider not driving in it.",
        "outlet" : "Vox",
        "date" : "2023-09",
        "link" : "https://www.vox.com/future-perfect/23868483/cars-roads-roadkill-crossing-goldfarb-national-parks",
        "tags" : "ffaar, urbanism, environment, culture, books"
    },
    {
        "hed" : "What if AI treats humans the way we treat animals?",
        "dek" : "The dehumanizing philosophy of AI is built on a hatred of our animal nature.",
        "outlet" : "Vox",
        "date" : "2023-08",
        "link" : "https://www.vox.com/the-highlight/23777171/ai-animals-rights-cruelty-transhumanism-bostrom",
        "image" : "assets/featured/2023-09-AI.jpg",
        "tags" : "tech, ffaar, science, ideas, books, featured"
    },
    {
        "hed" : "America has the world’s safest air travel but sucks so bad at car safety",
        "dek" : "Three things the US can learn about road safety from our ultra-safe air travel system.",
        "outlet" : "Vox",
        "date" : "2023-08",
        "link" : "https://www.vox.com/future-perfect/2023/8/25/23844717/america-safe-air-travel-car-safety-accidents",
        "tags" : "urbanism, culture, ideas, policy"
    },
    {
        "hed" : "Undercover audio of a Tyson employee reveals “free-range” chicken is meaningless",
        "dek" : "Why you shouldn’t believe what’s on your chicken label (with Kenny Torella).",
        "outlet" : "Vox",
        "date" : "2023-08",
        "link" : "https://www.vox.com/future-perfect/23724740/tyson-chicken-free-range-humanewashing-investigation-animal-cruelty",
        "tags" : "ffaar"
    },
    {
        "hed" : "What’s worse than a cruel animal experiment? A cruel and fake animal experiment.",
        "dek" : "Raising the consequences for animal testing experiments gone wrong.",
        "outlet" : "Vox",
        "date" : "2023-07",
        "link" : "https://www.vox.com/future-perfect/2023/7/14/23794186/animal-testing-experiments-vivisection-academic-fraud-dishonesty-research",
        "tags" : "ffaar, science, ideas, policy"
    },
    {
        "hed" : "A fire killed 18,000 cows in Texas. It’s a horrifyingly normal disaster.",
        "dek" : "Factory farming’s disaster problem, explained (with Kenny Torella & Julieta Cardenas).",
        "outlet" : "Vox",
        "date" : "2023-04",
        "link" : "https://www.vox.com/future-perfect/23683141/texas-farm-fire-explosion-dimmitt-cows-factory-dairy",
        "tags" : "ffaar, ideas, policy"
    },
    {
        "hed" : "The fight against factory farming is winning criminal trials",
        "dek" : "Why it’s such a big deal that juries are siding with activists who rescue animals from factory farms.",
        "outlet" : "Vox",
        "date" : "2023-03",
        "link" : "https://www.vox.com/future-perfect/23647682/factory-farming-dxe-criminal-trial-rescue",
        "tags" : "ffaar"
    },
    {
        "hed" : "Eggs are expensive for all the wrong reasons",
        "dek" : "Eggs should not be cheap.",
        "outlet" : "Vox",
        "date" : "2023-02",
        "link" : "https://www.vox.com/future-perfect/23588340/egg-prices-expensive-bird-flu-shortage-price-gouging",
        "tags" : "ffaar, meat-less, policy"
    },
    {
        "hed" : "The bitter civil war dividing American veterinarians",
        "dek" : "To fight the cruel meat industry, veterinarians have to fight their own profession.",
        "outlet" : "Vox",
        "date" : "2023-01",
        "link" : "https://www.vox.com/future-perfect/23516639/veterinarians-avma-factory-farming-ventilation-shutdown",
        "image" : "assets/featured/2023-01-Vets.jpg",
        "tags" : "ffaar, science, featured"
    },
    {
        "hed" : "Cory Booker has a plan to stop taxpayer bailouts of Big Meat",
        "dek" : "A Vox exclusive by me and Kenny Torrella on a sweeping new meat industry reform package from Sen. Cory Booker.",
        "outlet" : "Vox",
        "date" : "2022-11",
        "link" : "https://www.vox.com/future-perfect/2022/11/22/23471771/cory-booker-meat-farming-industrial-agriculture-accountability-act",
        "tags" : "ffaar, policy"
    },
    {
        "hed" : "U.S. farms lobby to use “cruelest” kill method as bird flu rages",
        "dek" : "The meat industry wants to make it easier to use the worst mass cull methods.",
        "outlet" : "The Guardian",
        "date" : "2022-11",
        "link" : "https://www.theguardian.com/environment/2022/nov/09/us-farms-lobby-to-use-cruellest-killing-method-as-bird-flu-rages",
        "tags" : "ffaar, policy"
    },
    {
        "hed" : "Activists Acquitted in Trial for Taking Piglets from Smithfield Foods",
        "dek" : "Covering this historic trial of two activists who rescued piglets from a Smithfield Foods factory farm, and its incredible surprise outcome, was one of the most memorable experiences of my life.",
        "outlet" : "The Intercept",
        "date" : "2022-10",
        "link" : "https://theintercept.com/2022/10/08/smithfield-animal-rights-piglets-trial/",
        "tags" : "ffaar"
    },
    {
        "hed" : "U.S. Supreme Court to hear case on California's ban on extreme confinement crates",
        "dek" : "How the Supreme Court could put climate, public health, and animal welfare regulations across the country on the chopping block.",
        "outlet" : "The Guardian",
        "date" : "2022-10",
        "link" : "https://www.theguardian.com/environment/2022/oct/03/supreme-court-proposition-12-pig-gestation-crates-california-animal-welfare-law",
        "tags" : "ffaar, policy"
    },
    {
        "hed" : "How U.S. dietary guidelines ignore the climate crisis",
        "dek" : "On the push to include sustainability in the U.S. dietary guidelines — which are more influential than you might think.",
        "outlet" : "The Guardian",
        "date" : "2022-08",
        "link" : "https://www.theguardian.com/environment/2022/aug/26/usda-diet-guide-myplate-climate-crisis",
        "tags" : "science, meat-less, environment, policy"
    },
    {
        "hed" : "“Forget They Are an Animal”",
        "dek" : "What an obscure 1970s-era pork industry journal can tell us about animal agriculture.",
        "outlet" : "Current Affairs",
        "date" : "2022-08",
        "link" : "https://www.currentaffairs.org/2022/08/forget-they-are-an-animal",
        "tags" : "ffaar, ideas"
    },
    {
        "hed" : "What this Mother Jones story got wrong on primate testing",
        "dek" : "A little commentary on why media gets primate experimentation so wrong.",
        "outlet" : "Sentient Media",
        "date" : "2022-08",
        "link" : "https://sentientmedia.org/mother-jones-primate-testing-story/",
        "tags" : "ffaar, science"
    },
    {
        "hed" : "Millions of birds culled in “the most inhumane way available”",
        "dek" : "How cooking animals to death became meat industry standard.",
        "outlet" : "The Guardian",
        "date" : "2022-06",
        "link" : "https://www.theguardian.com/environment/2022/jun/06/us-bird-flu-outbreak-millions-of-birds-culled-in-most-inhumane-way-available",
        "tags" : "ffaar"
    },
    {
        "hed" : "Will New York City’s foie gras ban make a difference?",
        "dek" : "NYC is set to ban foie gras, a food that's been called “the Abu Ghraib of poultry dishes.” Is it really any worse than factory farmed meat?",
        "outlet" : "Grid",
        "date" : "2022-06",
        "link" : "assets/files/grid-foie-gras.pdf",
        "tags" : "ffaar, policy"
    },
    {
        "hed" : "In the age of social media blasts, what’s the point of letters to the editor?",
        "dek" : "On what happens when we allow a beloved old form to be swallowed up by the social media firehose.",
        "outlet" : "Poynter",
        "date" : "2022-05",
        "link" : "https://www.poynter.org/ethics-trust/2022/in-the-age-of-social-media-blasts-whats-the-point-of-letters-to-the-editor/",
        "tags" : "tech, ideas"
    },
    {
        "hed" : "Amid Bird Flu Outbreak, Meat Producers Seek “Ventilation Shutdown” for Mass Chicken Killing",
        "dek" : "How gruesome, industry-funded experiments at a public university laid the foundation for a method now being used to mass exterminate farmed birds by heating them to death.",
        "outlet" : "The Intercept",
        "date" : "2022-04",
        "link" : "https://theintercept.com/2022/04/14/killing-chickens-bird-flu-vsd/",
        "tags" : "ffaar, science"
    },
    {
        "hed" : "Utah Bill Seeks to Restrict Regulation of Animal Industries",
        "dek" : "In which Utah legislators tried to restrict cities from regulating “animal enterprises” like factory farms & puppy mills, and lied to their constituents about it.",
        "outlet" : "The Intercept",
        "date" : "2022-03",
        "link" : "https://theintercept.com/2022/03/02/utah-animal-industry-regulation-cafo-puppy-mills/",
        "tags" : "ffaar, policy"
    },
    {
        "hed" : "“They're cooking them alive”: calls to ban cruel killing methods on US farms",
        "dek" : "On some of the methods used to mass kill farm animals (including, yes, cooking them to death).",
        "outlet" : "The Guardian",
        "date" : "2022-03",
        "link" : "https://www.theguardian.com/environment/2022/mar/08/theyre-cooking-them-alive-calls-to-ban-cruel-killing-methods-on-us-farms",
        "tags" : "ffaar, policy"
    },
    {
        "hed" : "Why the anti-Factory Farming Movement Needs Direct Action",
        "dek" : "Direct action is often maligned by people who don’t know anything about it, but it’s actually one of the credible sources there is on factory farming.",
        "outlet" : "Current Affairs",
        "date" : "2022-03",
        "link" : "https://www.currentaffairs.org/news/2022/03/why-the-anti-factory-farming-movement-needs-direct-action",
        "tags" : "ffaar, ideas"
    },
    {
        "hed" : "Five things to know about the SCOTUS challenge to California’s ban on extreme farm animal confinement",
        "dek" : "On the U.S. Supreme Court’s surprising decision to take up the pork industry’s lawsuit against the country’s strongest farm animal protection law.",
        "outlet" : "The Counter",
        "date" : "2022-03",
        "link" : "https://thecounter.org/california-proposition-12-animal-welfare-supreme-court/",
        "tags" : "ffaar, policy"
    },
    {
        "hed" : "An animal rights activist was in court on criminal charges. Why was the case suddenly dismissed?",
        "dek" : "The story of an activist who faced eight years in prison for one of the most important factory farm investigations in recent history.",
        "outlet" : "The Guardian",
        "date" : "2022-01",
        "link" : "https://www.theguardian.com/world/2022/jan/22/an-animal-rights-activist-was-in-court-on-criminal-charges-why-was-the-case-suddenly-dismissed",
        "tags" : "ffaar"
    },
    {
        "hed" : "For These Wisconsin Farms, Animals Are Off the Table",
        "dek" : "A story on the rural Wisconsinites providing refuge to animals saved from slaughter.",
        "outlet" : "In These Times",
        "date" : "2021-12",
        "link" : "https://inthesetimes.com/article/rural-wisconsin-farm-sanctuary-animal-rights",
        "tags" : "ffaar"
    },
    {
        "hed" : "The Case Against the Concept of Invasive Species",
        "dek" : "And why some scientists and environmental philosophers are rethinking it.",
        "outlet" : "Vox",
        "date" : "2021-11",
        "link" : "https://www.vox.com/down-to-earth/22796160/invasive-species-climate-change-range-shifting",
        "tags" : "ffaar, science, environment, ideas"
    },
    {
        "hed" : "America’s car crash epidemic",
        "dek" : "Cars are killing us, and it's gotten even worse during the pandemic.",
        "outlet" : "Vox",
        "date" : "2021-09",
        "link" : "https://www.vox.com/22675358/us-car-deaths-year-traffic-covid-pandemic",
        "tags" : "urbanism"
    },
    {
        "hed" : "The Spiritual Bankruptcy of Bottled Water",
        "dek" : "A comic reported by me and illustrated by Christine Mi on how bottled water redefined our relationship with a natural resource.",
        "outlet" : "Vox",
        "date" : "2021-07",
        "link" : "https://www.vox.com/the-goods/2021/7/12/22554546/bottled-water-michigan-waste-flint-plastic",
        "tags" : "environment, culture"
    },
    {
        "hed" : "A Graceful Place Where Bhangra and Bollywood Meet",
        "dek" : "On the magnificent dancer Manpreet Toor and how the internet is transforming Punjabi diaspora dance.",
        "outlet" : "New York Times",
        "date" : "2021-06",
        "link" : "https://www.nytimes.com/2021/06/25/arts/dance/manpreet-toor-bhangra.html",
        "tags" : "culture"
    },
    {
        "hed" : "The Year of the Wedding After-Party",
        "dek" : "On the art of planning a belated reception when you got married in the pandemic age.",
        "outlet" : "New York Times",
        "date" : "2021-03",
        "link" : "https://www.nytimes.com/2021/03/30/style/wedding-after-parties.html",
        "tags" : "culture"
    },
    {
        "hed" : "Curator of American Culture",
        "dek" : "A profile of the delightful Radhika Jones, Vanity Fair editor-in-chief.",
        "outlet" : "Harvard Magazine",
        "date" : "2021-03",
        "link" : "https://harvardmagazine.com/2021/03/alumni-radhika-jones",
        "tags" : "culture, ideas"
    },
    {
        "dek" : "in which a German-American scholar discovers that his grandfather was a Nazi.",
        "topic" : "Martin Puchner’s <i>The Language of Thieves</i>,",
        "outlet" : "Harvard Magazine",
        "date" : "2020-11",
        "link" : "https://harvardmagazine.com/2020/11/montage-family-history",
        "tags" : "culture, ideas, books"
    },
    {
        "hed" : "The Watchdog",
        "dek" : "A profile of Bharat Ramamurti, the guy in charge of overseeing $500 billion in CARES Act stimulus money and a former adviser to Elizabeth Warren.",
        "outlet" : "Harvard Magazine",
        "date" : "2020-09",
        "link" : "https://harvardmagazine.com/2020/09/alumni-bharat-ramamurti",
        "tags" : "policy"
    },
    {
        "hed" : "From Lewis & Clark to Michael Brown",
        "dek" : "A profile of Walter Johnson and his radical history of my home city, St. Louis.",
        "outlet" : "Harvard Magazine",
        "date" : "2020-05",
        "link" : "https://harvardmagazine.com/2020/05/feature-walter-johnson",
        "tags" : "ideas"
    },
    {
        "hed" : "As the World Burns, Americans Buy Bigger Cars",
        "dek" : "On the rise of SUVs.",
        "outlet" : "Vox",
        "date" : "2020-03",
        "link" : "https://www.vox.com/the-goods/2020/3/11/21152975/crossover-utility-vehicle-honda-cr-v-suv",
        "tags" : "urbanism, environment, culture"
    },
    {
        "hed" : "History from Below",
        "dek" : "A profile of Vince Brown, a historian who will change the way you think about war, slavery, and anti-Black militarism.",
        "outlet" : "Harvard Magazine",
        "date" : "2020-03",
        "link" : "https://www.harvardmagazine.com/2020/03/feature-history-from-below",
        "tags" : "ideas"
    },
    {
        "hed" : "What Vegans With PCOS Actually Need to Know",
        "dek" : "On the extremely common but little understood hormonal disorder PCOS, and how to be vegan when you have it.",
        "outlet" : "Tenderly",
        "date" : "2020-02",
        "link" : "https://medium.com/tenderlymag/what-vegans-with-pcos-actually-need-to-know-about-food-251388c66728",
        "tags" : "science, meat-less"
    },
    {
        "dek" : "and encountering factory farming in literature.",
        "topic" : "Jean-Baptiste Del Amo's <i>Animalia</i>",
        "outlet" : "Pittsburgh Post-Gazette",
        "date" : "2020-02",
        "link" : "https://www.post-gazette.com/ae/books/2020/02/09/Animalia-Jean-Baptiste-Del-Amo-factory-farms/stories/201911030003",
        "tags" : "ffaar, culture, ideas, books"
    },
    {
        "hed" : "Animal Liberation Needs Animal Voices",
        "dek" : "A review of a new book on the political agency of animals.",
        "outlet" : "Tenderly",
        "date" : "2019-12",
        "link" : "https://medium.com/tenderlymag/animal-liberation-needs-animal-voices-eef6973ba777",
        "tags" : "ffaar, ideas, books"
    },
    {
        "dek" : "and how factory farming has remade life on Earth.",
        "topic" : "Jonathan Safran Foer's <i>We Are the Weather</i>",
        "outlet" : "Pittsburgh Post-Gazette",
        "date" : "2019-11",
        "link" : "https://www.post-gazette.com/ae/books/2019/11/17/Jonathan-Safran-Foer-We-Are-the-Weather-Saving-Planet-Begins-at-Breakfast/stories/201911170009",
        "tags" : "ffaar, science, environment, culture, ideas, books"
    },
    {
        "topic" : "the extraordinary intelligence of crows.",
        "outlet" : "Harvard Magazine",
        "date" : "2019-08",
        "link" : "https://www.harvardmagazine.com/2019/08/crows-know-how-to-have-fun",
        "tags" : "ffaar, science"
    },
    {
        "hed" : "As Russian Jews, We Are Characters in Someone Else’s Story",
        "dek" : "An essay about secrecy, class, and the Soviet Jewish experience.",
        "outlet" : "The Forward",
        "date" : "2019-07",
        "link" : "https://forward.com/life/428342/as-russian-jews-we-are-characters-in-someone-elses-story/",
        "tags" : "culture, ideas"
    },
    {
        "hed" : "The Trilemma",
        "dek" : "A profile of economist Dani Rodrik and his field’s reckoning with free-market orthodoxy.",
        "outlet" : "Harvard Magazine",
        "date" : "2019-07",
        "link" : "https://harvardmagazine.com/2019/07/rodrik-trilemma-trade-globalization",
        "tags" : "science, ideas"
    },
    {
        "topic" : "the joy of baby turkey season in Cambridge.",
        "outlet" : "Harvard Magazine",
        "date" : "2019-06",
        "link" : "https://harvardmagazine.com/2019/06/baby-turkey-season-comes-to-harvard",
        "tags" : "science, culture"
    },
    {
        "topic" : "the Harvard Map Collection and the uses of maps.",
        "outlet" : "Harvard Magazine",
        "date" : "2018-08",
        "link" : "https://www.harvardmagazine.com/2018/08/map-collection-at-200",
        "tags" : "ideas"
    },
    {
        "dek" : "a new history of the women's suffrage movement.",
        "topic" : "Susan Ware’s <i>Why they Marched</i>,",
        "outlet" : "Harvard Magazine",
        "date" : "2019-05",
        "link" : "https://www.harvardmagazine.com/2019/05/suffrage-movement-activism",
        "tags" : "ideas, books"
    },
    {
        "dek" : "a new book about kibbutzim, and the kinds of arguments economists make.",
        "topic" : "the myth of the egalitarian kibbutz,",
        "outlet" : "The Forward",
        "date" : "2018-04",
        "link" : "https://forward.com/culture/books/398746/why-the-idea-of-an-egalitarian-kibbutz-was-always-a-myth/",
        "tags" : "ideas, books"
    },
    {
        "hed" : "Sex and Due Process on Campus",
        "dek" : "An essay on Title IX sexual assault guidelines, radical feminism, and due process.",
        "outlet" : "Current Affairs",
        "date" : "2018-01",
        "link" : "https://www.currentaffairs.org/news/2018/01/sex-and-due-process-on-campus",
        "tags" : "ideas"
    },
    {
        "dek" : "and what’s wrong with Jewish-American literature.",
        "topic" : "Dara Horn’s <i>Eternal Life</i>",
        "outlet" : "Harvard Magazine",
        "date" : "2018-01",
        "link" : "https://harvardmagazine.com/2018/01/dara-horn-eternal-life",
        "tags" : "ideas, books"
    },
    {
        "dek" : "and the kinds of arguments linguists make.",
        "topic" : "<i>The Story of Hebrew</i>,",
        "outlet" : "The Forward",
        "date" : "2017-08",
        "link" : "https://forward.com/culture/378315/how-hebrew-has-managed-to-survive/",
        "tags" : "ideas, books"
    },
    {
        "topic" : "the unfortunate Netflix series <i>Friends from College</i>.",
        "outlet" : "Harvard Magazine",
        "date" : "2017-07",
        "link" : "https://www.harvardmagazine.com/2017/07/friends-from-college-netflix",
        "tags" : "culture"
    },
    {
        "topic" : "the work of Bengali-British novelist Tahmima Anam.",
        "outlet" : "Harvard Magazine",
        "date" : "2017-07",
        "link" : "https://harvardmagazine.com/2017/07/a-postmodern-youth",
        "tags" : "ideas, books"
    },
    {
        "hed" : "A Language Out of Nothing",
        "dek" : "A profile of linguist Kate Davidson and some of the questions that preoccupy people in her field.",
        "outlet" : "Harvard Magazine",
        "date" : "2017-05",
        "link" : "https://www.harvardmagazine.com/2017/04/a-language-out-of-nothing",
        "tags" : "ideas"
    },
    {
        "hed" : "The Purpose of Harvard Law School",
        "dek" : "An essay on the clash between Harvard Law School’s public service ethos and its corporate law reality.",
        "outlet" : "Harvard Magazine",
        "date" : "2016-08",
        "link" : "https://www.harvardmagazine.com/2016/08/the-purpose-of-harvard-law-school",
        "tags" : "ideas"
    },
    {
        "hed" : "ProMedica has a medical, moral duty to keep city's only abortion clinic open",
        "dek" : "This is a throwback — an column in the Toledo Blade urging Ohio hospital system ProMedica to prevent Toledo's last abortion provider from shutting down. A few years later, the pro-choice advocates won!",
        "outlet" : "The Toledo Blade",
        "date" : "2015-08",
        "link" : "https://www.toledoblade.com/Marina-Bolotnikova/2015/08/02/ProMedica-has-medical-moral-duty-to-keep-city-s-only-abortion-clinic-open.html",
        "tags" : "policy"
    }
]

clips.sort((a, b) => (a.date > b.date ? -1 : 1));
