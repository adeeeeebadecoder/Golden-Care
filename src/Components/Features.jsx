import React from "react";
import useSpeech from "../hooks/useSpeech";

const Features = () => {
    const { speak, pause, resume, stop, voices, setSelectedVoice, rate, setRate, pitch, setPitch } = useSpeech();

    return (
        <div>
            <h1>Website Features</h1>

            {/* Voice Selection Dropdown */}
            <label>Choose Voice:</label>
            <select onChange={(e) => setSelectedVoice(voices[e.target.value])}>
                {voices.map((voice, index) => (
                    <option key={index} value={index}>
                        {voice.name} ({voice.lang})
                    </option>
                ))}
            </select>

            {/* Speed Control */}
            <label>Speed:</label>
            <input
                type="range"
                min="0.5"
                max="2"
                step="0.1"
                value={rate}
                onChange={(e) => setRate(parseFloat(e.target.value))}
            />
            <span>{rate}</span>

            {/* Pitch Control */}
            <label>Pitch:</label>
            <input
                type="range"
                min="0.5"
                max="2"
                step="0.1"
                value={pitch}
                onChange={(e) => setPitch(parseFloat(e.target.value))}
            />
            <span>{pitch}</span>

            <button onClick={() => speak("This feature allows users to book appointments.")}>
                Home
            </button>

            <button onClick={() => speak("This feature helps you manage your profile settings.")}>
                Care Module
            </button>

            <button onClick={() => speak("This feature shows available doctors and their schedules.")}>
                About
            </button>

            <hr />
            <button onClick={pause}>Pause</button>
            <button onClick={resume}>Resume</button>
            <button onClick={stop}>Stop</button>
        </div>
    );
};

export default Features;
