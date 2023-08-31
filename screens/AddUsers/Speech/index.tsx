import React from 'react';
import { Button, StatusBar, View } from 'react-native';
import { Audio } from 'expo-av';
import * as SpeechFunc from 'expo-speech';
import axios from "axios";

export const Speech = () => {
  const [sound, setSound] = React.useState();
  // useEffect(() => {
  //   Tts.setDefaultLanguage('en-US'); // Устанавливаем язык (по умолчанию)
  //   Tts.setDefaultRate(0.5); // Устанавливаем скорость озвучивания
  // }, []);
  const speakText = async () => {
    const apiKey = 'YOUR_YANDEX_API_KEY'
    // const textToSpeak = 'қазақ әліпбиі'
    const textToSpeak = 'привет'
    // const { sound } = await Audio.Sound.createAsync(
    //   require('../../../sound.mp3'),
    // );
    // setSound(sound);
    // //
    // await sound.playAsync();
    const response = await axios.post(
        'https://tts.api.cloud.yandex.net/speech/v1/tts:synthesize',
        { text: textToSpeak, lang: 'ru-RU', format: 'oggopus' },
        { headers: { Authorization: `Bearer ${apiKey}` } }
    );

    const audioData = response.data;
    //
    await SpeechFunc.playAsync(audioData, { rate: 1 });
    // SpeechFunc.speak('қазақ әліпбиі', { language: 'kz' });
  };

  return (
    <View>
      <StatusBar />
      <Button title="Озвучить" onPress={speakText} />
    </View>
  );
};
