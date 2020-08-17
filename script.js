//click search button
function search() {
    const searching = document.getElementById ("searching").value;
    //Api call
    fetch (`https://api.lyrics.ovh/suggest/${searching}`)
    .then (res => res.json())
    .then (data => {
        console.log(data);
        const picture= data.data[0].album.cover_big;
        document.getElementById("img9").innerHTML="<img src='"+ picture +"'>";
        //document.getElementById("img9").innerHTML="<img src='http://cdn-images.deezer.com/images/cover/d67ce03f28561c99caac76420adedb5c/500x500-000000-80-0-0.jpg'>";
        //get data from api
       for(let i = 0;i < 10; i++){
        document.getElementById (`titleshow${i}`) . innerText = data.data[i].title;
        document.getElementById (`albumby${i}`) . innerText = data.data[i].artist.name;
        document.getElementById (`albumName${i}`) .innerText = data.data[i].album.title;
        
        document.getElementById(`img${i}`).innerHTML="<img src='"+data.data[i].album.cover+"'>";
      }
       document.getElementById ("display") .style.display = "block";
       document.getElementById ("lyricsDisplay") .style.display = "none";
    })
}
//Get Lyrics Data
function totalLyrics(id1,id2,id3){
const lyrics0 = document.getElementById(id1);
        lyrics0.addEventListener("click",function(){
           const value = document.getElementById(id2).innerText;
            const name = document.getElementById(id3).innerText;
            fetch(`https://api.lyrics.ovh/v1/${value}/${name}`)
            .then(res=>res.json())
            .then(data=>{
               if(data.error == "No lyrics found"){
                document.getElementById("fullLyrics").innerText = "This Song's Lyrics Is Not Available";
                alert("This Song's Lyrics Is Not Available");
               }
               else{ 
               document.getElementById ("fullLyrics") .innerText = data.lyrics;
               }
               document.getElementById ("titleName") .innerText = name;
               document.getElementById ("lyricsDisplay") .style.display = "block";
            })  
        })
    }
    //Lyrics function value pass
    totalLyrics("lyrics0" , "albumby0" , "titleshow0");
    totalLyrics("lyrics1" , "albumby1" , "titleshow1");
    totalLyrics("lyrics2" , "albumby2" , "titleshow2");
    totalLyrics("lyrics3" , "albumby3" , "titleshow3");
    totalLyrics("lyrics4" , "albumby4" , "titleshow4");
    totalLyrics("lyrics5" , "albumby5" , "titleshow5");
    totalLyrics("lyrics6" , "albumby6" , "titleshow6");
    totalLyrics("lyrics7" , "albumby7" , "titleshow7");
    totalLyrics("lyrics8" , "albumby8" , "titleshow8");
    totalLyrics("lyrics9" , "albumby9" , "titleshow9");


