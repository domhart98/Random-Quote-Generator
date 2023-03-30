/*import { useCallback, useEffect, useState } from 'react';
import './drumMachine.css'

const sounds = [
    {keyCode: 81,
        key: 'Q',
        id: 'drum1',
        url: './src_sounds_hihat.wav'
    },
    {keyCode: 87,
        key: 'W',
        id: 'drum2',
        url: 'LeBlnche - Gangsta Snare.wav'
    },
    {keyCode: 69,
        key: 'E',
        id: 'drum3',
        url: 'LeBlnche - Clippers Hi-Hat.wav'
    },
    {keyCode: 65,
        key: 'A',
        id: 'drum4',
        url: 'LeBlnche - Compton Rim.wav'
    },
    {keyCode: 83,
        key: 'S',
        id: 'drum5',
        url: 'LeBlnche - Tambourine Perc 1.wav'
    },
    {keyCode: 68,
        key: 'D',
        id: 'drum6',
        url: 'LeBlnche - Heavy Hat Perc.wav'
    },
    {keyCode: 90,
        key: 'Z',
        id: 'drum7',
        url: 'LeBlnche - Royale Kick.wav'
    },
    {keyCode: 88,
        key: 'X',
        id: 'drum8',
        url: 'LeBlnche - tradition Perc.wav'
    },
    {keyCode: 67,
        key: 'C',
        id: 'drum9',
        url: 'LeBlnche - Miami Rim.wav'
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
        setDisplay(audio.src)
        audio.play()
	};
    useEffect(() => {
        document.addEventListener("keydown", handleKeyDown)
    }, [handleKeyDown])
    return(
        <div id="drum-machine">
            <h1>Drumkit</h1>
            <div id="drums">

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
export default DrumMachine;*/