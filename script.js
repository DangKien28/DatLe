
//Date

function displayPeriod(){
    const leaf = new Date("2025-2-14");
    const now = new Date();
    let period = Math.floor((now-leaf)/(60*60*24*1000));
    const element = document.getElementById('period');
    element.innerHTML = `<b>${period}⭐️</b>`;

    document.getElementById('day-now').innerHTML = `${now.getDate()}`;
    document.getElementById('month-now').innerHTML = `${now.getMonth()+1}`;
    document.getElementById('year-now').innerHTML = `${now.getFullYear()}`;
}

window.onload = displayPeriod

//sound

function playSound1()
{
    const play = document.getElementById('s1');
    const songs = document.getElementsByClassName('song');
    const songList = Array.from(songs);
    console.log(songList);
    

    if (!play.paused)
    {
        play.pause();
        play.currentTime = 0;
    }
    else
    {
        for (let i = 0; i<songList.length; i++)
        {
            if (!songList[i].paused)
            {
                songList[i].currentTime = 0;
                songList[i].pause();
            }
        }
        play.play();
    }
}

function playSound2()
{
    const play = document.getElementById('s2');
    const songs = document.getElementsByClassName('song');
    const songList = Array.from(songs);
    console.log(songList);
    

    if (!play.paused)
    {
        play.pause();
        play.currentTime = 0;
    }
    else
    {
        for (let i = 0; i<songList.length; i++)
        {
            if (!songList[i].paused)
            {
                songList[i].currentTime = 0;
                songList[i].pause();
            }
        }
        play.play();
    }
}

function playSound3()
{
    const play = document.getElementById('s3');
    const songs = document.getElementsByClassName('song');
    const songList = Array.from(songs);
    console.log(songList);
    

    if (!play.paused)
    {
        play.pause();
        play.currentTime = 0;
    }
    else
    {
        for (let i = 0; i<songList.length; i++)
        {
            if (!songList[i].paused)
            {
                songList[i].currentTime = 0;
                songList[i].pause();
            }
        }
        play.play();
    }
}

function playSound4()
{
    const play = document.getElementById('s4');
    const songs = document.getElementsByClassName('song');
    const songList = Array.from(songs);
    console.log(songList);
    

    if (!play.paused)
    {
        play.pause();
        play.currentTime = 0;
    }
    else
    {
        for (let i = 0; i<songList.length; i++)
        {
            if (!songList[i].paused)
            {
                songList[i].currentTime = 0;
                songList[i].pause();
            }
        }
        play.play();
    }
}

function playSound5()
{
    const play = document.getElementById('s5');
    const songs = document.getElementsByClassName('song');
    const songList = Array.from(songs);
    console.log(songList);
    

    if (!play.paused)
    {
        play.pause();
        play.currentTime = 0;
    }
    else
    {
        for (let i = 0; i<songList.length; i++)
        {
            if (!songList[i].paused)
            {
                songList[i].currentTime = 0;
                songList[i].pause();
            }
        }
        play.play();
    }
}

function playSound6()
{
    const play = document.getElementById('s6');
    const songs = document.getElementsByClassName('song');
    const songList = Array.from(songs);
    console.log(songList);
    

    if (!play.paused)
    {
        play.pause();
        play.currentTime = 0;
    }
    else
    {
        for (let i = 0; i<songList.length; i++)
        {
            if (!songList[i].paused)
            {
                songList[i].currentTime = 0;
                songList[i].pause();
            }
        }
        play.play();
    }
}

function playSound7()
{
    const play = document.getElementById('s7');
    const songs = document.getElementsByClassName('song');
    const songList = Array.from(songs);
    console.log(songList);
    

    if (!play.paused)
    {
        play.pause();
        play.currentTime = 0;
    }
    else
    {
        for (let i = 0; i<songList.length; i++)
        {
            if (!songList[i].paused)
            {
                songList[i].currentTime = 0;
                songList[i].pause();
            }
        }
        play.play();
    }
}
