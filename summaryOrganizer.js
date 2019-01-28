let posts = [
    {id:1, title:"hey", imgsrc:"", additional:"hwyhwy"},
    {id:2, title:"hey2", imgsrc:"", additional:"hwyhwy"},
    {id:3, title:"hey3", imgsrc:"", additional:"hwyhwy"},
    {id:4, title:"hey4", imgsrc:"", additional:"hwyhwy"},
];

function mapPosts(){
    let postContent = '';
    for(let post of posts){
        let singlePost =
            '<div class="column">\n' +
            '    <div class="content-block">'+
                    post.title+' '+post.additional+
            '    </div>\n' +
            '</div>';
        postContent += singlePost;
    }
    //$('#posts').html(postContent);
}

$(document).ready(function () {
    mapPosts();
    }
)