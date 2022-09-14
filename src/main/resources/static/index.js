function clickGetButtonHandler (){
    url = $("#urlString").val();
    $.ajax({
            url: "/urlInfo",
            data: { "url": url},
            method: "GET",
            dataType : "json"
        })
        .done(function(json) {
            if(json.errorMsg == "invalid Param"){
                alert("적절한 값을 입력해주세요.");
                return;
            }
            if(json.provider_name == "YouTube"){
                $("table").html("<tr><td>title</td><td>"+json.title+"</td></tr>")
                            .append("<tr><td>author_name</td><td>"+json.author_name+"</td></tr>")
                            .append("<tr><td>author_url</td><td><a href = \""+json.author_url+"\">"+json.author_url+"</a></td></tr>")
                            .append("<tr><td>type</td><td>"+json.type+"</td></tr>")
                            .append("<tr><td>height</td><td>"+json.height+"</td></tr>")
                            .append("<tr><td>width</td><td>"+json.width+"</td></tr>")
                            .append("<tr><td>version</td><td>"+json.version+"</td></tr>")
                            .append("<tr><td>provider_name</td><td>"+json.provider_name+"</td></tr>")
                            .append("<tr><td>provider_url</td><td><a href = \""+json.provider_url+"\">"+json.provider_url+"</a></td></tr>")
                            .append("<tr><td>thumbnail_height</td><td>"+json.thumbnail_height+"</td></tr>")
                            .append("<tr><td>thumbnail_width</td><td>"+json.thumbnail_width+"</td></tr>")
                            .append("<tr><td>thumbnail_url</td><td><a href = \""+json.thumbnail_url+"\">"+json.thumbnail_url+"</a><img src =\""+json.thumbnail_url+"\" ></td></tr>")
                            .append("<tr><td>html</td><td><xmp>"+json.html+"</xmp>"+json.html+"</td></tr>");
            }else if (json.provider_name == "Twitter"){
                $("table").html("<tr><td>author_name</td><td>"+json.author_name+"</td></tr>")
                            .append("<tr><td>author_url</td><td><a href = \""+json.author_url+"\">"+json.author_url+"</a></td></tr>")
                            .append("<tr><td>url</td><td><a href = \""+json.url+"\">"+json.url+"</a></td></tr>")
                            .append("<tr><td>type</td><td>"+json.type+"</td></tr>")
                            .append("<tr><td>cache_age</td><td>"+json.cache_age+"</td></tr>")
                            .append("<tr><td>height</td><td>"+json.height+"</td></tr>")
                            .append("<tr><td>width</td><td>"+json.width+"</td></tr>")
                            .append("<tr><td>version</td><td>"+json.version+"</td></tr>")
                            .append("<tr><td>provider_name</td><td>"+json.provider_name+"</td></tr>")
                            .append("<tr><td>provider_url</td><td><a href = \""+json.provider_url+"\">"+json.provider_url+"</a></td></tr>")
                            .append("<tr><td>html</td><td><xmp>"+json.html+"</xmp>"+json.html+"</td></tr>");
            }else if (json.provider_name == "Vimeo"){
                $("table").html("<tr><td>title</td><td>"+json.title+"</td></tr>")
                            .append("<tr><td>author_name</td><td>"+json.author_name+"</td></tr>")
                            .append("<tr><td>description</td><td>"+json.description+"</td></tr>")
                            .append("<tr><td>is_plus</td><td>"+json.is_plus+"</td></tr>")
                            .append("<tr><td>account_type</td><td>"+json.account_type+"</td></tr>")
                            .append("<tr><td>duration</td><td>"+json.duration+"</td></tr>")
                            .append("<tr><td>upload_date</td><td>"+json.upload_date+"</td></tr>")
                            .append("<tr><td>video_id</td><td>"+json.video_id+"</td></tr>")
                            .append("<tr><td>uri</td><td>"+json.uri+"</td></tr>")
                            .append("<tr><td>author_url</td><td><a href = \""+json.author_url+"\">"+json.author_url+"</a></td></tr>")
                            .append("<tr><td>thumbnail_url_with_play_button</td><td><a href = \""+json.thumbnail_url_with_play_button+"\">"+json.thumbnail_url_with_play_button+"</a></td></tr>")
                            .append("<tr><td>type</td><td>"+json.type+"</td></tr>")
                            .append("<tr><td>height</td><td>"+json.height+"</td></tr>")
                            .append("<tr><td>width</td><td>"+json.width+"</td></tr>")
                            .append("<tr><td>version</td><td>"+json.version+"</td></tr>")
                            .append("<tr><td>provider_name</td><td>"+json.provider_name+"</td></tr>")
                            .append("<tr><td>provider_url</td><td><a href = \""+json.provider_url+"\">"+json.provider_url+"</a></td></tr>")
                            .append("<tr><td>thumbnail_height</td><td>"+json.thumbnail_height+"</td></tr>")
                            .append("<tr><td>thumbnail_width</td><td>"+json.thumbnail_width+"</td></tr>")
                            .append("<tr><td>thumbnail_url</td><td><a href = \""+json.thumbnail_url+"\">"+json.thumbnail_url+"</a><img src =\""+json.thumbnail_url+"\" ></td></tr>")
                            .append("<tr><td>html</td><td><xmp>"+json.html+"</xmp><div>"+json.html+"</div></td></tr>");
            }

        })
        .fail(function(xhr, status, errorThrown) {
            alert(errorThrown);
        });
}