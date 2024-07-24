document.addEventListener('DOMContentLoaded', () => {

    //initiating classes with parameters that match the data
class Game {
    id: number;
    name: string;
    genre: string[];
    releaseDates: ReleaseDates;
    developers: string[];
    publishers: string[];

    constructor(id: number, name: string, genre: string[], releaseDates: ReleaseDates, developers: string[], publishers: string[]) {
        this.id = id;
        this.name = name;
        this.genre = genre;
        this.releaseDates = releaseDates;
        this.developers = developers;
        this.publishers = publishers;
    }
}

class ReleaseDates {
    Japan: string;
    NorthAmerica: string;
    Europe: string;
    Australia: string;

    constructor(Japan: string, NorthAmerica: string, Europe: string, Australia: string) {
        this.Japan = Japan;
        this.NorthAmerica = NorthAmerica;
        this.Europe = Europe;
        this.Australia = Australia;
    }
}

type GamesData = Record<number, Game>;

    const buttonsContainer = document.querySelector('.button-container') as HTMLButtonElement;
    let genres: string[] = ['Survival','Adventure','Puzzle','Arcade','Sports','Simulation','Card game'];

    //recursive function that creates buttons
    function createButtons(index){

        if (index >= genres.length){
            return;
        }

        const button = document.createElement('button');
        button.value = genres[index];
        button.textContent = genres[index];

        buttonsContainer.appendChild(button);

        createButtons(index + 1);

    }

    createButtons(0);



    var buttons = document.querySelectorAll<HTMLButtonElement>('button');

    buttons.forEach(button => {
        button.style.cursor = 'pointer';
    })

    const buttonContainer = document.querySelector('.button-container') as HTMLElement;
    const container = document.querySelector('.container') as HTMLElement;

    //apply fixed position and styles to the user menu
    buttonContainer.style.position = 'fixed';
    buttonContainer.style.top = '0';
    buttonContainer.style.backgroundColor = '#ffffff';
    buttonContainer.style.padding = '10px 0';
    buttonContainer.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.1)';
    buttonContainer.style.zIndex = '1000';

    container.style.marginTop = '60px';

    //function that fetches data from API
    async function getData(): Promise<GamesData> {
        const res = await fetch('https://api.sampleapis.com/switch/games');

        if (res.ok) {
            const data: GamesData = await res.json();
            return data;
        } else {
            throw new Error("Unable to retrieve data");
        }
    }
    //display data based on the button user clicked
    async function displayData(genre) {
        try {
            const data = await getData();
            
            container.innerHTML = '';

            // const genresSet = new Set<string>();

            // Iterate over the data
            Object.keys(data).forEach(key => {
                // data[key].genre.forEach(game => genresSet.add(game));
                    const game = data[key];
                    if (data[key].genre.includes(genre)){
 
                    // console.log(`Key: ${key}`);
                    console.log(data[key].name);

                    const div = document.createElement('div');
                    div.innerHTML = `
                    <p>Game name: ${game.name}</p>
                    <p>Genres: ${game.genre.join(', ')}</p>
                    <p>Developers: ${game.developers.join(', ')}</p>
                    <p>Publishers: ${game.publishers.join(', ')}</p>
                    <p>Release Dates:</p>
                    <ul>
                        <li>Japan: ${game.releaseDates.Japan}</li>
                        <li>North America: ${game.releaseDates.NorthAmerica}</li>
                        <li>Europe: ${game.releaseDates.Europe}</li>
                        <li>Australia: ${game.releaseDates.Australia}</li>
                    </ul>
                    <hr>
                `;

                    container.appendChild(div);

                    }
            }); 

        } catch (error) {
            console.error(error);
        }
    }

    //call the display function when the button is clicked
    function handleButtonClick(event){
        var button = event.target as HTMLButtonElement;
        const buttonValue = button.value;
        displayData(`${buttonValue}`);
    }

    buttons.forEach(function(button){
        button.addEventListener("click", handleButtonClick);
    });

});




