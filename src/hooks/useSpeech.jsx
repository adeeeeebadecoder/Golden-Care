import { useState, useEffect } from "react";

const useSpeech = () => {
    const [voices, setVoices] = useState([]);
    const [selectedVoice, setSelectedVoice] = useState(null);
    const [rate, setRate] = useState(1);
    const [pitch, setPitch] = useState(1);

    useEffect(() => {
        const loadVoices = () => {
            let synthVoices = window.speechSynthesis.getVoices();
            console.log("Available Voices:", synthVoices);
            if (synthVoices.length > 0) {
                setVoices(synthVoices);
                setSelectedVoice(synthVoices[0]); // Default voice
            }
        };

        if (window.speechSynthesis.onvoiceschanged !== undefined) {
            window.speechSynthesis.onvoiceschanged = loadVoices;
        }

        loadVoices(); 

    }, []);

    const speak = (text) => {
        if (!window.speechSynthesis || !text) return;

        const utterance = new SpeechSynthesisUtterance(text);
        utterance.voice = selectedVoice || window.speechSynthesis.getVoices()[0];
        utterance.rate = rate;
        utterance.pitch = pitch;

        window.speechSynthesis.cancel(); // Stop previous speech
        window.speechSynthesis.speak(utterance);
    };

    return { speak, voices, setSelectedVoice, rate, setRate, pitch, setPitch };
};

export default useSpeech;
