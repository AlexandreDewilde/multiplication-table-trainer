import React, {useEffect, useState} from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { withTranslation } from 'react-i18next';
import { t } from 'i18n-js';
import i18n from '../i18n'

function FinishScreen(props) {
    const [bestScore, setBestScore] = useState(props.route.params.score)

    useEffect(() => {
        _setBestScore();
    });

    const menu = () => {
        props.navigation.navigate('Menu');
    }

    const _setBestScore =  async () => {
        try {
            let bestScoreStorage = await AsyncStorage.getItem('BestScore');
            if (bestScoreStorage !== null) {
                if (parseInt(bestScoreStorage) > props.route.params.score) setBestScore(bestScoreStorage);
                else AsyncStorage.setItem('BestScore', (props.route.params.score).toString());
            }
            else {
                AsyncStorage.setItem('BestScore', (props.route.params.score).toString());
            }
        }
        catch (error) {
            console.log(error);
        }
    }


    return(
        <View style={styles.main_container} i18n={i18n}>
            <Text style={styles.title_text}>{t('game_over')}</Text>
            <Text style={styles.score_text}>Score : {props.route.params.score}</Text>
            <Text style={styles.best_score_text}>{t('best_score')} : {bestScore}</Text>
            <View style={{margin:20}}>
                <Button title='Menu' onPress={() => menu()}/>
            </View>
        </View>
    );
}

export default withTranslation()(FinishScreen)

const styles = StyleSheet.create({
    main_container: {
        flex:1
    },
    title_text: {
        fontSize: 20,
        textAlign:'center',
        fontWeight: 'bold'
    },
    score_text: {
        textAlign:'center',
        fontSize:17
    },
    best_score_text: {
        textAlign:'center',
        fontSize:20,
        fontWeight: 'bold'
    }
});