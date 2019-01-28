let posts = [
    {id:1, title:"Portfolio Cover picture", imgsrc:"./pics/bg.jpg",
        additional:"As for my portfolio cover page, I want the picture to show to some extent how a person I am. So I put my favorite things to a pattern."
    },
    {id:2, title:"Clock with faries", imgsrc:"./pics/824.jpg",
        additional:"This picture was inspired by a rainy day, when the temperature drops, and I thought autumn is approaching by the time."
    },
    {id:3, title:"Kuro Mujo and Shiro Mujo on Piano Keys", imgsrc:"./pics/piano.jpg",
        additional:"Fanart of game Onmyoji"
    },
    {id:4, title:"Tsurumaru emoji", imgsrc:"./pics/tsuru.png",
        additional:"Fanart of game Token Ranbu"
    },
    {id:5, title:"Nobody Alive", imgsrc:"./pics/login.gif",
        additional:"PC indie game"
    },
    {id:6, title:"Bee Flightened", imgsrc:"./pics/beeFlightened.png",
        additional:"Android shooting game"
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