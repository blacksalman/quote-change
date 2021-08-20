function generate(){
    var quotes = {
        "-Mahatma Ghandhi" : '"First they ignore you, then they laugh at you, then they fight you, then you win."',
        "-Pandit Jawarharlal Nehru" : '"A moment comes, which comes but rarely in history, when we step out from the old to the new; when an age ends; and when the soul of a nation long suppressed finds utterance."',
        "-A.P.J. Abdul Kalam" : '"Don’t take rest after your first victory because if you fail in second, more lips are waiting to say that your first victory was just luck."',
        "-Sarojini Naidu" : '" We want deeper sincerity of motive, a greater courage in speech and earnestness in action."'
    } 

    var authors = Object.keys(quotes);
    
    var author = authors[Math.floor(Math.random() * authors.length)];

    var quote = quotes[author];

    document.getElementById("quote").innerHTML = quote;
    document.getElementById("author").innerHTML = author;
}