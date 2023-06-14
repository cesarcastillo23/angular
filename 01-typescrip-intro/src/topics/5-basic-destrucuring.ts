interface AudioPlayer {
  audioVolumen: number;
  songDuration: number;
  song: string;
  details: Details;
}

interface Details {
  author: string;
  year: number;
}
const audioPlayer:AudioPlayer={
  audioVolumen: 90,
  songDuration: 36,
  song: "Mess",
  details:{
    author:'Ed Sheran',
    year:2015

  }
}
const song='New Song'
const { song:anotherSong,songDuration:duration,details  }=audioPlayer;
const {author}=details
console.log('Song:',anotherSong);
console.log('Duration:',duration);
console.log('Author:',author);
// destructuracion de arreglos
const dbz:string[]=['Goku','Vegeta','Trunks']
const [,,trunks='not found']=['Goku','Vegeta']

console.error('El personaje que buscas es: ',dbz[0] || 'No existe este personaje');




export {};
