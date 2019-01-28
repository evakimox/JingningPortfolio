let posts = [
    {id:1, title:"hey", imgsrc:"./pics/bg.jpg", additional:"hwyhwy"},
    {id:2, title:"hey2", imgsrc:"./pics/824.jpg", additional:"hwyhwy"},
    {id:3, title:"hey3", imgsrc:"./pics/piano.jpg", additional:"hwyhwy"},
    {id:4, title:"hey4", imgsrc:"./pics/tsuru.png", additional:"hwyhwy"},
];

function mapPosts(){
    let postContent = '';
    for(let post of posts){
        let singlePost =
            '<div class="column">\n' +
            '    <div class="content-block">\n' +
            '        <div class="post_title">\n' +
            '            Title\n' +
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