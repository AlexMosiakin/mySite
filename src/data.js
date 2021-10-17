import { v4 as uuidv4 } from "uuid";

function chillHope() {
    return[
        {
            name: "By Chance",
            artist: "SwuM",
            cover:"https://chillhop.com/wp-content/uploads/2021/03/74d62bc9370a68e440c1b98eaf650344f0a7faea-1024x1024.jpg",
            color: ["#924F2D","#CDA47B"],
            id: uuidv4(),
            active: true,
            audio: "https://mp3.chillhop.com/serve.php/?mp3=15223",
        },
        {
            name: "Roses n Flames",
            artist: "C Y G N",
            cover:"https://chillhop.com/wp-content/uploads/2021/02/d12927eedcc2f5afba2ab049a4a1ea46c2266ae3-1024x1024.jpg",
            color: ["#F2B5FA","#81B5E4"],
            id: uuidv4(),
            active: false,
            audio: "https://mp3.chillhop.com/serve.php/?mp3=14984",
        },
        {
            name: "Soul Samba",
            artist: "Screen Jazzmaster, Zmeyev",
            cover:"https://chillhop.com/wp-content/uploads/2021/03/630fbe3721ce9fa27e56b6b01c460f709fbce3b7-1024x1024.jpg",
            color: ["#FBB334","#F64830"],
            id: uuidv4(),
            active: false,
            audio: "https://mp3.chillhop.com/serve.php/?mp3=16061",
        },
    ];
}

export default chillHope;