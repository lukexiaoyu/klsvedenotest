Deno.serve(()=>{
    return new Response("Hello World!",{
        status:200,
        headers:new Headers({
            "content-type":"text/plain"
        })
    })
})