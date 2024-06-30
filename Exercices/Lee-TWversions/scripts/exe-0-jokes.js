let jokeArray= [
    "Pourquoi les plongeurs plongent-ils en arrière ? Parce que sinon ils tombent dans le bateau.",
    "Quel est le comble pour un électricien ? De ne pas être au courant.",
    "Pourquoi les poissons n'aiment-ils pas l'ordinateur ? À cause de la souris.",
    "Pourquoi les vaches regardent-elles toujours passer les trains ? Pour ne pas se faire écrémer.",
    "Quel est le comble pour un jardinier ? De raconter des salades.",
    "Pourquoi les éléphants ne prennent-ils jamais le bus ? Parce qu'ils ont peur de se faire composter.",
    "Pourquoi les abeilles ont-elles du miel ? Parce qu'elles ne peuvent pas faire de la confiture.",
    "Pourquoi les tomates n'aiment-elles pas les courses ? Parce qu'elles finissent en purée.",
    "Quel est le comble pour un plombier ? De couler une bielle.",
    "Quel est le comble pour un boulanger ? De se faire rouler dans la farine.",
    "Pourquoi les moutons n'aiment-ils pas l'ordinateur ? Parce qu'ils ont peur des virus.",
    "Pourquoi les fantômes aiment-ils aller à l’école ? Parce qu'ils aiment se faire passer pour des maîtres de l’école.",
    "Quel est le comble pour un astronaute ? De ne pas avoir la tête dans les étoiles.",
    "Pourquoi les coqs détestent-ils les réveils ? Parce qu'ils se sentent concurrencés.",
    "Quel est le comble pour un dentiste ? De mordre la main qui le nourrit.",
    "Pourquoi les poules détestent-elles les mathématiques ? Parce qu'elles ont peur des multiplications.",
    "Pourquoi les singes n'aiment-ils pas les bananes ? Parce qu'ils n'aiment pas les pelures.",
    "Quel est le comble pour un serrurier ? De perdre sa clé de voûte.",
    "Pourquoi les crocodiles ne prennent-ils jamais l'avion ? Parce qu'ils ont peur de se faire plaquer.",
    "Quel est le comble pour un charcutier ? De se faire prendre en sandwich.",
    "Pourquoi les canards n'utilisent-ils jamais l'ordinateur ? Parce qu'ils ont peur de se faire hacker.",
    "Pourquoi les pingouins ne vont-ils jamais à l'école ? Parce qu'ils préfèrent rester au frais.",
    "Quel est le comble pour un marin ? De ne pas être à la mer.",
    "Pourquoi les lapins n'aiment-ils pas les carottes ? Parce qu'ils préfèrent les radis.",
    "Quel est le comble pour un horloger ? De perdre la notion du temps.",
    "Pourquoi les grenouilles aiment-elles le tennis ? Parce qu'elles adorent les sets.",
    "Pourquoi les chevaux aiment-ils les blagues ? Parce qu'ils adorent se marrer.",
    "Quel est le comble pour un photographe ? De ne pas être au point.",
    "Pourquoi les chouettes ne sortent-elles que la nuit ? Parce qu'elles aiment les sorties nocturnes.",
    "Quel est le comble pour un facteur ? De ne pas avoir de lettres.",
    "Pourquoi les serpents n'aiment-ils pas les soirées ? Parce qu'ils préfèrent les siestes.",
    "Pourquoi les dauphins n'aiment-ils pas les vacances ? Parce qu'ils préfèrent nager toute l'année.",
    "Quel est le comble pour un menuisier ? De ne pas avoir de planche.",
    "Pourquoi les lions n'aiment-ils pas les cercles ? Parce qu'ils préfèrent les carrés.",
    "Pourquoi les ours polaires ne vont-ils jamais au sauna ? Parce qu'ils préfèrent rester frais.",
    "Quel est le comble pour un cordonnier ? De ne pas avoir de bottes.",
    "Pourquoi les zèbres n'aiment-ils pas les rayures ? Parce qu'ils préfèrent les pois.",
    "Pourquoi les pandas n'aiment-ils pas le sport ? Parce qu'ils préfèrent les siestes.",
    "Quel est le comble pour un coiffeur ? De ne pas être coupé dans son élan.",
    "Pourquoi les chauves-souris n'aiment-elles pas les vampires ? Parce qu'elles ont peur des piqûres.",
    "Pourquoi les fourmis n'aiment-elles pas les piqueniques ? Parce qu'elles n'aiment pas les miettes.",
    "Quel est le comble pour un cuisinier ? De ne pas avoir de four.",
    "Pourquoi les éléphants n'aiment-ils pas les souris ? Parce qu'ils ont peur de se faire piétiner.",
    "Pourquoi les perroquets aiment-ils les pirates ? Parce qu'ils adorent répéter.",
    "Quel est le comble pour un magicien ? De ne pas être dans le coup.",
    "Pourquoi les grenouilles détestent-elles les crapauds ? Parce qu'ils sont trop baveux.",
    "Pourquoi les cigognes n'aiment-elles pas les bébés ? Parce qu'elles préfèrent voler seules.",
    "Quel est le comble pour un pilote ? De ne pas être dans les airs."
];
const jokeWindow = document.getElementById("jokeWindow"),
      jokeButton = document.getElementById("jokeButton");

jokeButton.addEventListener('click', getRandomJoke)

function getRandomJoke () {
    let jokePos = Math.floor(Math.random()*jokeArray.length) + 1;
    jokeWindow.textContent = jokeArray[jokePos];
}
getRandomJoke();

