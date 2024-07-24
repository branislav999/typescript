var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
document.addEventListener('DOMContentLoaded', function () {
    //initiating classes with parameters that match the data
    var Game = /** @class */ (function () {
        function Game(id, name, genre, releaseDates, developers, publishers) {
            this.id = id;
            this.name = name;
            this.genre = genre;
            this.releaseDates = releaseDates;
            this.developers = developers;
            this.publishers = publishers;
        }
        return Game;
    }());
    var ReleaseDates = /** @class */ (function () {
        function ReleaseDates(Japan, NorthAmerica, Europe, Australia) {
            this.Japan = Japan;
            this.NorthAmerica = NorthAmerica;
            this.Europe = Europe;
            this.Australia = Australia;
        }
        return ReleaseDates;
    }());
    var buttonsContainer = document.querySelector('.button-container');
    var genres = ['Survival', 'Adventure', 'Puzzle', 'Arcade', 'Sports', 'Simulation', 'Card game'];
    //recursive function that creates buttons
    function createButtons(index) {
        if (index >= genres.length) {
            return;
        }
        var button = document.createElement('button');
        button.value = genres[index];
        button.textContent = genres[index];
        buttonsContainer.appendChild(button);
        createButtons(index + 1);
    }
    createButtons(0);
    var buttons = document.querySelectorAll('button');
    buttons.forEach(function (button) {
        button.style.cursor = 'pointer';
    });
    var buttonContainer = document.querySelector('.button-container');
    var container = document.querySelector('.container');
    //apply fixed position and styles to the user menu
    buttonContainer.style.position = 'fixed';
    buttonContainer.style.top = '0';
    buttonContainer.style.backgroundColor = '#ffffff';
    buttonContainer.style.padding = '10px 0';
    buttonContainer.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.1)';
    buttonContainer.style.zIndex = '1000';
    container.style.marginTop = '60px';
    //function that fetches data from API
    function getData() {
        return __awaiter(this, void 0, void 0, function () {
            var res, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, fetch('https://api.sampleapis.com/switch/games')];
                    case 1:
                        res = _a.sent();
                        if (!res.ok) return [3 /*break*/, 3];
                        return [4 /*yield*/, res.json()];
                    case 2:
                        data = _a.sent();
                        return [2 /*return*/, data];
                    case 3: throw new Error("Unable to retrieve data");
                }
            });
        });
    }
    //display data based on the button user clicked
    function displayData(genre) {
        return __awaiter(this, void 0, void 0, function () {
            var data_1, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, getData()];
                    case 1:
                        data_1 = _a.sent();
                        container.innerHTML = '';
                        // const genresSet = new Set<string>();
                        // Iterate over the data
                        Object.keys(data_1).forEach(function (key) {
                            // data[key].genre.forEach(game => genresSet.add(game));
                            var game = data_1[key];
                            if (data_1[key].genre.includes(genre)) {
                                // console.log(`Key: ${key}`);
                                console.log(data_1[key].name);
                                var div = document.createElement('div');
                                div.innerHTML = "\n                    <p>Game name: ".concat(game.name, "</p>\n                    <p>Genres: ").concat(game.genre.join(', '), "</p>\n                    <p>Developers: ").concat(game.developers.join(', '), "</p>\n                    <p>Publishers: ").concat(game.publishers.join(', '), "</p>\n                    <p>Release Dates:</p>\n                    <ul>\n                        <li>Japan: ").concat(game.releaseDates.Japan, "</li>\n                        <li>North America: ").concat(game.releaseDates.NorthAmerica, "</li>\n                        <li>Europe: ").concat(game.releaseDates.Europe, "</li>\n                        <li>Australia: ").concat(game.releaseDates.Australia, "</li>\n                    </ul>\n                    <hr>\n                ");
                                container.appendChild(div);
                            }
                        });
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _a.sent();
                        console.error(error_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    }
    //call the display function when the button is clicked
    function handleButtonClick(event) {
        var button = event.target;
        var buttonValue = button.value;
        displayData("".concat(buttonValue));
    }
    buttons.forEach(function (button) {
        button.addEventListener("click", handleButtonClick);
    });
});
