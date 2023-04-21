import { useCallback, useEffect, useState } from 'react';
import './drumMachine.css'


const sounds = [
    {keyCode: 81,
        key: 'Q',
        id: 'drum1',
        url: './src_sounds_hihat.wav',
        name: 'HI HAT'
    },
    {keyCode: 87,
        key: 'W',
        id: 'drum2',
        url: 'LeBlnche - Gangsta Snare.wav',
        name: 'SNARE'
    },
    {keyCode: 69,
        key: 'E',
        id: 'drum3',
        url: 'LeBlnche - Clippers Hi-Hat.wav',
        name: 'HI HAT 2'
    },
    {keyCode: 65,
        key: 'A',
        id: 'drum4',
        url: 'LeBlnche - Compton Rim.wav',
        name: 'RIM'
    },
    {keyCode: 83,
        key: 'S',
        id: 'drum5',
        url: 'LeBlnche - Tambourine Perc 1.wav',
        name: 'TAMBOURINE'
    },
    {keyCode: 68,
        key: 'D',
        id: 'drum6',
        url: 'LeBlnche - Heavy Hat Perc.wav',
        name: 'HEAVY HAT'
    },
    {keyCode: 90,
        key: 'Z',
        id: 'drum7',
        url: 'LeBlnche - Royale Kick.wav',
        name: 'KICK'
    },
    {keyCode: 88,
        key: 'X',
        id: 'drum8',
        url: 'LeBlnche - tradition Perc.wav',
        name: 'TRADITIONAL'
    },
    {keyCode: 67,
        key: 'C',
        id: 'drum9',
        url: 'LeBlnche - Miami Rim.wav',
        name: 'RIM 2'
    }
]
const DrumMachine = () =>{
    const[display, setDisplay] = useState("")
    
    const handleKeyDown = useCallback((e) =>{

        if(e.keyCode === 81){
            playSound(sounds[0].key)
        }
        if(e.keyCode === 87){
            playSound(sounds[1].key)
        }
        if(e.keyCode === 69){
            playSound(sounds[2].key)
        }
        if(e.keyCode === 65){
            playSound(sounds[3].key)
        }
        if(e.keyCode === 83){
            playSound(sounds[4].key)
        }
        if(e.keyCode === 68){
            playSound(sounds[5].key)
        }
        if(e.keyCode === 90){
            playSound(sounds[6].key)
        }
        if(e.keyCode === 88){
            playSound(sounds[7].key)
        }
        if(e.keyCode === 67){
            playSound(sounds[8].key)
        }
    }, [])
    const playSound = (key) => {
        
        const audio = document.getElementById(key)
        console.log(audio)
        setDisplay(audio.id)
        audio.play()
	};
    useEffect(() => {
        document.addEventListener("keydown", handleKeyDown)
    }, [handleKeyDown])
   
    return(
        <div id="drum-machine">
            <div id="drum-header">
                <h1>DRUMKIT - <span className="italic">click buttons or hit keys to play sounds</span></h1>
            </div>
            
            <div id="drum-body">

                {sounds.map((sound, i) => (
                    <button className="drum-pad" id={sound.id}  key={sound.key} onClick={() => playSound(sound.key)}>
                        {sound.key}
                        <audio className="clip" id={sound.key} key={sound.key} src={sound.url}/>
                    </button>
                ))}
                <div id="display">
                    {display}
                </div>
            </div>
        </div>
    )
}
export default DrumMachine;