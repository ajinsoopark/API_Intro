document.addEventListener('DOMContentLoaded', () => {

const APIResponse = { "status": "success", "message": { "affenpinscher": [], "african": [],
 "airedale": [], "akita": [], "appenzeller": [], "basenji": [], "beagle": [], "bluetick": [],
  "borzoi": [], "bouvier": [], "boxer": [], "brabancon": [], "briard": [],
   "bulldog": ["boston", "french"], "bullterrier": ["staffordshire"], "cairn": [],
    "cattledog": ["australian"], "chihuahua": [], "chow": [], "clumber": [], "cockapoo": [],
     "collie": ["border"], "coonhound": [], "corgi": ["cardigan"], "cotondetulear": [],
      "dachshund": [], "dalmatian": [], "dane": ["great"], "deerhound": ["scottish"], "dhole": [],
       "dingo": [], "doberman": [], "elkhound": ["norwegian"], "entlebucher": [], "eskimo": [],
        "frise": ["bichon"], "germanshepherd": [], "greyhound": ["italian"], "groenendael": [],
         "hound": ["afghan", "basset", "blood", "english", "ibizan", "walker"], "husky": [],
          "keeshond": [], "kelpie": [], "komondor": [], "kuvasz": [], "labrador": [],
           "leonberg": [], "lhasa": [], "malamute": [], "malinois": [], "maltese": [],
            "mastiff": ["bull", "tibetan"], "mexicanhairless": [], "mix": [], "mountain": ["bernese",
             "swiss"], "newfoundland": [], "otterhound": [], "papillon": [], "pekinese": [],
              "pembroke": [], "pinscher": ["miniature"], "pointer": ["german", "germanlonghair"],
               "pomeranian": [], "poodle": ["miniature", "standard", "toy"], "pug": [], "puggle": [],
                "pyrenees": [], "redbone": [], "retriever": ["chesapeake", "curly", "flatcoated", "golden"],
                 "ridgeback": ["rhodesian"], "rottweiler": [], "saluki": [], "samoyed": [], "schipperke": [],
                  "schnauzer": ["giant", "miniature"], "setter": ["english", "gordon", "irish"], "sheepdog": ["english", "shetland"],
                   "shiba": [], "shihtzu": [], "spaniel": ["blenheim", "brittany", "cocker", "irish", "japanese", "sussex", "welsh"],
                    "springer": ["english"], "stbernard": [],
                     "terrier": ["american", "australian", "bedlington", "border", "dandie", "fox", "irish", "kerryblue", "lakeland", "norfolk", "norwich", "patterdale", "russell", "scottish", "sealyham", "silky", "tibetan", "toy", "westhighland", "wheaten", "yorkshire"],
                      "vizsla": [], "weimaraner": [], "whippet": [], "wolfhound": ["irish"] } }
let breedList = [];
const originalBreedObj = APIResponse['message'];
let button = document.getElementById('button');
// let randomNum = Math.floor(Math.random() * breedList.length);
let body = document.querySelector('body');
let count = 0;
let dogDiv;

    function capitalizeFirstChar (str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    };
    
    function displayRandomBreed () {
        let randomBreed = document.createElement('div');
        randomBreed.innerText = breedList[Math.floor(Math.random() * breedList.length)];
        body.appendChild(randomBreed);

    };

        function replaceBreed () {
            body.removeChild(dogDiv)
            return displayRandomBreed();
        }

    for (let key in originalBreedObj){
    if (originalBreedObj[key].length === 0) {
        let cappedKey = capitalizeFirstChar(key)
        breedList.push(cappedKey);
      } else if (originalBreedObj[key].length > 0) {
          let breedTypesArr = originalBreedObj[key];

        for (let i = 0; i < breedTypesArr.length; i++) {
            breedList.push(`${capitalizeFirstChar(breedTypesArr[i])} ${capitalizeFirstChar(key)}`)
        }
      }   
    }

    button.addEventListener('click', () => {

        if (count === 0) {
            displayRandomBreed();
            dogDiv = document.querySelector('div');
        } else {
            replaceBreed();
            dogDiv = document.querySelector('div');
        }
    count++
    })


})