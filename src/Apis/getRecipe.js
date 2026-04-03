
export default function getRecipe(list){
    return fetch("https://api.anthropic.com/v1/messages",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({
            model:"claude-sonnet-4-20250514",
            max_tokens:1000,
            messages:[{
                role:"user",
                content:`I have these ingredients:${list.join(', ')} suggest all possible recipe with these please.`
            }]

        })

    }).then((res)=>res.json())
      .then((data)=>data.content.map(b=>b.text).join(''));

    
}