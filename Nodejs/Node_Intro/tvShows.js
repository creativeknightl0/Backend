const shows = [
    {
        id: 1,
        name: 'Silo',
        mainCharactersAndPlayedBy: {
            'Juliette Nichols': 'Rebecca Ferguson',
            'Solo': 'Steve Zahn',
            'Charlotte Keen': 'Jessica Brown Findlay'
        },
        director: 'Graham Yost'
    },
    {
        id: 2,
        name: 'Cape Fear',
        mainCharactersAndPlayedBy: {
            'Anna Bowden': 'Amy Adams',
            'Zack Bowden': 'Joe Anders',
            'Natalie Bowden': 'Lily Collias'
        },
        director: 'Nick Antosca'
    },
    {
        id: 3,
        name: 'Dark Matter',
        mainCharactersAndPlayedBy: {
            'Jason Dressen': 'Joel Edgerton',
            'Daniela Dressen': 'Jennifer Connelly',
            'Charlie Dressen': 'Oakes Fegley'
        },
        director: 'Blake Couch'
    }
];

let delay = 0;

for(let i=0; i<shows.length; i++) {
    delay = delay + 3000;
    setTimeout(() => {
        console.log(shows[i]);
    }, delay);
}