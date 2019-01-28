let posts = [
    {id:6, title:"Clock with faries", imgsrc:"./pics/824.jpg",
        additional:"This picture was inspired by a rainy day, when the temperature drops, and I thought autumn is approaching by the time."
    },
    {id:5, title:"Kuro Mujo and Shiro Mujo on Piano Keys", imgsrc:"./pics/piano.jpg",
        additional:"Fanart of game Onmyoji"
    },
    {id:4, title:"Nobody Alive", imgsrc:"./pics/login.gif",
        additional:"PC indie game"
    },
    {id:4, title:"Leona", imgsrc:"./pics/leo.jpg",
        additional:"Costume making of character Leona in game League of Legend"
    },
    {id:4, title:"Orianna", imgsrc:"./pics/ori.jpg",
        additional:"Costume making of character Orianna in game League of Legend"
    },
    {id:4, title:"Levi doll", imgsrc:"./pics/Levi.jpg",
        additional:"Doll making of character Levi in anime Attack on Titans"
    },
    {id:4, title:"Kandappa gown", imgsrc:"./pics/kdp.jpg",
        additional:"Cosplay making of character Kandappa in manga RG-Veda"
    },
    {id:4, title:"Soma suit", imgsrc:"./pics/som.jpg",
        additional:"Cosplay making of character Soma in manga RG-Veda"
    },
    {id:3, title:"Bee Flightened", imgsrc:"./pics/beeFlightened.png",
        additional:"Android shooting game"
    },
    {id:2, title:"Tsurumaru emoji", imgsrc:"./pics/tsuru.png",
        additional:"Fanart of game Token Ranbu"
    },
    {id:1, title:"Digi Calligraphy", imgsrc:"./pics/helloWorld.png",
        additional:"Random little inspirations about how a programmer will do arts."
    },
    {id:1, title:"Portfolio Cover picture", imgsrc:"./pics/bg.jpg",
        additional:"As for my portfolio cover page, I want the picture to show to some extent how a person I am. So I put my favorite things to a pattern."
    },
];

function mapPosts(){
    let postContent = '';
    for(let post of posts){
        let singlePost =
            '<div class="column">\n' +
            '    <div class="content-block">\n' +
            '        <div class="post_title">\n' +
            post.title +
            '        </div>\n' +
            '        <img class="picture_block" src="'+post.imgsrc+'" />\n' +
            '        <div class="post_desc">\n' +
            post.additional +
            '        </div>\n' +
            '    </div>\n' +
            '</div>'
        postContent += singlePost;
    }
    $('#posts').html(postContent);
}

$(document).ready(function () {
    mapPosts();
    }
)